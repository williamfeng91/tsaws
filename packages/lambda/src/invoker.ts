import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';
import { ErrorCodes, LambdaError } from './error';

export function createInvoker<
  TFunctions extends {
    [fnKey: string]: (req?: any) => Promise<any>;
  }
>({
  functionArns,
  getFunctionEnvVariableName = defaultGetFunctionEnvVariableName,
  lambdaClient = new LambdaClient({}),
}: {
  functionArns?: {
    [TKey in keyof TFunctions]?: string;
  };
  getFunctionEnvVariableName?: (fnKey: string) => string;
  lambdaClient?: LambdaClient;
} = {}): {
  [TKey in keyof TFunctions]: {
    invokeSync: TFunctions[TKey];
    invokeAsync: (...args: Parameters<TFunctions[TKey]>) => Promise<void>;
  };
} {
  return new Proxy(
    {},
    {
      get(target, fnKey) {
        if (typeof fnKey !== 'string') return undefined;

        const fnArn = resolveFnArn({
          functionArns,
          getFunctionEnvVariableName,
          fnKey,
        });

        const invoke = async (
          invocationType: string,
          req: Parameters<TFunctions[typeof fnKey]>[0]
        ) => {
          if (!fnArn) {
            throw new LambdaError({
              code: ErrorCodes.InvokeError,
              message: `Cannot resolve function ARN for ${fnKey}`,
            });
          }

          let output;
          try {
            output = await lambdaClient.send(
              new InvokeCommand({
                FunctionName: fnArn,
                InvocationType: invocationType,
                Payload: req ? Buffer.from(JSON.stringify(req)) : undefined,
              })
            );
          } catch (err) {
            if (err instanceof Error && (err as any).code) {
              throw new LambdaError({
                code: (err as any).code,
                message: err.message,
                cause: err,
              });
            }
            throw err;
          }
          if (output?.FunctionError) {
            throw new LambdaError({
              code: ErrorCodes.FunctionError,
              message: output.FunctionError,
            });
          }
          const res = output?.Payload
            ? JSON.parse(Buffer.from(output.Payload).toString())
            : undefined;
          return res;
        };

        const invokeSync = async (
          req: Parameters<TFunctions[typeof fnKey]>[0]
        ) => invoke('RequestResponse', req);
        const invokeAsync = async (
          req: Parameters<TFunctions[typeof fnKey]>[0]
        ) => {
          await invoke('Event', req);
        };

        return {
          invokeSync,
          invokeAsync,
        };
      },
    }
  ) as any;
}

function resolveFnArn({
  functionArns,
  fnKey,
  getFunctionEnvVariableName,
}: {
  functionArns?:
    | {
        [fnKey: string]: string | undefined;
      }
    | undefined;
  fnKey: string;
  getFunctionEnvVariableName: (fnKey: string) => string;
}) {
  const configuredFnArn = functionArns?.[fnKey];
  if (configuredFnArn) return configuredFnArn;

  // Resolve from environment variables
  const envVariable = getFunctionEnvVariableName(fnKey);
  return process.env[envVariable];
}

function defaultGetFunctionEnvVariableName(fnKey: string) {
  return `TSAWS_FN_${fnKey.toUpperCase()}`;
}

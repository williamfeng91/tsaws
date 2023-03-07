import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';
import { ErrorCodes, LambdaError } from './error';
import { createInvoker } from './invoker';

vi.mock('@aws-sdk/client-lambda', async (importOriginal) => ({
  ...(await importOriginal<any>()),
  LambdaClient: vi.fn(),
}));

const mockSubs = [
  {
    id: 'sub1',
    offerId: 'offer1',
    endDate: '2023-11-31T00:00:00.000Z',
  },
  {
    id: 'sub2',
    offerId: 'offer2',
    endDate: '2023-12-31T00:00:00.000Z',
  },
];
const TSAWS_FN_LISTSUBSCRIPTIONS = 'LIST_SUBS_ARN';

describe('createInvoker', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      TSAWS_FN_LISTSUBSCRIPTIONS,
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  test('with default options', async () => {
    const req = {
      userId: 'abc',
    };
    const mockSend = vi.fn();
    (LambdaClient as any).mockReturnValue({
      send: mockSend,
    });
    const invoker = createInvoker();

    await invoker.listSubscriptions.invokeSync(req);

    expect(mockSend).toHaveBeenCalledOnce();
    expect(mockSend.mock.calls[0][0]).toBeInstanceOf(InvokeCommand);
    expect(mockSend.mock.calls[0][0].input).toMatchObject({
      InvocationType: 'RequestResponse',
      Payload: Buffer.from(JSON.stringify(req)),
    });
  });

  test('invokeSync should invoke with RequestResponse type', async () => {
    const req = {
      userId: 'abc',
    };
    const mockLambdaClient = {
      send: vi.fn(),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await invoker.listSubscriptions.invokeSync(req);

    expect(mockLambdaClient.send).toHaveBeenCalledOnce();
    expect(mockLambdaClient.send.mock.calls[0][0]).toBeInstanceOf(
      InvokeCommand
    );
    expect(mockLambdaClient.send.mock.calls[0][0].input).toMatchObject({
      InvocationType: 'RequestResponse',
      Payload: Buffer.from(JSON.stringify(req)),
    });
  });

  test('invokeAsync should invoke with Event type', async () => {
    const req = {
      userId: 'abc',
    };
    const mockLambdaClient = {
      send: vi.fn(),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await invoker.listSubscriptions.invokeAsync(req);

    expect(mockLambdaClient.send).toHaveBeenCalledOnce();
    expect(mockLambdaClient.send.mock.calls[0][0]).toBeInstanceOf(
      InvokeCommand
    );
    expect(mockLambdaClient.send.mock.calls[0][0].input).toMatchObject({
      InvocationType: 'Event',
      Payload: Buffer.from(JSON.stringify(req)),
    });
  });

  test('should return result as an object', async () => {
    const mockLambdaClient = {
      send: vi.fn().mockResolvedValueOnce({
        Payload: JSON.stringify(mockSubs),
      }),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    const result = await invoker.listSubscriptions.invokeSync();

    expect(result).toEqual(mockSubs);
  });

  test('should throw error if function ARN cannot be resolved', async () => {
    delete process.env.TSAWS_FN_LISTSUBSCRIPTIONS;
    const mockLambdaClient = {
      send: vi.fn(),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await expect(invoker.listSubscriptions.invokeSync()).rejects.toThrow(
      new LambdaError({
        code: ErrorCodes.InvokeError,
        message: `Cannot resolve function ARN for listSubscriptions`,
      })
    );
  });

  test('should throw error from aws-sdk', async () => {
    const mockErrorData = {
      code: 'TooManyRequestsException',
      message: 'Too many requests',
    };
    const mockError = new Error(mockErrorData.message);
    (mockError as any).code = mockErrorData.code;
    const mockLambdaClient = {
      send: vi.fn().mockRejectedValueOnce(mockError),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await expect(invoker.listSubscriptions.invokeSync()).rejects.toThrow(
      new LambdaError(mockErrorData)
    );
  });

  test('should throw error if lambda returns function error', async () => {
    const mockLambdaClient = {
      send: vi.fn().mockResolvedValueOnce({
        FunctionError: 'Unhandled',
      }),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await expect(invoker.listSubscriptions.invokeSync()).rejects.toThrow(
      new LambdaError({
        code: ErrorCodes.FunctionError,
        message: `Unhandled`,
      })
    );
  });

  test('should throw unknown error', async () => {
    const mockLambdaClient = {
      send: vi.fn().mockRejectedValueOnce(new TypeError('Unknown')),
    };
    const invoker = createInvoker({
      lambdaClient: mockLambdaClient as any,
    });

    await expect(invoker.listSubscriptions.invokeSync()).rejects.toThrow(
      new TypeError('Unknown')
    );
  });

  test('should return undefined for non-string property', () => {
    const invoker = createInvoker();
    // @ts-expect-error
    expect(invoker[Symbol()]).toBe(undefined);
  });

  test('functionArns', async () => {
    const mockLambdaClient = {
      send: vi.fn(),
    };
    const functionArns = {
      listSubscriptions: TSAWS_FN_LISTSUBSCRIPTIONS,
    };
    const invoker = createInvoker({
      functionArns,
      lambdaClient: mockLambdaClient as any,
    });

    await invoker.listSubscriptions.invokeSync();

    expect(mockLambdaClient.send).toHaveBeenCalledOnce();
    expect(mockLambdaClient.send.mock.calls[0][0]).toBeInstanceOf(
      InvokeCommand
    );
    expect(mockLambdaClient.send.mock.calls[0][0].input).toMatchObject({
      FunctionName: functionArns.listSubscriptions,
      InvocationType: 'RequestResponse',
    });
  });

  test('getFunctionEnvVariableName', async () => {
    process.env.MY_PREFIX_LISTSUBSCRIPTIONS = TSAWS_FN_LISTSUBSCRIPTIONS;
    const mockLambdaClient = {
      send: vi.fn(),
    };
    const invoker = createInvoker({
      getFunctionEnvVariableName: (fnKey) => `MY_PREFIX_${fnKey.toUpperCase()}`,
      lambdaClient: mockLambdaClient as any,
    });

    await invoker.listSubscriptions.invokeSync();

    expect(mockLambdaClient.send).toHaveBeenCalledOnce();
    expect(mockLambdaClient.send.mock.calls[0][0]).toBeInstanceOf(
      InvokeCommand
    );
    expect(mockLambdaClient.send.mock.calls[0][0].input).toMatchObject({
      FunctionName: TSAWS_FN_LISTSUBSCRIPTIONS,
      InvocationType: 'RequestResponse',
    });
  });
});

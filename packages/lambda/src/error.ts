export class LambdaError extends Error {
  public readonly code: string;

  constructor({
    code,
    message,
    cause,
  }: {
    code: string;
    message: string;
    cause?: unknown;
  }) {
    super(message, {
      cause,
    });
    this.code = code;
  }
}

export enum ErrorCodes {
  FunctionError = 'FunctionError',
  InvokeError = 'InvokeError',
}

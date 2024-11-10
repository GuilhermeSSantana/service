export default class ErrorInternal extends Error {
  message: string;
  statusCode?: number;
  error?: string | string[] | object | object[];
  keyValues?: object;
  code?: number;

  constructor(
    message: string,
    statusCode?: number,
    error?: string | string[] | object | object[],
    keyValues?: object,
    code?: number
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;

    if (error) {
      this.error = error;
    }
  }
}

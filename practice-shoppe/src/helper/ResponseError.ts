interface IOptions {
  body: string;
  status: number;
}

class ResponseError extends Error {
  body;
  status;

  constructor(message: string, options: IOptions) {
    super(message);

    this.body = options?.body;
    this.status = options?.status;
  }
}

export { ResponseError };

export  interface Context {
  req: Request,
  reqCtx: {
    body: string,
    query: {}
  },
  res: Response,
  resCtx: {
    statusMessage: String,
    statusCode: number,
    headers: {},
    body: string | Buffer
  }
}

export interface DataParams {
  index: number
}
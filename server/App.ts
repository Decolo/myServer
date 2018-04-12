import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'
import { Context } from './types/context'

class App {
  public parserChain: Array<any>;
  public middleWareChain: any
  public constructor() {
    this.parserChain =  []
    this.middleWareChain = Promise.resolve() 
  }
  public use(parser: any) {
    return this.parserChain.push(parser)
  }
  public compositeMiddleWare(context: Context) {
    for (let parser of this.parserChain) {
      this.middleWareChain = this.middleWareChain.then(() => {
        return parser(context)
      })
    }
    return this.middleWareChain
  }
  public initServer() {
    return (request: Request, response: Response) => {
      const context = {
        req: request, 
        reqCtx: {
          body: '',
          query: {}
        },
        res: response,
        resCtx: {
          statusMessage: 'not found',
          statusCode: 404,
          headers: {},
          body: ''
        }
      }
      this.compositeMiddleWare(context).then(() => {
        const { body, statusCode, statusMessage, headers } = context.resCtx
        console.log(response)
        response.writeHead(statusCode, statusMessage, {
          ...headers,
          'X-powered-by': 'Node.js',
          'Access-Control-Allow-Origin': 'http://localhost:8080',
          'Access-Control-Allow-Credentials': true
        })
        response.end(body)
      })  
    }
  }
}
export default new App()

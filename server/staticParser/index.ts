import * as fs from 'fs'
import * as path from 'path'
import * as mime from 'mime'
import { Context } from '../types/context'
import * as types from '../types/context'
// console.log(types)

const staticParser = (context: Context) => {
  return new Promise((resolve, reject) => {
    const { req, resCtx } = context
    let { url, method } = req

    if (url === '/') url = '/index.html'
    const staticPath = path.resolve(process.cwd(), 'dist', `.${url}`)
    if (url.match(/\.*[a-z]$/) && !url.match(/\/action/) && method === 'GET') {
        resCtx.headers = {
          ...resCtx.headers,
          'Content-Type': mime.getType(staticPath)
        }
        fs.readFile(staticPath, (error, content) => {
          if (error) {
            resCtx.body = `Error ${error.stack}`
          } else {
            resCtx.statusMessage = 'Ok'
            resCtx.statusCode = 200
            resCtx.body = content
          }
          resolve()
        })
      } else {
        resolve()
      }
  })
}
export default staticParser
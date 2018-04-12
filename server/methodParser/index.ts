import { Context } from '../types/context'

const methodParser = (context: Context) => {
  return (async () => {
    const { req, resCtx } = context
    const { method } = req
    if (method === 'OPTIONS') {
      resCtx.headers = {
        ...resCtx.headers,
        Allow: 'GET POST OPTIONS'
      }
      resCtx.statusMessage = 'Ok'
      resCtx.statusCode = 200
    }
  })()
}

export default methodParser
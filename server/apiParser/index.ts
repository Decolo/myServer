import router from './apiHandler/index'
import { Context } from '../types/context'
// import { foo } from './router/index'
// console.log('urlParser' + foo())

const apiParser = (context: Context) => {
   return (async () => {
    const { req, resCtx } = context
    let { url } = req
    let ret 
    if (url.match(/\/action/)) {
      try {
        let ret = await router.routes(context)
        resCtx.body = JSON.stringify(ret)
        resCtx.statusMessage = 'Ok'
        resCtx.statusCode = 200
      } catch(error) {
        resCtx.body = `Error ${error.stack}`
      }
    }
  })()
}

export default apiParser
import { Context } from '../../types/context'
import * as path from 'path'

export default class Router {
  public mapAction: {
    get: object,
    post: object
  }
  constructor (){
    this.mapAction = {
      get: {},
      post: {}
    }
  }
  public get = (url, callback) => {
    this.mapAction.get[url] = callback
  }
  public post = (url, callback) => {
    this.mapAction.post[url] = callback
  }
  public routes = async(context: Context) => {
    const { req } = context
    let { method, url } = req 
    method = method.toLowerCase()
    return await this.mapAction[method][url].call(null, context)
  }
}

// export let foo = () => {
//   return bar()
// }
// console.log('router.ts')
// function bar() {
//   return 2
// }
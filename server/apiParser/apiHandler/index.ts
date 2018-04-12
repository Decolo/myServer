import Router from '../router/index'
import { Context, DataParams }  from '../../types/context';

const router = new Router()



router.get('/action/getDate', async (context: Context) => {
  let ret = await foo1()
  return ret
})

router.get('/action/getNum', async (context: Context) => {
  let ret = await foo2()
  return ret
})

router.post('/action/getData', async (context: Context) => {
  const { reqCtx } = context
  const { body } = reqCtx
  const dataParams = JSON.parse(body)
  return getData(dataParams)
})



const foo1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2017.07.01 - 07.31')
    }, 400)
  })
}

const foo2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(800924)
    }, 400)
  })
}

const getData = (params: DataParams) => {
  const { index } = params
  const data = [
    {
      pv: 1,
      cv: 2
    },
    {
      pv: 3,
      cv: 4
    },
    {
      pv: 62000,
      cv: 92000
    },
    {
      pv: 82000,
      cv: 152000
    },
    {
      pv: 5,
      cv: 6
    },
    {
      pv: 7,
      cv: 8
    }
  ]
  return data[Number(index)]
}
export default router
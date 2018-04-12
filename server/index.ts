import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'
import app from './App'
import staticParser from './staticParser/index'
import apiParser from './apiParser/index'
import methodParser from './methodParser/index'
// ?????????????????????????????????
// import * as foo from './test'
// console.log(foo)

app.use(methodParser)
app.use(staticParser)
app.use(apiParser)


const PORT = process.env.PORT || 7001
const server = http.createServer(app.initServer()).listen(PORT, () => {
  console.log(`A server is started on PORT ${PORT}`)
})
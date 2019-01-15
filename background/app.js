const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const {getData, checkOpenId, updateData} = require('./common/mysql')
const app = new Koa()

app.use(bodyParser())

let router = new Router()

router.get('/userList', async (ctx) => {
  const data = await getData()
  ctx.response.body = {data}
})

router.post('/login', async (ctx) => {
  console.log(ctx.request.body.openid)
  const openid = ctx.request.body.openid
  const data = await checkOpenId(openid)
  ctx.response.body = data
})

router.put('/userList', async (ctx) => {
  console.log(ctx.request.body)
  const data = ctx.request.body
  const res = await updateData(data)
  ctx.response.body = res
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
  console.log('start')
})


import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const PORT = process.env.PORT || 1337
const router = new Router()

router
  .use(bodyParser())
  .get('/', (ctx, next) => {
    ctx.body = 'hello world'
  })

app
  .use(router.routes())
  .listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)
  )

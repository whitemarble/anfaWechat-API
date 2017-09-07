const router = require('koa-router')()

module.exports = router.get('/', async ( ctx )=>{
  let html = `Nothing Here!`
  ctx.body = html
})
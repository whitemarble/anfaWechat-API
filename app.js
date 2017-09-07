const Koa = require('koa');
const fs = require('fs')
const app = new Koa()
const router = require('./routers/index')
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods())


const port = process.env.PORT || 443
app.listen(port, () => console.log('Server listening on', port))
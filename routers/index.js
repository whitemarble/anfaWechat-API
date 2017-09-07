const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const page = require('./page')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())


const customerService = require('./customerService');
const jwt = require('../middlewares/jwt');
const authenticate = require('../middlewares/authenticate');
const jwtO = require("jsonwebtoken");

router.get('/customer', (ctx,next)=> {
    //let token = ctx.request.headers['authorization'];
    //token = token.replace('bearer ', '')
    //console.log(token)
    //let uuuu = jwtO.verify(token, 'A very secret key');
    //console.log(uuuu)
    ctx.body = customerService.getCustomers();
});

router.get('/customer/:id', jwt,(ctx,next) =>{
    if (customerService.getCustomer(ctx.params.id)) {
        ctx.body = customerService.getCustomer(ctx.params.id);
    }
    else {
        ctx.status = 404;
        ctx.body = {"error": "There is no customer with that id"};
    }
});

router.post('/customer', jwt,(ctx,next) =>{
    ctx.body = customerService.postCustomer(ctx.request.body);
});

router.post('/login', async (ctx,next) =>{
    await authenticate(ctx);
});



module.exports = router
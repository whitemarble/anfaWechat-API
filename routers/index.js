const router = require('koa-router')();
const jwt = require("jsonwebtoken");

const home = require('./home');
const checkin = require('./checkin');
const show_checkin = require('./show-checkin');
const register = require('./register');
const checkuser = require('./checkuser');

const user = require('./user');
const login = require('./login');
const tokencheck = require('./tokencheck');

//const authenticate = require('../middlewares/authenticate');


router.use('/', home.routes(), home.allowedMethods());
router.get('/checkin/:id',(ctx)=>{
    ctx.body = checkin(ctx.params.id);
});
router.post('/register',(ctx)=>{
    ctx.body = register(ctx.request.body);
});
router.get('/checkuser/:id',(ctx)=>{
    ctx.body = checkuser(ctx.params.id);
});
router.get('/show_checkin',(ctx)=>{
    ctx.body = show_checkin.first();
});
router.get('/show_checkin/:id',(ctx)=>{
    ctx.body = show_checkin.user(ctx.params.id);
});
router.get('/show_checkin/page/:index',(ctx)=>{
    ctx.body = show_checkin.page(ctx.params.index);
});




//For admin dashbord---------------------------------------------------------
router.post('/login',async (ctx)=>{
    ctx.body = await login(ctx.request.body);
});
router.get('/tokencheck/:token',(ctx)=>{
    ctx.body = tokencheck(ctx.params.token);
});
/*router.post('/login', async (ctx,next) =>{
    await authenticate(ctx);
});*/
router.get('/user',(ctx)=>{
    //let token = ctx.request.headers['authorization'];
    //token = token.replace('bearer ', '')
    //console.log(token)
    //let uuuu = jwt.verify(token, 'A very secret key');
    //console.log(uuuu)
    ctx.body = user.first();
});
router.get('/user/:id',(ctx)=>{
    ctx.body = user.user(ctx.params.id);
});
router.get('/user/page/:index',(ctx)=>{
    ctx.body = user.page(ctx.params.index);
});




module.exports = router
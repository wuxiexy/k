const router = require('koa-router')();



let cors = require('koa2-cors');     // koa 跨域
// 引入modejs的文件系统API
let fs = require('fs');             // node 文件







router.get('/api/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/api/string', async (ctx, next) => {
  ctx.body = {
      res: 'koa2 string'
  }
});

router.get('/api/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
});

router.get('/api/getJson', async (ctx,next) => {
    await cors();   // 允许跨域请求
    ctx.body = JSON.parse(fs.readFileSync('./static/material.json'));
});

module.exports = router;

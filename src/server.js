/*
let Koa = require('koa');
let Router = require('koa-router');

let cors = require('koa-cors');
// 引入modejs的文件系统API
let fs = require('fs');

const app = new Koa();
const router = new Router();

// 提供一个/getJson接口
router
    .get('/getJson', async ctx => {
        // 后端允许cors跨域请求
        await cors();
        // 返回给前端的数据
        ctx.body = JSON.parse(fs.readFileSync( './static/material.json'));

    });

// 将koa和两个中间件连起来
app.use(router.routes()).use(router.allowedMethods());

// 监听3000端口
app.listen(3000);*/

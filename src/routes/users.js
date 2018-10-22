const router = require('koa-router')()

// router.prefix('/users')

router.get('/api/', function (ctx, next) {
  ctx.body = 'this is a users response!'
});

router.get('/api/bar', function (ctx, next) {
  ctx.body = 'this is a users, bar response'
});

module.exports = router;

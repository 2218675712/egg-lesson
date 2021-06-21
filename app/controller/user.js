'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx);
    ctx.cookies.set('count', '321321321');
    ctx.session.userid = 4545;
    console.log(ctx.session.userid, {
      dataType: 'text',
    });
    ctx.body = 'hi, user';
    /*    await ctx.render('user.html', {
      id: 100,
      name: 'admin',
    });*/
  }

  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
    // ctx.body = 'lists';
    ctx.body = await ctx.service.user.lists();
  }

  async detail() {
    const { ctx } = this;
    const res = ctx.service.user.detail(ctx.query.id);
    console.log(res);
    ctx.body = ctx.query.id;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params.id;
  }

  async add() {
    const { ctx } = this;
    const rule = {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }
  async edit() {
    const { ctx } = this;
    ctx.body = 'edit';
  }
}

module.exports = UserController;

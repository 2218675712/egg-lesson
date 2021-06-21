'use strict';

const Controller = require('egg').Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx, app } = this;
    const res = await ctx.curl('http://127.0.0.1:7001/', {
      dataType: 'text',
    });
    console.log(res);
    ctx.body = '1212';
  }
}

module.exports = CurlController;

'use strict';
const { app, assert } = require('egg-mock/bootstrap');
describe('service user test', () => {
// 只执行当前的测试用例
  it.only('test detail', async () => {
  // it('test detail', async () => {
    // 获取上下文
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail(10);
    // 断言user变量是存在的
    assert(user);
    assert(user.id === 10);
  });
});

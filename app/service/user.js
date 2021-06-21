'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'Bob',
      age: 18,
    };
  }

  async lists() {
    try {
      const { app } = this;
      const res = await app.mysql.select('user');
      return res;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

module.exports = UserService;

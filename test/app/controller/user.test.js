'use strict';
const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  it('user index', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('hi, user');
  });

  it('user lists', async () => {
    await app.httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('lists');
  });
  it('user detail', async () => {
    await app.httpRequest()
      .get('/user/detail?id=123')
      .expect(200)
      .expect('123');
  });
  it('user detail2', async () => {
    await app.httpRequest()
      .get('/user/detail2/123')
      .expect(200)
      .expect('123');
  });
  it('user add', async () => {
    await app.httpRequest()
      .post('/user/add')
      .send({
        name: '小明',
        age: 18,
      })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: '小明',
          age: 18,
        },
      });
  });
});

const request = require('supertest');
const app = require('../index');
const expect = require('chai').expect;

describe('To-Do API', () => {
  it('should GET all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('should POST a new todo', async () => {
    const todo = { id: 1, title: 'Write Jenkins pipeline' };
    const res = await request(app)
      .post('/todos')
      .send(todo);
    expect(res.status).to.equal(201);
    expect(res.body).to.deep.equal(todo);
  });
});

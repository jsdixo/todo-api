const request = require('supertest');
const app = require('../index'); // Adjust path as needed

describe('To-Do API', () => {
  it('should GET all todos', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should POST a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ id: 1, task: 'Test task' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.task).toBe('Test task');
  });

  it('should PUT (update) a todo', async () => {
    // First, create a todo
    await request(app).post('/todos').send({ id: 2, task: 'Initial task' });

    // Then update it
    const res = await request(app)
      .put('/todos/2')
      .send({ id: 2, task: 'Updated task' });

    expect(res.statusCode).toEqual(200);
    expect(res.body.task).toBe('Updated task');
  });

  it('should DELETE a todo', async () => {
    // First, create a todo
    await request(app).post('/todos').send({ id: 3, task: 'To delete' });

    // Then delete it
    const res = await request(app).delete('/todos/3');
    expect(res.statusCode).toEqual(204);
  });
});

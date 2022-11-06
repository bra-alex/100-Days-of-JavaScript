const request = require('supertest')
const app = require('../app')

describe('Test GET /languages', () => {
    test('should return 200', async () => {
        return await request(app)
        .get('/languages')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})
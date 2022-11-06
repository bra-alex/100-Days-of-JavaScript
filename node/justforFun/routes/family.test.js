const request = require('supertest')
const app = require('../app')

describe('Test GET /family', () => {
   test('should return 200', async () => {
        return await request(app)
        .get('/family')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})

describe('Test GET /family/:id', () => {
    test('should return 200', async () => {
         return await request(app)
         .get('/family/0')
         .expect('Content-Type', /json/)
         .expect(200)
     })

     test('should return 400', async () => {
        const response = await request(app)
        .get('/family/900000')
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: "Could not find member"
        })
    })
 })
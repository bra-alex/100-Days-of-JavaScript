const request = require('supertest')

require('dotenv').config()

const app = require('../app')
const { connectMongo, disconnectMongo } = require('../services/mongo')

describe("Test Recipes API", () => {
    jest.setTimeout(20000);
    
    beforeAll(async () => {
        await connectMongo()
    })

    afterAll(async () => {
        await disconnectMongo()
    })

    describe('GET /recipes', () => {
        test('should return 200', async () => { 
            await request(app)
            .get('/recipes')
            .expect('Content-Type', /json/)
            .expect(200)
        })
    })
})

const request = require('supertest')
const app = require('../app')

describe('Test GET /friends', () => {
    test('should return 200', async () => {
        return await request(app)
        .get('/friends')
        .expect('Content-Type', /json/)
        .expect(200)
    })
})


describe('Test GET /friends/:id', () => {
    test('should return 200', async () => {
        return await request(app)
        .get('/friends/0')
        .expect('Content-Type', /json/)
        .expect(200)
    })
    
    test('should return 400', async () => {
        const response = await request(app)
        .get('/friends/900000')
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: "Could not find member"
        })
    })
})

describe('Test POST /friends', () => {
    const friendData = {
        name: "Thomas",
        age: "66",
        title: "Do I even know?",
        skills: ["They all do adwaman so you'll see it repeated. Thank you."]
    }
    
    const friendDataMissingSomething = {
        age: "66",
        title: "Do I even know?",
        skills: ["They all do adwaman so you'll see it repeated. Thank you."]
    }

    test('should return 201', async () => {
        return await request(app)
        .post('/friends')
        .send(friendData)
        .expect('Content-Type', /json/)
        .expect(201)
    })
    
    test('should return 400', async () => {
        const response = await request(app)
        .post('/friends')
        .send(friendDataMissingSomething)
        .expect('Content-Type', /json/)
        .expect(400)

        expect(response.body).toStrictEqual({
            error: "Missing data"
        })
    })
})
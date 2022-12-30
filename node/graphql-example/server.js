const express = require('express')
const { buildSchema } = require('graphql')
const { createHandler } = require('graphql-http/lib/use/express')

const schema = buildSchema(`
    type Query {
        products: [Product]
    }

    type Product{
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }

    type Review{
        rating: Int!
        comment: String
    }
`)

const root = {
    description: 'Red Shoe',
    price: 1.2
}

const PORT = 3000

const app = express()

app.use('/graphql', createHandler({
    schema: schema,
    rootValue: root
}))

app.listen(PORT, () => console.log('Running GraphQL server on port: ', PORT))
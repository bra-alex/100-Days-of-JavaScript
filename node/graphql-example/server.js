const path = require('path')
const express = require('express')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { createHandler } = require('graphql-http/lib/use/express')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})

const root = {
    products: require('./products/products.model'),
    orders: require('./orders/orders.model'),
}

const PORT = 3000

const app = express()

app.use('/graphql', createHandler({
    schema: schema,
    rootValue: root
}))

app.listen(PORT, () => console.log('Running GraphQL server on port: ', PORT))
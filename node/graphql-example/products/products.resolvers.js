const productsModel = require('./products.model')

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        product: (_, args) => {
            return productsModel.getProductById(args.id)
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsInPriceRange(args.minPrice, args.maxPrice)
        }
    },
    Mutation:{
        addNewProduct: (_, args) => {
            return productsModel.addNewProduct(args.id, args.description, args.price)
        },
        addNewReview: (_, args) => {
            return productsModel.addNewReview(args.productId, args.rating, args.comment)
        }
    }
}
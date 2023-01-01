const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 11.2,
        reviews: []
    },
    {
        id: 'blueshoe',
        description: 'Blue Shoe',
        price: 21.2,
        reviews: []
    },
    {
        id: 'pinkshoe',
        description: 'Pink Shoe',
        price: 31.2,
        reviews: []
    },
    {
        id: 'blackshoe',
        description: 'Black Shoe',
        price: 41.2,
        reviews: []
    }
]

function getAllProducts() {
    return products
}

function getProductById(id) {
    return products.find(product => product.id === id)
}

function getProductsInPriceRange(minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice)
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct)
    return newProduct
}

function addNewReview(id, rating, comment) {
    const product = getProductById(id)

    if (product) {
        const review = {
            rating,
            comment,
        }
    
        product.reviews.push(review)
        return review
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsInPriceRange,
    addNewProduct,
    addNewReview
}
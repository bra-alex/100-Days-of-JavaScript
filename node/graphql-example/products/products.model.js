const products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 11.2
    },
    {
        id: 'blueshoe',
        description: 'Blue Shoe',
        price: 21.2
    },
    {
        id: 'pinkshoe',
        description: 'Pink Shoe',
        price: 31.2
    },
    {
        id: 'blackshoe',
        description: 'Black Shoe',
        price: 41.2
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

module.exports = {
    getAllProducts,
    getProductById,
    getProductsInPriceRange
}
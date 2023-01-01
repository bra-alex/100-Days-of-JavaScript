const orders = [
    {
        date: '2015-05-03',
        subtotal: (11.2 * 2) + (21.2 * 4) + 31.2,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Red Shoe',
                    price: 11.2
                },
                quantity: 2
            },
            {
                product: {
                    id: 'blueshoe',
                    description: 'Blue Shoe',
                    price: 11.2
                },
                quantity: 4
            },
            {
                product: {
                    id: 'pinkshoe',
                    description: 'Pink Shoe',
                    price: 11.2
                },
                quantity: 1
            }
        ]
    }
]

function getAllOrders() {
    return orders
}

module.exports = {
    getAllOrders
}
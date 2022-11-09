const { getRecipes } = require('../model/recipes.model')

function httpsGetRecipes(req, res){
    return res.status(200).json(getRecipes())
}

module.exports = {
    httpsGetRecipes
}
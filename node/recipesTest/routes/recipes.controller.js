const { getRecipes } = require('../model/recipes.model')
const { getRecipe } = require('../services/query')


async function httpsGetRecipes(req, res){
    // const query = getRecipe(req.query)
    const recipes = await getRecipes()
    
    return res.status(200).json(recipes)
}

module.exports = {
    httpsGetRecipes
}
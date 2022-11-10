const recipes = require('./recipes.mongo')
const axios = require('axios');

const DEAULT_ID = 0

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {from: '1', size: '9452'},
  headers: {
    'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
    'X-RapidAPI-Host': process.env.X_RapidAPI_Host
  }
};

async function getRecipes(query){
    return await recipes.find(query, {
        _id: 0,
        __v: 0,
    })
}

async function hasEmbeddedRecipes(obj){
    let id
    let name
    let servings
    let timeTaken
    let instructions = [] 
    let ingredients = []

    for (const recipe of obj.recipes) {
        id = await getLastId() + 1
        name = recipe.name
        servings = recipe.yields
        timeTaken = recipe.total_time_minutes ? `${recipe.total_time_minutes} minutes` : 'N/A'

        for (const instruction of recipe.instructions) {
            instructions.push(instruction.display_text)
        }

        for (const section of recipe.sections) {
            const sectionTitle = section.name
            const ingredient = []

            for (const component of section.components) {
                ingredient.push(component.raw_text)
            }

            ingredients.push({
                title: sectionTitle || 'Ingredients',
                ingredients: ingredient
            })
        }

        const recipeData = {
            id,
            name,
            servings,
            timeTaken,
            instructions,
            ingredients
        }

        const exists = await recipeExists({name: recipeData.name})

        if(exists){
            console.error('Recipe Exists')
            return
        }

        console.log(recipeData.name)
        await saveRecipe(recipeData)
    }
}

async function hasRecipes(obj){
    let id = await getLastId() + 1
    let name = obj.name
    let servings = obj.yields
    let timeTaken = obj.total_time_minutes ? `${obj.total_time_minutes} minutes` : 'N/A'
    let instructions = [] 
    let ingredients = []

    for (const instruction of obj.instructions) {
            instructions.push(instruction.display_text)
        }

    for (const section of obj.sections) {
        const sectionTitle = section.name
        const ingredient = []

        for (const component of section.components) {
            ingredient.push(component.raw_text)
        }

        ingredients.push({
            title: sectionTitle || 'Ingredients',
            ingredients: ingredient
        })
    }

    const recipeData = {
        id,
        name,
        servings,
        timeTaken,
        instructions,
        ingredients
    }

    const exists = await recipeExists({name: recipeData.name})

    if(exists){
        console.error('Recipe Exists')
        return
    }

    console.log(recipeData.name)
    await saveRecipe(recipeData)
}

async function fetchRecipes(){
    const response = await axios.request(options)

    const results = response.data.results

    const exists = await recipeExists({id: 1})

    if (exists){
        console.error('Recipe Exists')
        return
    }

    for (const obj of results) {
        if(obj.recipes){
            await hasEmbeddedRecipes(obj)
        } else {
            await hasRecipes(obj)
        }
    }  
}

async function getLastId(){
    const id = await recipes
        .findOne()
        .sort('-id')

    if(!id){
        return DEAULT_ID
    }

    console.log(id.id)

    return id.id 
}

async function recipeExists(filter){
    return await recipes.findOne(filter)
}

async function saveRecipe(recipe){
    try {
        await recipes.findOneAndUpdate(
            {name: recipe.name},
            recipe,
            {upsert: true}
        )
        console.log("saved")
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getRecipes,
    fetchRecipes
}
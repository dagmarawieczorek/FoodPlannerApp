import Realm from "realm";

export const INGREDIENT_SCHEMA = "Ingredient";
export const RECIPE_SCHEMA = "Recipe";


export const IngredientsSchema = {
    name: INGREDIENT_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: {type: 'string'},
        category: {type: 'string', indexed: true},
        subcategory: {type: 'string', indexed: true},
        price: {type: 'float'}
    }
};

export const RecipeSchema = {
    name: RECIPE_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        name: {type: 'string'},
        ingredients: {type: 'list', objectType: INGREDIENT_SCHEMA},
    }
};

const databaseOptions = {
    path: 'FoodPlanerApp.realm',
    schema: [RecipeSchema, IngredientsSchema],
    schemaVersion: 0,
}

export const insertNewRecipe = newRecipe => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(RECIPE_SCHEMA, newRecipe);
            resolve(newRecipe);
        })
    }).catch((error) => reject(error));
})

export const insertNewIngredient = newIngredient => new Promise((resolve, reject) => {

    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(INGREDIENT_SCHEMA, newIngredient);
            resolve(newIngredient);
        })
    }).catch((error) => reject(error));
})

export const findIngredient = name => {
    Realm.open(databaseOptions).then(realm => {
        let ingredients = realm.objects(INGREDIENT_SCHEMA).filtered('name = "' + name + '"');
        console.log(ingredients);
    });
}

export default new Realm(databaseOptions);


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

export const openRealm = () => {
    return Realm.open(databaseOptions);
};

export default new Realm(databaseOptions);


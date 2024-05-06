import { RecipesCuisine } from './types'

export const TARGET_RANDOM_RECIPE = '/recipes/random'
export const RANDOM_RECIPE_PRIMARY_KEY = [TARGET_RANDOM_RECIPE, 'random-recipe']

export const TARGET_ALL_RECIPES = '/recipes/complexSearch'
export const TARGET_ALL_RECIPES_PRIMARY_KEY = [TARGET_ALL_RECIPES, 'all-recipes']

export const TARGET_SINGLE_RECIPE = '/recipes/:id/information'
export const TARGET_SINGLE_RECIPE_PRIMARY_KEY = [TARGET_SINGLE_RECIPE, 'single-recipe']

export const recipesTabs = [
  {
    id: 1,
    name: 'Italian',
    value: RecipesCuisine.Italian,
  },
  {
    id: 2,
    name: 'Indian',
    value: RecipesCuisine.Indian,
  },
  {
    id: 3,
    name: 'Chinese',
    value: RecipesCuisine.Chinese,
  },
  {
    id: 4,
    name: 'European',
    value: RecipesCuisine.European,
  },
  {
    id: 5,
    name: 'French',
    value: RecipesCuisine.French,
  },
  {
    id: 6,
    name: 'African',
    value: RecipesCuisine.African,
  },
]

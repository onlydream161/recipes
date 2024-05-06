import { Recipes } from './types'

export const getGroupRecipesPairs = (recipes: Recipes[]) => {
  return recipes.reduce((result: Recipes[][], current, index) => {
    if (index % 2 === 0) {
      result.push([current])
    } else {
      result[result.length - 1].push(current)
    }
    return result
  }, [])
}

import { httpClient } from '@/shared/lib/http-client'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Recipe, RecipesCuisine, TARGET_ALL_RECIPES, TARGET_ALL_RECIPES_PRIMARY_KEY } from '../lib'
import { QueryParams } from '@/shared/@types/global'

interface AllRecipesResponse {
  results: Recipe[]
}

export const useGetAllRecipes = (
  config: QueryParams<AllRecipesResponse>,
  params?: {
    number: number
    cuisine: RecipesCuisine
  }
) => {
  return useQuery<AllRecipesResponse, AxiosError>(
    TARGET_ALL_RECIPES_PRIMARY_KEY,
    () => httpClient<AllRecipesResponse>({ url: TARGET_ALL_RECIPES, params: { ...params } }),
    { ...config }
  )
}

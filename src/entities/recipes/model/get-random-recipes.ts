import { httpClient } from '@/shared/lib/http-client'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { RANDOM_RECIPE_PRIMARY_KEY, Recipe, TARGET_RANDOM_RECIPE } from '../lib'
import { QueryParams } from '@/shared/@types/global'

interface RandomRecipesResponse {
  recipes: Recipe[]
}

export const useGetRandomRecipes = (
  config: QueryParams<RandomRecipesResponse>,
  params?: {
    number: number
  }
) => {
  return useQuery<RandomRecipesResponse, AxiosError>(
    RANDOM_RECIPE_PRIMARY_KEY,
    () => httpClient<RandomRecipesResponse>({ url: TARGET_RANDOM_RECIPE, params: { ...params } }),
    { ...config }
  )
}

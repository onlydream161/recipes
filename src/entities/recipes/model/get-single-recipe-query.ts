import { httpClient } from '@/shared/lib/http-client'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { Recipe, TARGET_SINGLE_RECIPE, TARGET_SINGLE_RECIPE_PRIMARY_KEY } from '../lib'
import { QueryParams } from '@/shared/@types/global'
import { getSingleRequestTarget } from '@/shared/lib/query-client'

export const useGetSingleRecipe = (
  id: number,
  config?: QueryParams<Recipe>,
  params?: {
    number: number
  }
) => {
  return useQuery<Recipe, AxiosError>(
    TARGET_SINGLE_RECIPE_PRIMARY_KEY,
    () =>
      httpClient<Recipe>({
        url: getSingleRequestTarget(id, TARGET_SINGLE_RECIPE),
        params: { ...params },
      }),
    { ...config }
  )
}

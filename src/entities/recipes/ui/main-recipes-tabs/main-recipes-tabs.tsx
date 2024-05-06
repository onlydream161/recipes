import { RecipesCard, RecipesCuisine, recipesTabs, useGetAllRecipes } from '@/entities/recipes'
import { Button, RedDescription } from '@/shared'
import cn from 'classnames'
import { useEffect, useState } from 'react'

export const MainRecipesTabs = () => {
  const [cuisine, setCuisine] = useState<RecipesCuisine>(RecipesCuisine.Italian)
  const { data: recipes, refetch } = useGetAllRecipes({}, { cuisine: cuisine, number: 6 })

  useEffect(() => {
    refetch()
  }, [cuisine])
  return (
    <div className='flex flex-col items-center'>
      <RedDescription description='Recipes' />
      <h1 className='text-4xl uppercase font-bold w-[400px] text-center my-3'>Embark on a journey</h1>
      <p className='text-center w-[400px] mb-8'>
        With our diverse collection of recipes we have something to satisfy every palate.
      </p>
      <div className='flex gap-2 justify-center mb-5'>
        {recipesTabs.map(tab => (
          <Button
            variant='secondary'
            className={cn({ 'bg-green': tab.value === cuisine })}
            key={tab.value}
            onClick={() => [setCuisine(tab.value)]}
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-7 mb-11'>
        {recipes && recipes.results.map(recipe => <RecipesCard key={recipe.id} className='w-full' recipe={recipe} />)}
      </div>
    </div>
  )
}

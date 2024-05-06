import { FC } from 'react'
import { Recipe } from '@/entities/recipes'
import { Card } from 'antd'
import { Button } from '@/shared'
import VeganIcon from '@/shared/assets/icons/vegan.svg?react'
import cn from 'classnames'
import { RECIPES_URL } from '@/shared/config'

interface RecipesCardProps {
  recipe?: Recipe
  className?: string
}

export const RecipesCard: FC<RecipesCardProps> = ({ recipe, className }) => {
  return (
    <Card
      className={cn('w-[45%] bg-secondary-bg rounded-[30px] overflow-hidden relative', className)}
      bodyStyle={{ padding: 0 }}
    >
      <img className='w-full h-64 object-center object-cover' src={recipe?.image} alt={recipe?.sourceName} />
      {recipe?.vegetarian && <VeganIcon className='absolute top-40 right-1' />}
      <div className='flex flex-col justify-between h-[250px] relative'>
        <div className='p-5'>
          <h3 className='text-2xl font-bold mb-2'>{recipe?.title}</h3>
          <p className=' line-clamp-2  '>{recipe?.instructions}</p>
        </div>
        <div className='flex justify-between items-center p-5'>
          <p>
            {recipe?.readyInMinutes
              ? `${recipe?.readyInMinutes} min - ${recipe?.servings} servings - ${recipe?.pricePerServing} $`
              : ''}
          </p>
          <Button variant='secondary' href={`${RECIPES_URL}/${recipe?.id}`} className='!rounded-[15px]'>
            <p className='uppercase'>view recipe</p>
          </Button>
        </div>
      </div>
    </Card>
  )
}

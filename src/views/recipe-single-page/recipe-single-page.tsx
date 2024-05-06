import { useGetSingleRecipe } from '@/entities'
import { RedDescription } from '@/shared'
import { useParams } from 'react-router-dom'
import TimeIcon from '@/shared/assets/common/time-icon.svg?react'
import HardIcon from '@/shared/assets/common/hard-prev.svg?react'
import ServiceIcon from '@/shared/assets/common/service-icon.svg?react'

export const RecipeSinglePage = () => {
  const params = useParams()
  const { data: recipe, isLoading } = useGetSingleRecipe(Number(params.id), { enabled: !!params.id })

  return (
    <div className='flex flex-col items-center border border-gray rounded-[30px] my-5 p-5'>
      <RedDescription description='Recipe' />
      <h1 className='text-5xl uppercase font-bold text-center mb-5'>{recipe?.title}</h1>
      <div
        className='text-center text-gray'
        dangerouslySetInnerHTML={{ __html: recipe?.instructions as TrustedHTML }}
      ></div>
      <div className='flex'></div>
    </div>
  )
}

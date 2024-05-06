import { getGroupRecipesPairs, useGetRandomRecipes } from '@/entities'
import { MainRecipesTabs, RecipesCard } from '@/entities/recipes/ui'
import { Button, RedDescription } from '@/shared'
import Banner from '@/shared/assets/images/main-page-bunner.jpg'
import Cooks from '@/shared/assets/images/cooks.jpg'
import MeetImg from '@/shared/assets/images/meet-img.jpg'
import Kitchen from '@/shared/assets/images/kichen.jpg'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { useRef } from 'react'
import ArrowRigth from '@/shared/assets/common/arrow-right.svg?react'
import ArrowLeft from '@/shared/assets/common/arrow-left.svg?react'

export const HomePage = () => {
  const { data: randomRecipes } = useGetRandomRecipes({}, { number: 8 })
  const carouselRef = useRef<CarouselRef | null>(null)
  return (
    <>
      <div className='w-full relative h-[500px] mt-8 mb-14'>
        <img
          src={Banner}
          alt='banner'
          className='z-[-1] rounded-[40px] absolute bottom-0 top-0 left-0 right-0 w-full h-full'
        />
        <div className='flex flex-col items-center gap-8 justify-center h-full max-w-[500px] mx-auto'>
          <h1 className='text-5xl font-monoton text-center text-main-bg'>Unleash Culinary Excellence</h1>
          <p className='text-main-bg text-center'>
            Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill
            your kitchen
          </p>
          <Button variant='primary' withTooltip className='!rounded-[15px] !bg-yellow uppercase'>
            <p>explore recipes</p>
          </Button>
        </div>
      </div>
      <div className='w-full  border border-gray rounded-[30px] pb-9 mb-10'>
        <div className='flex items-center justify-between px-9 pt-9 mb-5'>
          <h2 className='text-4xl uppercase font-bold'>Featured Recipes</h2>
          <div className='flex gap-5'>
            <Button onClick={() => carouselRef.current?.prev()} variant='icon'>
              <ArrowLeft className='fill-black' />
            </Button>
            <Button onClick={() => carouselRef.current?.next()} variant='icon'>
              <ArrowRigth />
            </Button>
          </div>
        </div>
        {randomRecipes && (
          <Carousel dots={false} ref={carouselRef}>
            {getGroupRecipesPairs(randomRecipes.recipes).map((pair, index) => (
              <div key={index} className='!flex justify-center gap-7'>
                {pair.map(recipe => (
                  <RecipesCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ))}
          </Carousel>
        )}
      </div>
      <MainRecipesTabs />
      <div className='w-full  border border-gray rounded-[30px] p-6'>
        <div className='flex gap-3'>
          <div className='flex flex-col justify-between gap-3'>
            <div className='flex gap-3 justify-between'>
              <div>
                <RedDescription description='About us' />
                <h2 className='text-4xl uppercase font-bold mb-3'>Our Culinary Chronicle</h2>
                <p className='mb-3'>
                  Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering
                  delightful culinary experiences. Join us in savoring the essence of every dish and the stories that
                  unfold.
                </p>
                <Button variant='secondary' className='!rounded-[15px]' withTooltip>
                  Read more
                </Button>
              </div>
              <img src={MeetImg} className='rounded-[25px]' />
            </div>
            <img src={Kitchen} className='rounded-[25px]' />
          </div>
          <img src={Cooks} className='rounded-[25px] max-h-[610px]' />
        </div>
      </div>
    </>
  )
}

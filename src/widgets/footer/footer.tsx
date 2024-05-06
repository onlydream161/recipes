import { Button } from '@/shared'
import { Link } from 'react-router-dom'
import LogoFooter from '@/shared/assets/icons/logo-footer.svg?react'
import { navMenu } from '@/shared/config'

export const Footer = () => {
  return (
    <div className='w-full bg-black flex p-4 justify-between items-center  border border-gray rounded-3xl mt-5 mb-5 '>
      <Link to='/'>
        <LogoFooter />
      </Link>
      <div className='flex gap-5'>
        {navMenu.map(item => (
          <Button
            key={item.id}
            variant='text'
            href={item.link}
            withTooltip={item?.withTooltip}
            developed={item?.developed}
            childrenClassName='!text-white'
          >
            {item.label.toUpperCase()}
          </Button>
        ))}
      </div>
      <Button variant='primary' withTooltip className='!rounded-[15px] !bg-gray' childrenClassName='text-black'>
        <p>Subscribe</p>
      </Button>
    </div>
  )
}

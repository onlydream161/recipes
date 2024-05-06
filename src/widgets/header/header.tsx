import { Button } from '@/shared'
import Logo from '@/shared/assets/icons/logo.svg?react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { navMenu } from '@/shared/config'

export const Header = () => {
  const location = useLocation()

  return (
    <div className='w-full flex p-4 justify-between items-center  border border-gray rounded-3xl mt-5'>
      <Link to='/'>
        <Logo />
      </Link>
      <div className='flex gap-5'>
        {navMenu.map(item => (
          <Button
            key={item.id}
            variant='text'
            href={item.link}
            withTooltip={item?.withTooltip}
            developed={item?.developed}
            childrenClassName={cn({ '!text-red': location.pathname === item.link })}
          >
            {item.label.toUpperCase()}
          </Button>
        ))}
      </div>
      <Button variant='primary' withTooltip className='!rounded-[15px] !bg-black'>
        <p>Subscribe</p>
      </Button>
    </div>
  )
}

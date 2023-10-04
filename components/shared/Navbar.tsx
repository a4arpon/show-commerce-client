'use client'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import { BsCart2, BsFillGridFill } from 'react-icons/bs'
import Button from './Button'
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  
  const handleMenu = useCallback(() => {
    setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen)
  }, [])
  return (
    <nav
      className={`fixed w-full bg-light bg-opacity-80 z-10
    backdrop-blur-sm ${isNavbarOpen ? 'h-52 lg:h-20' : 'h-20'}`}
    >
      <div className='container grid h-full grid-cols-2 items-center justify-between lg:grid-cols-3'>
        <div className='w-full lg:col-span-1'>
          <Button variant='no-bg' link='/' width='fit-no-pad'>
            <h1 className='whitespace-nowrap text-3xl'>Printas</h1>
          </Button>
        </div>
        <div
          className={`order-2 ${
            isNavbarOpen ? 'flex' : 'hidden lg:flex'
          } w-full lg:order-1 lg:items-center lg:justify-center`}
        >
          <ul className='flex h-full flex-col justify-between gap-4 lg:flex-row lg:items-center'>
            <li className='text-lg font-medium uppercase'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-lg font-medium uppercase'>
              <Link href='/'>Latest</Link>
            </li>
            <li className='text-lg font-medium uppercase'>
              <Link href='/'>About</Link>
            </li>
          </ul>
        </div>
        <div
          className={`order-1 flex w-full items-center justify-end gap-3 lg:order-2`}
        >
          <Button link='/cart'>
            <BsCart2 size={22} />{' '}
            <span className='hidden lg:inline-block'>Cart</span>
          </Button>
          <div className='lg:hidden'>
            <Button
              variant='ghost'
              rounded='full'
              width='fit-2'
              onClick={() => handleMenu()}
            >
              <BsFillGridFill size={22} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

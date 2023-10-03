import Link from 'next/link'
import { BsBagHeart } from 'react-icons/bs'
const Hero = () => {
  return (
    <div
      className='min-h-screen bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1006994/pexels-photo-1006994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <div className='grid min-h-screen items-center gap-20 bg-gradient-to-br from-dark/70 to-dark/40 py-20 text-light lg:grid-cols-5'>
        <div className='p-3 lg:col-span-3'>
          <h1 className='text-6xl font-semibold uppercase lg:text-8xl'>
            Express Your Style, Be Unique, Be You!
          </h1>
        </div>
        <div className='flex w-full items-center justify-center lg:col-span-2'>
          <div className='group h-32 w-32 overflow-hidden rounded-full bg-light p-10 text-5xl text-dark duration-300 ease-in-out hover:h-56 hover:w-56 hover:scale-125'>
            <Link
              href='/#products'
              className='flex h-full w-full flex-col items-center justify-center gap-3 whitespace-nowrap'
            >
              <BsBagHeart />
              <span className='hidden text-lg uppercase group-hover:duration-300 group-hover:ease-in-out group-hover:inline-block'>
                Shop In Style
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

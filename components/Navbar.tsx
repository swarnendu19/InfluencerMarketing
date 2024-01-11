import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {
  return (
     <header className='bg-gray-50 dark:bg-gray-800 py-4 sticy top-0 left-0 shadow-sm z-50 mb-8'>
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
       <div className='flex items-center justify-between gap-x-4'>
        <div>
          <Link href= '/'>
            <Image
            src = '/youtube(1).png'
            width = {150}
            height={10}
            alt='logo'
            className='w-[100px] md:w-auto'
            />
          </Link>
        </div>
        <div className='flex items-center space-x-2 md:space-x-8'>
         <div className='w-16  px-4 '>
          <Link href='/cart'>
            <div className='relative w-full'>     
              <Image
               src= '/cartbag.png'
               alt='Cart Button'
               width={1.5}
               height={7}
               >
              </Image>
            </div>
          </Link>
         </div>
        </div>
       </div>
      </nav>
     </header>
  )
}

export default Navbar

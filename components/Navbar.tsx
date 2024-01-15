import React, { PropsWithChildren, PropsWithRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
 
function Navbar() {
  return (
    <header  className='dark:bg-gray-400 py-4 sticky top-0 left-0 shadow-sm z-50 mb-8'>
     <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between gap-x-4'>
      <div>
       <Link href= '/'>
        <Image src= '/vercel.svg'
        alt = 'Logo'
        width={150}
        height={10}
        >
        </Image>
       </Link>
      </div>
      <div className='flex items-center space-x-2 md:space-x-8'>
       <div className='w-16  px-4  '>
        <Link href= '/cart'>
            <div className='relative w-full'>
             <Image src='/cartbag.png'
             alt ="Logo"
              width={105}
              height={100}
             >
             </Image>
             <span className='absolute -top-3 -right-3 text-dark font-bold'>
              0
             </span>
            </div>
        </Link>
       </div>
       <div>
        
       </div>
      
      </div>
      </div>  
     </nav>
    </header>
 
  )
}

export default Navbar

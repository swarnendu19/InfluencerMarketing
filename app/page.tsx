import Image from 'next/image'
 

export default function Home() {
  return (
      <section  className="flex flex-col md:flex-row gap-2">
       {/* SideBar */}

       <div className="flex-1 py-2">
        <h2 className='capitalize mb-8'>
          All products
        </h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4">
       
        </section>
       </div>
      </section>
  )
}

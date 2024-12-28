import { ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-screen bg-slate-200 flex justify-center items-center gap-10'>
        <div className='w-1/2 '>
          <p className='text-sm text-neutral-500 mb-3'>Our summer Collections</p>
          <h2 className='text-4xl font-semibold'>The new arrival 
            <span className='text-orange-500'> Nike</span> Shoes
          </h2>
          <p className='text-sm text-neutral-500 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae!</p>
          <button className='flex gap-2 items-center justify-center mt-5 bg-orange-500 p-3 rounded-md shadow-md text-white'>
            <p>Shop Now</p>
            <ArrowRight size={20} fontSize='bold' color='orange' className=' bg-white rounded-md '/>
          </button>
        </div>
    </section>
  )
}

export default Hero
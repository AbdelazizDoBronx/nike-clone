import { ArrowRight } from 'lucide-react'
import React from 'react'
import Button from '../components/Button'
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";


const Hero = () => {
  return (
    <section className='w-full xl:flex-row flex flex-col max-container justify-center min-h-screen gap-10'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collections</p>
        <h2 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes  
        </h2>
        <p className='text-slate-gray font-montserrat text-lg mt-6 leading-8 mb-12 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor!</p>
        <Button label='Shop now'/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
            {statistics.map((stat,idx)=>(
              <div key={idx}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoe1}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
      </div>
    </section>
  )
}

export default Hero
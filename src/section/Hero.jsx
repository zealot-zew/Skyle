import React from 'react'
import Button from '../components/button'
import { useState } from 'react'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { dw1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(dw1)
  return (
    <section id='home'
    className='max-container xl:pl-20 flex xl:flex-row flex-col justify-center w-full min-h-screen gap-10 dark:bg-black'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>

        <p className='text-xl font-montserrat text-coral-red'>
          The Best In Town
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[100px] font-bold'>
          <span className='dark:text-white dark:bg-black xl:whitespace-nowrap relative bg-white z-10 pr-10'>
            Digital   Marketing
          </span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Agency </span>
          <span className='dark:text-white'></span>
        </h1>

        <p className='font-montserrat dark:text-white-400 text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-small'>
        Partner with a top digital marketing agency to boost brand awareness, reach your target audience, and drive online growth.
        </p>
        <Button label= "Request a Quote" iconUrl={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>{statistics.map((stat)=> (
          <div key={stat.value}>
            <p className='text-4xl font-palanquin dark:text-white-400 font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat dark:text-white-400 text-slate-gray'>{stat.label}</p>
          </div>
        ))}</div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src = {bigShoeImg} alt="shoe Collection" width={610} height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Subcard from './Subcard';
import bigphoto from './images/main-photo.png';
import jordan from './images/jordan-logo.png';
import './index.css'


function Body() {
  gsap.registerPlugin(ScrollTrigger);

  const bodyRef = useRef(null);

  return (
    <>
      <div ref={bodyRef} className='relative h-[88vh] w-full bg-white flex items-center justify-center overflow-hidden'>
        <div className='absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-[33%] z-10 '>
          <div className='ml-[10rem] flex flex-row gap-4 overflow-x-auto scrollbar-none whitespace-nowrap w-screen'>
         
            <Subcard/>
          </div>
        </div>
        <div className=' mb-32 '>
          <Marquee speed={100} >
            <h1 className='text-[232.268px] text-[#191919] mt-[7rem] font-semibold'>
              LAUNCHES LAUNCHES LAUNCHES
            </h1>
          </Marquee>
          
        </div>
        <div className='h-[100vh] w-full '>

        </div>
      </div>
      <div className='relative h-[100vh] w-full border-black border-y-2'>
    <div className=' h-full  w-2/3 border-black border-r-2'>
    <img className='h-full w-full object-cover hover:scale-105 duration-500 cursor-pointer ' src={bigphoto}/>
   
    </div>
    <div className='absolute top-1/3 left-3/4 right-9 transform -translate-y-1/2 flex flex-col items-center '>
  <img src={jordan} alt="Jordan" />
  <h1 className='text-4xl text-[#191919] font-semibold font-serif cursor-pointer hover:text-[#fec333] duration-300'>
    AIR JORDAN 3
  <span className='mt-2 text-4xl text-[#191919] font-semibold font-serif cursor-pointer  block text-center hover:text-[#fec333]'>
    RETRO
  </span>
  </h1>
  <span className='mt-5 text-[#191919] font-semibold font-mono text-lg hover:none'>
    R 3,899.00
  </span>
</div>



      </div>
      
    </>
  );
}

export default Body;

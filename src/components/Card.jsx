import React from 'react';



function Card(props) {
  return (
    <div className='flex relative h-[70.5vh] w-[59.53vh] border-black border-[1.8px]   justify-center bg-white overflow-x-auto'>
      <div className='relative mt-6 inline-block'>
        <div className='h-[52.578vh] w-[54vh] border-black border-[1.8px] flex flex-col items-start'>
          <div className='logo'>
            <img src={props.src} alt='Nike Logo' className='h-1/2  w-full object-cover' />
          </div>
          <div className='nike h-[24rem] w-[25rem] absolute flex flex-col items-center '>
            <img src={props.immg} className='h-full w-full object-cover' alt='Nike 1' />
          </div>
        </div>
        <div className=' mt-4'>
            <h1 className='text-2xl text-[#191919]  font-sans font-semibold'>{props.title}</h1>
            <h2 className='text-xl text-[#191919]  font-sans font-semibold'>{props.price}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;

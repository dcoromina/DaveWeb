import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
  return (
    <div className='text-white flex flex-row w-full h-[calc(100vh-120px)] justify-between  '>
      
      <div className='flex flex-col justify-center space-y-10 max-w-fit  items-center text-pretty '>
        <div className='w-3/4 space-y-10'>
        <div className='font-bold text-7xl  inline-block text-left'>Hi There!</div>
        <div className='font-bold text-orange-400 text-8xl'>I'M DAVID</div>
        <div className='w-1/2 text-2xl'>Developer entrepenour athlete dreamer and all-around lunatic</div>
        <div className='flex flex-row justify-start space-x-4' >
            <button className='border border-solid border-white rounded-xl px-2 py-1 shadow-md hover:shadow-orange-400'>Contact me</button>
            <button className='border border-solid border-white rounded-xl px-2 py-1 shadow-md hover:shadow-orange-400'>Download CV</button>
        </div>
      </div>
      </div>
      <div className='flex justify-end  w-2/4 h-[calc(100vh-120px)]'>
      <Image className=' object-scale-down max-h-full m-auto '
      src="https://dcoromina.s-ul.eu/image/ZqNI27Hv"
      width={697}
      height={958}
      alt="image of author"
    />
    </div>
    {/* <div class="border-solid border-sky-500 justify-items-end w-5 h-5 border-b-4 border-l-4 rounded-sm -rotate-45 "></div> */}
    </div>
  )
}

export default HeroSection

import React from 'react'
import Image from 'next/image'


const ProjectsSection = () => {
  return (
    <div className='w-full h-svh  flex flex-row  items-center'>
        <div className="text-orange-400 text-7xl font-bold w-2/4">MY PROJECTS</div>
        <div className="w-3/4 h-screen items-center flex flex-row space-x-10">
        <Image className=' w-2/6 h-2/3 object-scale-down max-h-full rounded-xl m-auto'
            src="https://dcoromina.s-ul.eu/resources/56i7IdON"
            width={292}
            height={640}
            alt="image of author"
            />
            <Image className='w-2/6 h-2/3 object-scale-down  max-h-full rounded-xl m-auto'
            src="https://dcoromina.s-ul.eu/resources/HW3w2NZ1"
            width={292}
            height={640}
            alt="image of author"
            />
           <Image className='w-2/6 h-2/3 object-scale-down max-h-full rounded-xl m-auto'
            src="https://dcoromina.s-ul.eu/resources/omsyhLJt"
            width={292}
            height={640}
            alt="image of author"
            />

            <div className="rounded-full container bg-white w-12 h-12 text-red-700 "></div>
    </div>
      
    </div>
  )
}

export default ProjectsSection

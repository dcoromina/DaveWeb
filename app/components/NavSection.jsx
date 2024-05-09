import React from 'react'
import Image from 'next/image'

function NavSection() {
  return (
    <div className='text-white flex w-full flex-row justify-between py-5 text-base items-center' >
      <Image
      src="https://dcoromina.s-ul.eu/7o6fnBrL"
      width={50}
      height={50}
      alt="Logo of the author"
    />
      <div className=' flex flex-row space-x-10 justify-center w-2/4 ' >
        <div className=' hover:font-bold cursor-pointer hover:border-b-2 hover:border-orange-400'>About</div>
        <div className='hover:font-bold cursor-pointer hover:border-b-2 hover:border-orange-400'>Skills</div>
        <div className='hover:font-bold cursor-pointer hover:border-b-2 hover:border-orange-400'>Career</div>
        <div className='hover:font-bold cursor-pointer hover:border-b-2 hover:border-orange-400'>Projects</div>
      </div>
      <Image
      src="https://dcoromina.s-ul.eu/logos/ezNndJcm"
      width={35}
      height={35}
      alt="Clickable linked in logo"
    />
    </div>
  )
}

export default NavSection

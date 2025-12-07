import { ChevronRight } from 'lucide-react'
import React from 'react'

function Herofaq() {
  return (
      <div className='lg:h-[60vh] h-[30vh] p-12 w-full bg-no-repeat bg-cover bg-center bg-[url(/images/img.jpg)] flex flex-col gap-5 justify-end items-end'>
        <h1 className='text-5xl font-Headeing'>FAQ</h1>
        <div className='flex justify-center items-center space-x-1'>
            <span>Home</span>
            <ChevronRight size={24} className='text-[#D83054]'/>
            <span>FAQ</span>
        </div>
    </div>
  )
}

export default Herofaq
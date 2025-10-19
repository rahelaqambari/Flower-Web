import { ChevronRight } from 'lucide-react'
import React from 'react'

function HeroTeam() {
  return (
        <div className='h-[60vh] p-12 w-full bg-no-repeat bg-cover bg-center bg-[url(/images/img.jpg)] flex flex-col gap-5 justify-end items-end'>
        <h1 className='text-5xl font-Headeing'>Team</h1>
        <div className='flex justify-center items-center space-x-1'>
            <span>Home</span>
            <ChevronRight size={24} className='text-[#D83054]'/>
            <span>TEAM</span>
        </div>
    </div>
  )
}

export default HeroTeam
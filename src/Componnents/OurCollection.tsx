import { Check } from 'lucide-react'
import React from 'react'

function OurCollection() {
  return (
    <div className='h-screen w-full grid grid-cols-3 gap-4 my-5 p-6 items-center justify-center'>
        <div className='flex flex-col gap-4 justify-center p-6 items-start my-auto'>
            <h2 className='text-[#D83054]'>Our Collection</h2>
            <h1 className='text-3xl font-Headeing '>Awesome Flowers</h1>
            <p className='text-gray-500 w-full'>Lorem ipsum dolor sit amet consectetur adipiscing elit tellus luctus nec ullamcorper mattis pulvinar dapibus.</p>
            <div className='flex flex-col gap-3 w-full  border-b border-gray-400 pb-6'>
                <div className='flex items-center space-x-3'><Check size={23} className='text-[#D83054]'/> <span>SunShine Rose</span></div>
                <div className='flex items-center space-x-3'><Check size={23} className='text-[#D83054]'/> <span>Alstroemeria Bouquet</span></div>
                <div className='flex items-center space-x-3'><Check size={23} className='text-[#D83054]'/> <span>Painted Skies Tulip</span></div>
                <div className='flex items-center space-x-3'><Check size={23} className='text-[#D83054]'/> <span>Dreamland Pink Bouquet</span></div>
                <div className='flex items-center space-x-3'><Check size={23} className='text-[#D83054]'/> <span>White Rose</span></div>
            </div>
            <button className='bg-[#D83054] text-white p-3 w-full font-Headeing'>SHOW ALL COLLACTIONS</button>
        </div>
        {/* one dev endedd */}
        <div className='flex flex-col items-center justify-center gap-4 shadow-md shadow-gray-400'>
            <div className='w-full h-[280px] overflow-hidden'>
                <img src="/images/flowers-1-e1620281168666.jpg" className='h-full w-full hover:scale-125 transition-all duration-700' alt="" />
            </div>
            <div className='w-full p-6 flex flex-col gap-5 justify-start items-start'>
            <h1 className='text-2xl font-Headeing hover:text-[#D83054] font-light'>Flower Beautiful Pink</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
            <button className='text-[#D83054] w-fit'>READ MORE..</button>
            </div>
        </div>
        {/* div 2 endded */}
             <div className='flex flex-col items-center justify-center gap-4 shadow-md shadow-gray-400'>
            <div className='w-full h-[280px] overflow-hidden'>
                <img src="/images/flower-1-e1620281175317.jpg" className='h-full w-full hover:scale-125 transition-all duration-700' alt="" />
            </div>
            <div className='w-full p-6 flex flex-col gap-5 justify-start items-start'>
            <h1 className='text-2xl font-Headeing hover:text-[#D83054] font-light'>Wedding Flower Ideas</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
            <button className='text-[#D83054] w-fit'>READ MORE..</button>
            </div>
        </div>
    </div>
  )
}

export default OurCollection
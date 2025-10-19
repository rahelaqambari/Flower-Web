import { InstagramIcon } from 'lucide-react'
import React from 'react'

function Instagram() {
  return (
    <div className='h-fit w-full flex flex-col gap-5 items-center justify-center'>
        <h3 className='text-xl text-[#D83054] '>@flowtrist.insta</h3>
        <h1 className='text-4xl font-Headeing'>Flowtrist On Instagram</h1>
        <div className='w-full h-fit grid lg:grid-cols-6 md:grid-cols-3 md:gap-13 lg:gap-0 gap-5 justify-center items-center lg:ml-0  py-3'>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/f20.avif" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/Mask-Group-24.png" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:righte-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/gallery-9-208x300.jpg" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/img1-top-floda3.webp" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/f4.avif" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            <div className='h-[220px] w-[220px] relative group'>
                <img src="/images/flowers--800x800.jpg" className='h-full w-full' alt="" />
                <div className='h-[220px] w-[220px] absolute -righte-[230px] top-0 group-hover:opacity-100 transition-all duration-700 ease-in-out  bg-[#D83054]/70 opacity-0  text-white flex justify-center items-center'>
                    <InstagramIcon  size={34}/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Instagram
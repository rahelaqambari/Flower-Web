import React from 'react'
import { motion } from 'framer-motion'
function OurStory() {
  return (
    <div className='lg:h-screen h-fit w-full flex lg:flex-row flex-col justify-center items-center gap-5 '>
        <motion.div
        initial={{x: -210 }}
        whileInView={{x: 0}}
        transition={{duration: 2}} className='lg:h-[80vh] md:h-[40vh] h-[60vh] lg:w-[550px] w-full relative shadow-xl shadow-gray-300 flex flex-col gap-4 items-start justify-start p-12'>
        <h2 className='text-[#D83054]'>Our Story</h2>
        <h1 className='text-3xl font-Headeing'>We Provide Various Types Of Flowers</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis massauis mollis ligula pretium consequat.</p>
        <p className='text-gray-500'>Praesent blandit mollis tristique. Nulla molestie consectetur erat, id convallis libero portaetonec convallis erat lorem. </p>
        <p className='text-gray-500'>libero porta onec convallis erat lorem, at convallis diam tincidunt Pellentesque ornare purus sed finibus.</p>
        <button className='text-white p-4 lg:w-[450px] w-[300px] bg-[#D83054] absolute  -bottom-7'>MORE ABOUT FLOWTREST</button>
        </motion.div>
        <div className=' lg:w-1/2 w-full md:h-[80vh] h-[60vh] relative'>
        <div className='md:w-[370px] md:h-[380px] w-[280px] h-[280px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute lg:-left-12 md:left-16 left-2 lg:-top-12 md:top-12 top-6'>
            <img src="/images/row2.jpg" className='h-full w-full' alt="" />
        </div>
        <div className='md:w-[330px] md:h-[320px] w-[250px] h-[250px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute md:right-14 right-6 lg:top-24 md:top-52 top-50'>
            <img src="/images/row3.jpg" className='h-full w-full' alt="" />
        </div>
        <div className='w-[280px] h-[280px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute left-38  lg:-bottom-12 md:bottom-20 lg:block hidden md:block'>
            <img src="/images/row.jpg" className='h-full w-full' alt="" />
        </div>
        </div>
    </div>
  )
}

export default OurStory
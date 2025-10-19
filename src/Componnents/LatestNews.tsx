import { div } from 'framer-motion/client'
import { Calendar } from 'lucide-react'
import React from 'react'

function LatestNews() {
  return (
    <div className='w-full h-fit flex flex-col gap-2 my-16'>
        <div className='flex justify-between items-center w-[90%] mx-auto'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-[#D83054] text-xl'>Latest News</h2>
                <h1 className='text-5xl font-Headeing'>Tips & Article</h1>
            </div>
            <button className='text-white bg-[#D83054] px-8 py-5'>ALL NEWS</button>
        </div>
    <div className='h-fit w-full grid grid-cols-3 gap-4  p-6 items-center justify-center'>
        <div className='flex flex-col gap-6 justify-center p-6 items-start my-auto shadow-md h-full shadow-gray-400'>
            <h1 className='text-3xl font-Headeing text-[#D83054] '>Recent News</h1>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-Headeing'>Decorate Your Cakes With Flowers To Make Them Elegant</h1>
                <span className='text-gray-400 flex items-center gap-5'><Calendar/>May 4, 2021</span>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-Headeing'>Decorate Your Cakes With Flowers To Make Them Elegant</h1>
                <span className='text-gray-400 flex items-center gap-5'><Calendar/>May 4, 2021</span>
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-Headeing'>Decorate Your Cakes With Flowers To Make Them Elegant</h1>
                <span className='text-gray-400 flex items-center gap-5'><Calendar/>May 4, 2021</span>
            </div>
            <button className='bg-[#D83054] text-white p-3 w-full font-Headeing'>SHOW ALL COLLACTIONS</button>
        </div>
        {/* div 1 endded */}
           <div className='flex flex-col items-center justify-center gap-4 shadow-md shadow-gray-400'>
            <div className='w-full h-[290px] overflow-hidden'>
                <img src="/images/beautiful-flowers-in-flower-shop-e1620281318585.jpg" className='h-full w-full hover:scale-125 transition-all duration-700' alt="" />
            </div>
            <div className='w-full p-6 flex flex-col gap-3 justify-start items-start'>
            <h1 className='text-2xl font-Headeing hover:text-[#D83054] font-light'>Decorate Your Cakes With Flowers To Make Them Elegant</h1>
            <span className='text-gray-400 flex items-center gap-5'><Calendar/>May 4, 2021</span>
            <p className='text-gray-500'>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequata, congue id sem. Maecenas malesuada faucibus..</p>
            <button className='text-[#D83054] w-fit'>READ MORE..</button>
            </div>
        </div>
        {/* div 2 endded */}
           <div className='flex flex-col items-center justify-center gap-4 shadow-md shadow-gray-400'>
            <div className='w-full h-[290px] overflow-hidden'>
                <img src="/images/flowers-composition--e1620281304163.jpg" className='h-full w-full hover:scale-125 transition-all duration-700' alt="" />
            </div>
            <div className='w-full p-6 flex flex-col gap-3 justify-start items-start'>
            <h1 className='text-2xl font-Headeing hover:text-[#D83054] font-light'>Making Beautiful Flowers A Part Of Your Life Become Reality</h1>
            <span className='text-gray-400 flex items-center gap-5'><Calendar/>May 4, 2021</span>
            <p className='text-gray-500'>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequata, congue id sem. Maecenas malesuada faucibus..</p>
            <button className='text-[#D83054] w-fit'>READ MORE..</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default LatestNews
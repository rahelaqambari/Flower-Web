import { Flower, HandCoins } from 'lucide-react'
import React from 'react'

function AboutFlower() {
  return (
    <div className='h-[80vh] w-full flex flex-row'>
        <div className='h-full w-1/2 flex flex-col gap-4 items-center justify-center p-12'>
        <div className='w-full h-52 flex items-center shadow-md shadow-gray-400'>
            <img src="/images/f14.avif" className='w-[600px] h-full' alt="" />
            <div className='flex flex-col gap-2 p-3 justify-start'>
                <h1 className='text-2xl text-[#D83054] font-Headeing'>Fresh Flowers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio ad quasi dicta aliquid commodi nisi dolorem, voluptatum ipsam no</p>
                <button className='text-xl text-[#D83054] w-fit '>Read More..</button>
            </div>
        </div>
        <div className='w-full flex space-x-2 '>
            <div className='flex flex-col gap-2 p-3 justify-start'>
                <HandCoins size={34} className='text-[#D83054]'/>
                <h1 className='text-2xl font-Headeing'>Instant Cashback</h1>
                <p className='text-gray-600'>Doloremque distinctio ad quasi dicta aliquid commodi nisi dolorem,</p>
                <button className='text-xl text-[#D83054] w-fit '>Read More..</button>
            </div>
            <div className='flex flex-col gap-2 p-3 justify-start'>
                <Flower size={34} className='text-[#D83054]'/>
                <h1 className='text-2xl font-Headeing'>New Wreaths</h1>
                <p className='text-gray-600'>Doloremque distinctio ad quasi dicta aliquid commodi nisi dolorem,</p>
                <button className='text-xl text-[#D83054] w-fit '>Read More..</button>
            </div>
        </div>
        </div>
        {/* div 1 ended */}
        <div className='h-full px-12 py-12 w-1/2 flex flex-col gap-3'>
        <h3 className='text-[#D83054]'>About Flowtrest</h3>
        <h1 className='text-3xl font-Headeing'>We Produce Beautiful Decorations Inspired By Flora</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
<br/>
Fuis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero non nisl. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua.</p>
<div className='flex justify-between items-center w-full'>
    <div className='flex flex-col gap-2 p-3 justify-start'>
        <h2 className='text-3xl'>Carmelita Vargas</h2>
        <span className='text-xl text-[#D83054]'>CEO Flowtrist</span>
    </div>
    <img src="/images/t.png" className='h-12' alt="" />
</div>
        </div>
    </div>
  )
}

export default AboutFlower
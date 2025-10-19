import React from 'react'

function ImgCard() {
  return (
    <div className='h-[130vh] w-full flex justify-end gap-12 p-12 '>
        <div className='h-[500px] w-[400px] border-8 shadow-xl shadow-gray-400 relative outline-4 border-white outline-white'>
            <img src="/images/flower1.jpg" className='h-full w-full' alt="" />
             <div className='h-[330px] w-[330px] border-8 absolute -bottom-36 -left-36 shadow-xl shadow-gray-400 outline-4 border-white outline-white'>
            <img src="/images/flowers--800x800.jpg" className='h-full w-full' alt="" />
        </div>
        </div>
        <div className='h-[400px] w-[600px] border-8 relative shadow-xl shadow-gray-400 outline-4 border-white outline-white'>
            <img src="/images/flower-800x533.jpg" className='h-full w-full' alt="" />
            <div className='h-[400px] w-[580px] border-8 shadow-xl flex-col bg-white shadow-gray-400 absolute -bottom-72 -left-38 p-5 outline-4 border-white outline-white justify-center items-center flex gap-4'>
            <img src="/images/t1.png" className='h-12' alt="" />
            <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat exercitation ullamco laboris.</p>
            <p className='text-center text-gray-500'>Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero. dictum vestibulum vitae ullamcorper odio. </p>
            <button className='bg-[#D83054] text-white p-3 w-[80%] mx-auto font-Headeing'>LEARN MORE</button>
        </div>
        </div>
       
    </div>
  )
}

export default ImgCard
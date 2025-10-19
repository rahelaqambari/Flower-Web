import React from 'react'

function OurStory() {
  return (
    <div className='h-screen w-full flex justify-center items-center gap-5 '>
        <div className='h-[80vh] w-[550px] relative shadow-xl shadow-gray-300 flex flex-col gap-4 items-start justify-start p-12'>
        <h2 className='text-[#D83054]'>Our Story</h2>
        <h1 className='text-3xl font-Headeing'>We Provide Various Types Of Flowers</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis massauis mollis ligula pretium consequat.</p>
        <p className='text-gray-500'>Praesent blandit mollis tristique. Nulla molestie consectetur erat, id convallis libero portaetonec convallis erat lorem. </p>
        <p className='text-gray-500'>libero porta onec convallis erat lorem, at convallis diam tincidunt Pellentesque ornare purus sed finibus.</p>
        <button className='text-white p-4 w-[450px] bg-[#D83054] absolute -bottom-7'>MORE ABOUT FLOWTREST</button>
        </div>
        <div className=' w-1/2 h-[80vh] relative'>
        <div className='w-[370px] h-[380px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute -left-12 -top-12'>
            <img src="/images/row2.jpg" className='h-full w-full' alt="" />
        </div>
        <div className='w-[330px] h-[320px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute right-14 top-24'>
            <img src="/images/row3.jpg" className='h-full w-full' alt="" />
        </div>
        <div className='w-[280px] h-[280px] border-8 outline-4 outline-white border-white shadow-md shadow-gray-400 absolute left-12 -bottom-12'>
            <img src="/images/row.jpg" className='h-full w-full' alt="" />
        </div>
        </div>
    </div>
  )
}

export default OurStory
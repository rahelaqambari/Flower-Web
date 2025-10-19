import React from 'react'

function WhyChooseUs() {
  return (
    <div className='h-[90vh] w-full bg-no-repeat bg-cover text-white p-5 bg-center bg-[url(/images/hero7.jpg)] bg-fixed flex flex-col justify-center items-end '>
        <div className='h-full p-5 flex flex-col gap-5 items-start w-[60%]'>
        <h2 className='text-[#D83054] text-xl'>Why Choose Us</h2>
        <h1 className='text-4xl font-Headeing'>We're The Best Flower Decorations In Town</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doneca feugiat purus. Duis turpis nunc aliquam id nunc acconvallis dictum nisi. Curabitur vehicula tincidunt sapien velcac. Donec diam augue consequat sit amet metus acbibendum mattis massauis mollis ligula pretium consequat.</p>
        <div className='text-xl pb-1 border-b-2 border-[#D83054] flex justify-between w-[95%] items-center'>
        <p>Delivery On Time</p>
        <p>95%</p>
        </div>
        <div className='text-xl pb-1 border-b-2 border-[#D83054] flex justify-between w-[86%] items-center'>
        <p>Happy Clients</p>
        <p>86%</p>
        </div>
        <div className='text-xl pb-1 border-b-2 border-[#D83054] flex justify-between w-[90%] items-center'>
        <p>Decoration Completed</p>
        <p>90%</p>
        </div>
        <div className='text-xl pb-1 border-b-2 border-[#D83054] flex justify-between w-[87%] items-center'>
        <p>Fresh Flower</p>
        <p>87%</p>
        </div>
        </div>
    </div>
  )
}

export default WhyChooseUs
import React from 'react'

function SomeQuotes() {
  return (
    <div className='h-[70vh] w-full flex justify-end items-center bg-no-repeat bg-cover bg-center bg-fixed bg-[url(/images/HeroPages.webp)]'>
        <div className='flex flex-col justify-center lg:w-1/2 md:w-[80%] w-full gap-5 h-full items-start'>
        <h3 className='lg:text-xl text-2xl text-[#D83054]'>Some Quotes</h3>
        <h1 className='text-4xl font-Headeing'>The Beautiful Unspoken Words Of Flowers</h1>
        <p>About scelerisque enim non dictum aliquet. Sed eleifend fringilla sapien, nec elementum augue mattis a. Morbi eu metus venenatis, semper nunc vel, varius nunc. Suspendisse volutpat elit nec nisi congue tristique eu at velit. Curabitur pharetra ex non ullamcorper condimentu morbi sit amet dui convallis.</p>
        <button className='py-4 px-6 bg-[#D83054] text-white'>READ MORE</button>
        </div>
    </div>
  )
}

export default SomeQuotes
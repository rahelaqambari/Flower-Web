import React from 'react'

function Hero2() {
  return (
    <div className='h-screen w-full bg-no-repeat bg-cover bg-center bg-[url(/images/hero9.jpg)] flex justify-end items-center'>
        <div className='h-full w-full bg-gradient-to-tl p-6 from-black/90 to-black/30 flex justify-end items-end'>
         <div className=" h-full w-1/2 gap-5 flex justify-end flex-col text-white px-8">
                <h3 className='text-3xl text-[#D83054]'>Alamanda Rose</h3>
                <h1 className='  text-5xl font-Headeing '>Make Fresh Flowers As You Mean It</h1>
                <p className=''>Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum metus, eu tincidunt felis ligula in turpis. Cras sit amet tristique libero metus.</p>
                <div className='w-full flex justify-between items-center'>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-2xl text-[#D83054]'>Origin</h1>
                        <span className='text-xl'>Seroja ST. 4421 Denpasar, Bali</span>
                    </div>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-2xl text-[#D83054]'>Family</h1>
                        <span className='text-xl'>Alamanda Rose</span>
                    </div>
                </div>
                <button className='text-white bg-[#d34665] px-5 py-3 hover:bg-[#D83052] w-fit'>GET STARTED</button>
        </div>
        </div>
    </div>
  )
}

export default Hero2
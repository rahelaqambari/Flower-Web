import React from 'react'

function Hero() {
  return (
    <div className="h-screen w-full bg-cover bg-center bg-no-repeat bg-[url(/images/herobg3.jpg)] flex justify-center items-center">
        <div className='h-full flex justify-center items-center'>
            <img src="public/images/hero.webp" alt="" />
        </div>
        <div className=" h-full w-1/2 flex justify-center px-8 items-center">
            <div className='bg-gray-200 rounded-2xl h-[50%] w-[80%] shadow-md shadow-gray-400 flex flex-col justify-center items-center gap-3'>
                <h3 className='text-xl'>Alamanda Rose</h3>
                <h1 className='font-paci text-pink-800 text-2xl'>Make Fresh Flowers As You Mean It</h1>
                <p className='text-ellipsis text-center'>Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum metus, eu tincidunt felis ligula in turpis. Cras sit amet tristique libero metus.</p>
                <button className='text-white bg-pink-800 px-5 py-3 hover:bg-pink-600'>GET STARTED</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
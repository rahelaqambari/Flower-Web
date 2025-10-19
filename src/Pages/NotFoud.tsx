import React from 'react'

function NotFoud() {
  return (
    <div className='h-screen w-full flex flex-col text-white justify-center items-start p-12 bg-no-repeat bg-cover bg-center bg-[url(/images/not5.jpg)]'>
        <div className='flex gap-4 '>
            <h1 className='text-9xl font-Headeing'>404</h1>
            <div className='flex flex-col gap-3 font-Headeing'>
                <h2 className='text-3xl'>Page Not Found</h2>
                <p >The Page You’re Looking For Was Not Found</p>
                <button className='text-white bg-[#D83054] px-6 py-4'><a href="/">BACK TO HOME</a></button>
            </div>
        </div>
    </div>
  )
}

export default NotFoud
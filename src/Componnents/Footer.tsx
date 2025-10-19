import { ChevronDown, Github, Instagram, Linkedin, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='h-[40vh] w-full bg-cover bg-no-repeat  bg-center bg-[url(/images/flower-800x533.jpg)]'>
        <div className='flex flex-col  px-12 w-full h-full bg-black/80'>
         <div className='w-full h-[80%] py-5 px-12 bg-transparent justify-center grid md:grid-cols-1  items-center border-b border-gray-400'>
        <img src="/images/logo.png" className='h-16' alt="" />
        <ul className='flex justify-center text-white font-medium items-center gap-10 text-lg'>
                <a className='hover:text-[#D83054]' href="">About</a>
                <a className='hover:text-[#D83054]' href="">Pricing</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="" >FAQ</a>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="">Blog</a>
                </li>
                <a className='hover:text-[#D83054]' href="">Contact</a>
        </ul>
        <div className='flex justify-center items-center text-white gap-5'>
            <Instagram/>
            <Linkedin/>
            <Github/> 
            <Phone/>
        </div>
    </div>
    <h1 className='text-xl my-auto text-white text'>© 2020 Flowtrist by Jegtheme. All Rights Reserved.</h1>
    </div>
    </div>
  )
}

export default Footer
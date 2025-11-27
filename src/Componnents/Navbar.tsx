import {ChevronDown, Menu, Search } from 'lucide-react'
import { X } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import type { text } from 'stream/consumers';

function Navbar() {
  const [isopen ,setisopen] = useState (false);
  return (
    <div className='w-full h-20 py-3 bg-pink-100 z-50  px-12 fixed flex justify-between items-center'>
        <img src="/images/logo.png" className='h-full' alt="" />
        <ul className='lg:flex justify-center text-white font-medium items-center gap-10 text-lg  hidden'>
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="#" >Pages <ChevronDown size={20}/></a>
                <ul className='absolute group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48 z-50 flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
                </ul>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="/News">News</a>
                </li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
        <div className='flex justify-center items-center gap-5'>
            <Search className='text-white'/>
            <Menu className=' lg:block hidden text-white' />
             <div className="lg:hidden block text-white">
                <Menu className={`${!isopen? "block" :"hidden"}`} onClick={()=> setisopen (!isopen)} size={24} />
                <X className={`${isopen? "block" :"hidden"}`} onClick={()=> setisopen (!isopen)} size={24} />
            </div>
        </div>
        {/* mobile part  */}
          { isopen &&(
            <ul className=" flex h-screen w-full flex-col items-center gap-4 mt-64 z-40 bg-white/70 backdrop:blur-md justify-center">
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="#" >Pages <ChevronDown size={20}/></a>
                <ul className='absolute group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48 z-50 flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
                </ul>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="">News<ChevronDown size={20}/></a>
                 <ul className='absolute z-50 group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48  flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/News">News</a></li>
                </ul>
                </li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
            </ul>
          )}            
    </div>
  )
}

export default Navbar
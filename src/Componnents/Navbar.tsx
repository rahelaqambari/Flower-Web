import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'

function Navbar() {
  const [isOpin , setIsOpin] = useState(false);
  return (
    <div className='w-full h-20 py-3 bg-pink-100 z-50 relative  md:px-12 px-3 lg:fixed flex justify-between items-center'>
        <img src="/images/logo.png" className='h-full' alt="" />
        <ul className='lg:flex justify-center text-white hidden font-medium items-center gap-10 text-lg'>
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
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="/News">News</a></li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
        {/* ul one  */}
         <ul className={`flex absolute w-full text-white font-medium lg:hidden left-0 ${isOpin ?'top-0':'-top-[50vh]'} flex-col bg-pink-100 h-[50vh]  gap-1 text-lg`}>
               <button onClick={()=> setIsOpin(!isOpin)} className='w-full flex justify-end items-center px-4 border-b py-3 border-white text-white'><X size={34}/></button>
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                <li className=' group'><a className='hover:text-[#D83054] flex items-center' href="#" >Pages <ChevronDown size={20}/></a>
                <ul className=' group-hover:flex transition-all duration-700 mt-0 bg-pink-100 ml-10 text-white w-48 z-50 flex-col'>
                    <li className='py-2 px-3 underline hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 underline hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li> 
                    <li className='py-2 px-3 underline hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 underline hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 underline hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
                 </ul>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="/News">News</a></li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
        <div className='flex justify-center items-center gap-5'>
            <Search className='text-white'/>
            <button onClick={()=> setIsOpin(!isOpin)}><Menu className='text-white' /></button>
        </div>
    </div>
  )
}
export default Navbar
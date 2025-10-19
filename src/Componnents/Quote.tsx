import { div } from "framer-motion/client";

export default function Quote(){
    return(
         <div className='h-[70vh] w-full flex justify-end items-center bg-no-repeat bg-cover bg-center bg-[url(/images/r.webp)]'>
        <div className='flex flex-col justify-center gap-5 h-full items-start pl-4'>
        <h3 className='text-xl text-[#D83054]'>Some Quotes</h3>
        <h1 className='text-4xl font-Headeing text-white'>The Beautiful Unspoken Words Of Flowers</h1>
        <p className="text-white w-[50%]">About scelerisque enim non dictum aliquet. Sed eleifend fringilla sapien, nec elementum augue mattis a. Morbi eu metus venenatis, semper nunc vel, varius nunc. Suspendisse volutpat elit nec nisi congue tristique eu at velit. Curabitur pharetra ex non ullamcorper condimentu morbi sit amet dui convallis.</p>
        <button className='py-4 px-6 bg-[#D83054] text-white'>READ MORE</button>
        </div>
    </div>
    )
}
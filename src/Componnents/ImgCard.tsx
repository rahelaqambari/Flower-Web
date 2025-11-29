import { motion } from "framer-motion"
function ImgCard() {
  return (
    <div className='lg:h-[130vh] h-fit  lg:flex-row flex-col w-full flex lg:justify-end gap-12 lg:p-12 md:p-24 px-5 md:mb-0 mb-92 mt-12 '>
        <motion.div
        initial={{y: -210 }}
        whileInView={{y: 0}}
        transition={{duration: 2}}
         className='md:h-[500px] md:w-[400px] h-[400px] w-[90%] border-8 shadow-xl shadow-gray-400 relative outline-4 border-white outline-white'>
            <img src="/images/flower1.jpg" className='h-full w-full' alt="" />
             <div className='md:h-[330px] md:w-[330px] h-[280px] w-[220px] border-8 absolute -bottom-36 lg:-right-20 md:-right-56 -right-12 shadow-xl shadow-gray-400 outline-4 border-white outline-white'>
            <img src="/images/flowers--800x800.jpg" className='h-full w-full' alt="" />
        </div>
        </motion.div>
        <motion.div
        initial={{y: 210 }}
        whileInView={{y: 0}}
        transition={{duration: 2}}
         className='md:h-[400px] md:w-[600px] h-[300px] w-[90%] mx-auto border-8 relative shadow-xl shadow-gray-400 outline-4 lg:my-0 my-28 border-white outline-white'>
            <img src="/images/flower-800x533.jpg" className='h-full w-full' alt="" />
            <div className='md:h-[400px] md:w-[580px] w-[400px] h-[420px] border-8 shadow-xl flex-col bg-white shadow-gray-400 absolute md:-bottom-72 -bottom-[480px] lg:-right-72 md-left-24 p-5 -left-10  outline-4 border-white outline-white justify-center items-center flex gap-4'>
            <img src="/images/t1.png" className='h-12' alt="" />
            <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat exercitation ullamco laboris.</p>
            <p className='text-center text-gray-500'>Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper, odio vitae eleifend ultricies, lectus orci congue magna, in egestas nulla libero. dictum vestibulum vitae ullamcorper odio. </p>
            <button className='bg-[#D83054] text-white p-3 w-[80%] mx-auto font-Headeing'>LEARN MORE</button>
        </div>
        </motion.div>
       
    </div>
  )
}

export default ImgCard
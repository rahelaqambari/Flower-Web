import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className="md:h-screen h-[85vh] w-full bg-cover lg:pt-0 md:pt-0 pt-32 bg-center bg-no-repeat bg-[url(/images/herobg3.jpg)] flex lg:flex-row flex-col justify-center items-center">
        <motion.div
        initial={{x: 400 }}
        whileInView={{x: 0}}
        transition={{duration: 4}} className='lg:h-full h-[40%] flex justify-center items-center'>
            <img src="public/images/hero.webp" alt="" />
        </motion.div>
        <motion.div
        initial={{x: -400 }}
        whileInView={{x: 0}}
        transition={{duration: 4}} className=" lg:h-full h-[70vh] lg:w-1/2 md:w-[90%] w-full flex justify-center md:px-8 px-2 items-center">
            <div className='bg-gray-200 rounded-2xl md:h-[50%] h-[70%] md:w-[80%] w-full shadow-md shadow-gray-400 flex flex-col justify-center items-center gap-3'>
                <h3 className='text-xl'>Alamanda Rose</h3>
                <h1 className='font-paci text-pink-800 text-2xl'>Make Fresh Flowers As You Mean It</h1>
                <p className='text-ellipsis text-center'>Suspendisse in magna in elit hendrerit condimentum. Phasellus eu justo mi. Proin aliquet, mauris a volutpat lobortis, erat libero condimentum metus, eu tincidunt felis ligula in turpis. Cras sit amet tristique libero metus.</p>
                <button className='text-white bg-pink-800 px-5 py-3 hover:bg-pink-600'>GET STARTED</button>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero
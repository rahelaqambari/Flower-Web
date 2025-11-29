import { ChevronRight } from 'lucide-react';
import  { useState } from 'react'
import { motion } from 'framer-motion';
function FaqP() {
         const Faq = [
        {
            ask : "How do I make payment by my credit card?",
            Anser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            ask : "How do I make payment by my credit card?",
            Anser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            ask : "How do I make payment by my credit card?",
            Anser: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
    ]
     const [isOpin, setIsOpin] = useState<number | null>(null);
        const HandelClick = (index:number)=>{
            setIsOpin(isOpin === index? null : index);
        }
     return (
    <div className='h-fit overflow-x-hidden w-full py-12 px-6 my-12 flex lg:flex-row flex-col items-center justify-center space-x-3'>
        <div className='h-fit space-x-8 justify-between lg:p-12 p-0 mx-auto flex lg:flex-row flex-col'>
                <motion.div
        initial={{x: -210 }}
        whileInView={{x: 0}}
        transition={{duration: 2}} className='lg:h-[90vh] md:h-[70vh] h-[50vh] shadow-lg  shadow-gray-400 md:w-[430px] w-[80%] bg-[#D83054] relative flex justify-start p-12 items-end'>
            <img src="/images/2258.webp" className='lg:h-[70vh] md:h-[50vh] h-[30vh]  md:w-[290px] w-[160px] absolute -top-14 left-12 hover:-top-16 transition-all duration-700' alt="" />
            <img src="/images/flower1.jpg" className='md:h-[50vh] lg:h-[70vh] h-[30vh]  md:w-[290px] w-[160px] absolute top-16  hover:top-14 transition-all duration-700 -right-24 md:-right-56' alt="" />
            <h1 className='text-4xl font-Headeing text-white'> Customer Questions</h1>
        </motion.div>
            <motion.div
        initial={{x: 210 }}
        whileInView={{x: 0}}
        transition={{duration: 2}}
                 className='h-full lg:w-[40%] w-full my-4 flex flex-col gap-3 '>
            <h2 className='text-[#D83054] text-xl'>FAQ</h2>
            <h1 className='text-3xl font-Headeing'>Customer Questions</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='flex flex-col gap-9 w-full p-5'>
                {Faq.map((faq , index)=>{
                    const isActive = isOpin === index
                    return(
                <div key={index} className={`w-full duration-300 cursor-pointer flex flex-col 4`}>
                    <div className={`flex gap-5 w-full items-center px-1 py-4 ${isActive ? 'bg-[#D83054] text-white' :'shadow-md shadow-gray-400' }  `} onClick={()=> HandelClick(index)}>
                        <ChevronRight size={40}/>
                        <p className=' font-Headeing'>{faq.ask}</p>
                    </div>
                    {isActive &&(
                    <p className=' text-gray-300 text-center'>{faq.Anser}</p>
                    )}
                </div>
                    )
})}
                {/* faq 1 endded */}
            </div>
            </motion.div>
        
        </div>
        {/* div endded */}
        
    </div>
  )
}

export default FaqP
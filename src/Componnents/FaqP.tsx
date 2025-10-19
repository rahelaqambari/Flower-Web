import { ChevronRight, PersonStanding } from 'lucide-react';
import React, { useState } from 'react'

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
    <div className='h-fit w-full py-12 px-6 my-12 flex items-center justify-center space-x-3'>
        <div className='h-fit  space-x-8 justify-between p-12 mx-auto flex lg:flex-row flex-col  '>
                <div className='h-[90vh] shadow-lg  shadow-gray-400 w-[430px] bg-[#D83054] relative flex justify-start p-12 items-end'>
            <img src="/images/2258.webp" className='h-[65vh] w-[290px] absolute -top-14 left-12 hover:-top-16 transition-all duration-700' alt="" />
            <img src="/images/flower1.jpg" className='h-[65vh] w-[290px] absolute top-16 hover:top-14 transition-all duration-700 -right-56' alt="" />
            <h1 className='text-4xl font-Headeing text-white'> Customer Questions</h1>
        </div>
            <div className='h-full w-[40%] flex flex-col  gap-3 '>
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
            </div>
        
        </div>
        {/* div endded */}
        
    </div>
  )
}

export default FaqP
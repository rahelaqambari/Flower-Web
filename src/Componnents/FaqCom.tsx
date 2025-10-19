import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

function FaqCom() {
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
    <div className='h-fit w-full p-12 my-12 flex items-center justify-center space-x-3'>
        <div className='h-[100vh] w-[90%] p-12 mx-auto flex flex-col relative shadow-lg shadow-gray-300'>
            <div className='h-full w-1/2 flex flex-col gap-3 '>
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
            <div className='h-[120vh] shadow-lg absolute -top-12 right-12 shadow-gray-400 w-[500px] border-8 border-white outline-4 outline-white overflow-hidden'>
            <img src="public/images/faq.jpg" className='h-full w-full hover:scale-125 transition-all duration-700 ease-in-out' alt="" />
        </div>
        </div>
        {/* div endded */}
        
    </div>
  )
}

export default FaqCom
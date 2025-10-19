import React from 'react'

function Protfoliopost() {
    const ProtfolioCol = [
        {
            img: "/images/flowers-1-e1620281168666.jpg",
            h1: "Flower Beautiful Pink",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "public/images/flower-1-e1620281175317.jpg",
            h1: "Wedding Flower Ideas",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/ColP1.jpg",
            h1: "Ceremony Main Altar",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/Colp2.jpg",
            h1: "Ceremony Decoration",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/Colp3.jpg",
            h1: "Wedding Aisle Markers",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/colp4.jpg",
            h1: "Peaceful Red Garden",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/colp5.jpg",
            h1: "Pink Roses Bouquet",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
        {
            img: "/images/colp6.jpg",
            h1: "Corsages & Boutonnier",
            p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
        },
    ]
  return (
    <div className='h-fit py-12 px-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 justify-center items-center '>
        {ProtfolioCol.map((pro , index)=>(
         <div key={index} className='flex flex-col items-center justify-center gap-4 shadow-md shadow-gray-400'>
            <div className='w-full h-[280px] overflow-hidden'>
                <img src={pro.img} className='h-full w-full hover:scale-125 transition-all duration-700' alt="" />
            </div>
            <div className='w-full p-6 flex flex-col gap-5 justify-start items-start'>
            <h1 className='text-2xl font-Headeing hover:text-[#D83054] font-light'>{pro.h1}</h1>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt.</p>
            <button className='text-[#D83054] w-fit'>READ MORE..</button>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Protfoliopost
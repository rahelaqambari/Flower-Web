import { CheckCircle, CheckIcon } from 'lucide-react'
import React from 'react'

function SpecialPricing() {
    const SpecialP = [
        {
            h1: "Wedding",
            img: "public/images/Screenshot 2025-10-13 113432.png",
            li1: "1 Bouquet",
            li2: "Toss Bouquet",
            li3: "Flower Girl Satin Basket",
            li4: "Flower Girl Petals",
            li5: "Flower Girl wand",
            li6: "Bridesmaid Bouquet ",
        },
        {
            h1: "Ceremony",
            img: "public/images/Screenshot 2025-10-13 113444.png",
            li1: "3 Bouquet",
            li2: "Toss Bouquet",
            li3: "Flower Girl Satin Basket",
            li4: "Flower Girl Petals",
            li5: "Flower Girl wand",
            li6: "1 Bouquet",
        },
        {
            h1: "Anniversary",
            img: "public/images/Screenshot 2025-10-13 113503.png",
            li1: "5 Bouquet",
            li2: "Toss Bouquet",
            li3: "Flower Girl Satin Basket",
            li4: "Flower Girl Petals",
            li5: "Flower Girl wand",
            li6: "1 Bouquet",
        },
    ]
  return (
    <div className='h-fit w-full py-12 flex flex-col justify-center items-center gap-6'>
        <h2 className='text-xl text-[#D83054] font-Headeing'>Special Pricing</h2>
        <h1 className='text-4xl font-Headeing'>Affordable Prices</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  '>
            {SpecialP.map((price , index)=>(
            <div key={index} className='flex flex-col justify-center gap-4 items-start lg:h-[80vh] h-fit w-[350px] shadow-md shadow-gray-400'>
                <h2 className='text-3xl font-Headeing px-3 '>{price.h1}</h2>
                <img src={price.img} alt="" />
                <ul className='flex flex-col gap-6 p-4 '>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li1}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li2}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li3}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li4}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li5}</span></li>
                    <li className='flex space-x-3 text-white'><button className='rounded-full px-1 bg-[#D83054]'><CheckIcon  size={16}/></button><span className='text-black'>{price.li6}</span></li>
                </ul>
            </div>
            ))}
        </div>
    </div>
  )
}

export default SpecialPricing
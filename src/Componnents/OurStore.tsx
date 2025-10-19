import React from 'react'

function OurStore() {
    const Card = [
        {
            img: "public/images/con3.jpg",
            h1: "Denpasar",
            St: "Seroja ST. 4421 Denpasar, Bali",
            num: "(+93) 81-342-3471",
            Mail: "Rahilaqanbari@gmail.com",
        },
        {
            img: "/images/con2.jpg",
            h1: "Gianyar",
            St: "Ketewel ST. 4421 Gianyar, Bali",
            num: "(+93) 79504649",
            Mail: "Banonazisharifi@gmail.com",
        },
        {
            img: "/images/con1.jpg",
            h1: "Tabanan",
            St: "Bedugul ST. 4421 Tabanan, Bali",
            num: "(+93) 799048877",
            Mail: "nazisharifi961@gmail.com",
        },
        {
            img: "/images/con4.jpg",
            h1: "Singaraja",
            St: "Buleleng ST. 4421 Singaraja, Bali",
            num: "(+93) 795991267",
            Mail: "Nazisharifi415@gmail.com",
        },
    ]
  return (
    <div className='h-fit w-full py-12 my-12 flex justify-evenly items-center space-x-6 p-6'>
        {Card.map((item, index) => (
        <div key={index} className='h-[90vh] w-[320px] flex flex-col gap-3 '>
            <img src={item.img} className='h-[80%] w-full' alt="" />
            <h1 className='text-2xl font-Headeing'>{item.h1}</h1>
            <span className='text-gray-500 font-normal'>{item.St}</span>
            <span className='text-gray-500 font-normal'>{item.num}</span>
            <span className='text-gray-500 font-normal'>{item.Mail}</span>
        </div>
        ))}
    </div>
  )
}

export default OurStore
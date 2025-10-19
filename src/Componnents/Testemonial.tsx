import { Quote } from 'lucide-react'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

function Testemonial() {
      const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      initialSlide: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
    },
  },
],
  };
   const Cards = [
    {
      name: "Reta Jahn",
      Job : "Maneger",
      des : "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae. Etiam vel blandit est. Nulla quam nisi eleifend a consequata commodo at justo. Vestibulum ante ipsum primis in faucibus orci luctus etultrices",
      imgUrl : "/images/a.jpg"
    },
    {
      name: "Hazel Dawson",
      Job : "Managing Director  ",
      des : "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae. Etiam vel blandit est. Nulla quam nisi eleifend a consequata commodo at justo. Vestibulum ante ipsum primis in faucibus orci luctus etultrices.",
      imgUrl : "/images/a1.jpg"
    },
    {
      name: "َAditi Nayak ",
      Job : "Manager",
      des : "Fusce elementum pretium odio euhendrerit. Donec eumale suada libero. Vestibulum ante ipsum primis in faucibus orci luctus etultrices posuere cubilia curae. Etiam vel blandit est. Nulla quam nisi eleifend a consequata commodo at justo. Vestibulum ante ipsum primis in faucibus orci luctus etultrices.",
      imgUrl : "/images/a2.jpg"
    },
  ]
  return (
    <div className='h-[70vh] w-full flex justify-end items-center my-5 px-8 bg-cover bg-no-repeat bg-center bg-[url(/images/hero6.jpg)] '>
        <div className='w-[600px] h-full bg-white p-6'>
          <Slider {...settings}>
            {Cards.map((items , index)=>(
            <div key={index} className='flex test flex-col justify-center items-cente h-full w-full gap-4 border border-gray-200 relative'>
                <Quote size={62} className='text-[#D83054] absolute left-[45%]  -top-4 p-3 bg-white'/>
                <p className='text-gray-500 text-center w-[90%] mx-auto'>{items.des}</p>
                <img src={items.imgUrl} className='h-24 w-24 rounded-full mx-auto' alt="" />
                <h1 className='text-3xl mx-auto'>{items.name}</h1>
                <h3 className='mx-auto'>{items.Job}</h3>
            </div>
            ))}
            </Slider>
        </div>
    </div>
  )
}

export default Testemonial
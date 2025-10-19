import { div } from 'framer-motion/client'
import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export default  function TeamA() {
    const Team =[
        {
            Img: "/images/team1.jpg",
            Name: "Alisa Calles",
            Job: "CEO & Founder"
        },
        {
            Img: "/images/team2.jpg",
            Name: "Carmencita Caldera",
            Job: "HR Manager"
        },
        {
            Img: "/images/team3.jpg",
            Name: "Nastya Nikolaeva",
            Job: "Flowtrist Marketing"
        },
    ]
  return (
    <div className=' flex flex-col h-fit w-full '>
        <div className=' flex justify-between items-center pt-12'>
            <div>
                 <h3 className='text-xl text-[#D83054]'>Some Quotes</h3>
        <h1 className='text-4xl font-Headeing text-black'>Meet Our Leadership</h1>
            </div>
            <div>
                 <button className='py-4 px-12 bg-[#D83054] text-white'>ALL TEAM</button>
            </div>
        </div>
    <div className='w-full h-fit pb-24 pt-6 grid lg:grid-cols-3 grid-cols-1 gap-16 items-center justify-center'>
        {Team.map((team,index)=>(
        <div key={index} className='h-[80vh] lg:w-[400px] w-full  relative group'>
            <img src={team.Img} className='h-full w-full  transition-all duration-700 ease-linear' alt="" />
            <div className='lg:w-[320px] w-full h-28 flex flex-col z-30 items-center absolute -bottom-12 lg:right-14 bg-white justify-center shadow-lg px-7 shadow-gray-400'>
                <h1 className='text-3xl font-Headeing'>{team.Name}</h1>
                <h3 className='text-xl text-[#D83054]'>{team.Job}</h3>
            </div>
            <div className='h-[80vh] w-[400px] absolute top-0 right-0 transition-all duration-1000 ease-linear bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center space-x-4'>
            <button className='bg-[#D83054] text-white rounded-full p-4'>
            <Linkedin size={24}/>
            </button>
            <button className='bg-[#D83054] text-white rounded-full p-4'>
            <Github size={24}/>
            </button>
            <button className='bg-[#D83054] text-white rounded-full p-4'>
            <Instagram size={24} />
            </button>
            </div>
        </div>
        ))}
    </div>
    </div>
  )
}
import { Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

function OurTeam() {
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
        {
            Img: "/images/team4.jpg",
            Name: "Aniya Barlow",
            Job: "Flowtrist Designer "
        },
        {
            Img: "/images/team5.jpg",
            Name: "Alma Guseva",
            Job: "Senior Arrangers"
        },
        {
            Img: "/images/team6.jpg",
            Name: "Alaina Labelle",
            Job: "Junior Arrangers"
        },
    ]
  return (
    <div className='w-full h-fit py-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 items-center justify-center'>
        {Team.map((team,index)=>(
        <div key={index} className='h-[80vh] w-[400px] relative group'>
            <img src={team.Img} className='h-full w-full  transition-all duration-700 ease-linear' alt="" />
            <div className='w-[320px] h-28 flex flex-col z-30 items-center absolute -bottom-12 right-14 bg-white justify-center shadow-lg shadow-gray-400'>
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
  )
}

export default OurTeam
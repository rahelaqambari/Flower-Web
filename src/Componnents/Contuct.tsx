import { Clock1, Facebook, Github, Instagram, Linkedin, Mail, MessageCircle,  Phone, Store } from 'lucide-react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contuct() {
       const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [Messege,setMessege] = useState("");
    function Handelclick(e:any){
        e.preventDefault();
        const publi_key = "dBf6x-D_GzZLr3gSr";
        const template_id = "template_b3lir5y";
        const service_id = "service_ve0cr4c";
        const content= {
            from_name : name,
            from_email : email,
            subject : subject,
            to_name : "Nazi Sharifi",
            message: Messege
        };
    emailjs
      .send(service_id,template_id ,content, {
        publicKey: publi_key,
      })
   .then(() => {
    alert('SUCCESS!');
    setName("");
    setEmail("");
    setSubject("");
    setMessege("");
})
.catch((error) => {
     console.error(error); 
    alert('FAILED...');
});

    }
  return (
    <div className='lg:h-screen h-fit w-full grid lg:grid-cols-2 grid-cols-1 px-5 py-12 justify-center items-center space-x-2 text-black'>
        <div className='flex flex-col gap-6 '>
            <h2 className='text-2xl text-[#D83054]'>Contact Us</h2>
            <h1 className='text-5xl font-Headeing'>Get In Touch</h1>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum excepturi modi architecto consequatur maiores nesciunt dolorem, laudantium totam tenetur, non asperiores? Nobis deserunt adipisci voluptas, unde officia laboriosam magni.</p>
            <div className='w-full grid grid-cols-2 gap-12 lg:my-4 my-6 border-b border-gray-400 pb-6'>
                <div className='flex items-center justify-center gap-3'>
                    <Store size={50} className='text-[#D83054] font-light'/>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-3xl'>Store</h1>
                        <span className='text-gray-400'>Seroja ST.4421 Denpasar,Bali</span>
                    </div>
                </div>
                {/* one endded */}
                   <div className='flex items-center justify-center gap-3'>
                    <Clock1 size={50} className='text-[#D83054] font-light'/>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-3xl'>Store</h1>
                        <span className='text-gray-400'>Seroja ST.4421 Denpasar,Bali</span>
                    </div>
                </div>
                {/* tow endded */}
                   <div className='flex items-center justify-center gap-3'>
                    <Phone size={50} className='text-[#D83054] font-light'/>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-3xl'>Store</h1>
                        <span className='text-gray-400'>Seroja ST.4421 Denpasar,Bali</span>
                    </div>
                </div>
                {/* tree endded */}
                   <div className='flex items-center justify-center gap-3'>
                    <Mail size={50} className='text-[#D83054] font-light'/>
                    <div className='flex flex-col gap-1 '>
                        <h1 className='text-3xl font-light'>Store</h1>
                        <span className='text-gray-400'>Seroja ST.4421 Denpasar,Bali</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-5 mb-6'>
                <h1 className='text-3xl font-Heaideing'>Sociol Media</h1>
                <div className='flex space-x-6 '>
                    <a href="https://www.linkedin.com/in/nazi-sharifi-102735368/" target='_blank' className='p-3 rounded-full bg-blue-900 text-white'><Linkedin/></a>
                    <a href="https://github.com/nazisharifi2025" target='_blank' className='p-3 rounded-full bg-black text-white'><Github/></a>
                    <a href="https://www.instagram.com/nazthe_coder?igsh=bWFzcGxoaXhhcXY0" target='_blank' className='p-3 rounded-full bg-pink-300 text-white'><Instagram/></a>
                    <a href="https://wa.me/+93795064649" target='_blank' className='p-3 rounded-full bg-green-500 text-white'><MessageCircle/></a>
                    <a href="https://www.instagram.com/nazthe_coder?igsh=bWFzcGxoaXhhcXY0" target='_blank' className='p-3 rounded-full bg-blue-400 text-white'><Facebook/></a>
                </div>
            </div>
        </div>
        {/* div one endded */}
        <div className='w-full'>
        <form onSubmit={Handelclick} className='flex flex-col shadow-md shadow-gray-500 items-start justify-center gap-5 p-5 lg:w-[87%] w-full mx-auto'>
            <h1 className='text-4xl font-Headeing'>Leave A Message</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum illo vel numquam distinctio, assumenda obcaecati, eveniet atque et inventore quibusdam aut.</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className='p-3 border border-gray-400 rounded-sm w-[90%] mx-auto' placeholder='YOUR NAME' />
            <input value={email} onChange={(e)=> setEmail(e.target.value)}  type="text" className='p-3 border border-gray-400 rounded-sm w-[90%] mx-auto' placeholder='YOUR EMAIL' />
            <input value={subject} onChange={(e)=> setSubject(e.target.value)}  type="text" className='p-3 border border-gray-400 rounded-sm w-[90%] mx-auto' placeholder='SUBJECT' />
            <textarea value={Messege} onChange={(e)=> setMessege(e.target.value)}  name="Messege" className='px-3 h-32 border border-gray-400 rounded-sm w-[90%] mx-auto'  placeholder='TOUR MESSEGE' id=""></textarea>
            <button onClick={Handelclick} className='text-white px-6 py-4 bg-[#D83054] w-[90%] mx-auto rounded-sm'>SEND MESSEGE</button>
        </form>
        </div>
    </div>
  )
}

export default Contuct
import { div } from "framer-motion/client";

export default function Aboutflotrist (){
    return(
        <div className="h-[60vh] w-full bg-stone-50">
            <div className="h-full w-full font-Headeing justify-center items-center gap-6 flex flex-col">
                    <h3 className='text-[#D83054] text-xl'>About Flowtrist</h3>
                <h1 className='text-4xl text-center'>We Arrange Flowers Personally & Bring Happines </h1>
                <p className='lg:w-[70%] w-full text-center'>Donec feugiat lectus mi, nec scelerisque massa viverrac. Vivamus vestibulum ornare imperdiet. Nam etsagittis diam. Maecenas maximus fringilla viverra etsagittis diam ornare viverrac Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veniam hic amet nemo incidunt harum repellat sunt eaque blanditiis delectus voluptas omnis exercitationem facere qui, eius eos nisi? Doloremque, culpa.</p>
                <img className="h-12 w-64" src="images/t.png" alt="" /> 
            </div>
        </div>
    )
}
import { div } from "framer-motion/client";
import { Calendar1Icon, Phone, QuoteIcon } from "lucide-react";
import { useEffect, useState } from "react";

const API_key ="sk-KYoQ68f356437b43b12624";
const url= `https://www.perenual.com/api/v2/species-list?key=${API_key}&page=1`;

function API() {
 interface Plant {
  id: number;
  common_name: string;
  scientific_name: string[];
  cycle: string;
  watering: string;
  sunlight: string[];
  default_image: {
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  };
}

  const [detas,setdeta] = useState<Plant[]>([]);
  useEffect(()=>{
  async function fetchData() {
    const respons = await fetch(url);
    const data = await respons.json();
    console.log(data.data); 
     setdeta(data.data);
  };
   fetchData()
},[]);

 
  return (
    <div className="h-fit w-full grid lg:grid-cols-3 grid-cols-1 p-4">
      <div className="col-span-1 flex flex-col gap-3 p-4 w-full ">
        <div className="w-full md:h-[80vh] h-[100vh] flex flex-col gap-4 shadow-md shadow-gray-400 p-6">
          <h1 className="text-3xl font-semibold font-serif">Recent Post</h1>
          <div className="w-full md:flex-row flex-col flex justify-center gap-4">
            <img src="/images/product-8.webp" className="lg:h-32 lg:w-80 md:w-96 md:h-60 h-42 w-60" alt="" />
            <div className="flex flex-col md:justify-center ">
            <p className=" font-Headeing font-semibold font-serif lg:text-xl md:text-2xl">Amaizing Flower Arengemint To Give As A Present</p>
            <span className="text-gray-500 flex gap-2 font-semibold"><Calendar1Icon/> May/23/2025 </span>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-center gap-4">
            <img src="/images/Mask-Group-24.png" className="lg:h-32 lg:w-80 md:w-96 md:h-60 h-42 w-60" alt="" />
            <div className="flex flex-col md:justify-center ">
            <p className=" font-Headeing font-semibold font-serif lg:text-xl md:text-2xl ">Amaizing Flower Arengemint To Give As A Present</p>
            <span className="text-gray-500 flex gap-2 font-semibold"><Calendar1Icon/> May/23/2025 </span>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col  justify-center gap-4">
            <img src="/images/product-6.webp" className="lg:h-32 lg:w-80 md:w-96 md:h-60 h-42 w-60" alt="" />
            <div className="flex flex-col md:justify-center">
            <p className=" font-Headeing font-semibold font-serif lg:text-xl md:text-2xl">Amaizing Flower Arengemint To Give As A Present</p>
            <span className="text-gray-500 flex gap-2 font-semibold"><Calendar1Icon/> May/23/2025 </span>
            </div>
          </div>
        </div>
        <div className="bg-[url(/images/img1-top-floda2.webp)] gap-2 bg-cover bg-center w-full h-[40vh] p-4 flex flex-col justify-center">
        <h1  className="text-3xl font-semibold font-serif">Want Tpo Try Our Services?</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt aperiam excepturi sint placeat, provident inventore totam ipsa repellat accusamus vitae, dignissimos quaerat atque quibusdam.</p>
        <button className="px-4 py-3 bg-pink-600 text-xl w-fit text-white font-serif font-semibold flex gap-2 "><Phone className="text-white"/> (+93) 79-50-64-649</button>
        </div>
      </div>
      <div className="col-span-2 h-[125vh] overscroll-y-none  overflow-y-scroll">
      {detas.map((d)=>(
        <div key={d.id} className="p-4 flex flex-col gap-3">
          <h1 className="text-4xl font-bold font-Headeing">{d.common_name}</h1>
          <p className=" w-[90%] font-bold text-gray-400">Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque a quam nesciunt quae minima eligendi, alias ut, illo necessitatibus natus excepturi quod est? Qui reprehenderit <p className="lg:block md:block hidden"> nam quam! Obcaecati, officiis libero? ipsum dolor sit amet consectetur adipisicing elit. Laboriosam accusantium facilis quisquam, iste exercitationem corporis eligendi vero facere dolore quasi, ipsam ipsa amet adipisci in sunt, ad fuga et optio?</p>
          </p>
         <img className="w-full lg:h-[80vh] md:h-[60vh] h-[30vh] " src={d.default_image?.regular_url} alt="" />
         <div className="w-full border-l-6 flex flex-col justify-center  border-pink-600 bg-gray-200/60 h-[30vh] relative mx-auto p-4 mt-4">
         <QuoteIcon size={64} className=" absolute right-6 md:top-12 top-36 text-pink-600/30"/>
         <p className=" w-[90%] font-bold text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nostrum obcaecati quidem corrupti reiciendis facere maxime facilis dolorem quos temporibus, <p className="lg:block md:block hidden">illo inventore, blanditiis quas nobis voluptatum? Accusantium, dicta consequatur! Doloribus.</p></p>
         <h1 className="text-black/70   py-4">Carmelita - <span className="text-black font-bold">CEO Flowetrist</span></h1>
         </div>
        </div>
       
      ))}
      </div>
    </div>
  )
}

export default API
import { useEffect, useState } from "react";
export default function Search(){
        const Allservices: {id: number,title: string,}[] = [
        {
            id: 1,
            title:"Residential Construction",
         },
  
        ];
        const [text, settext] = useState ("");
        const [filteredservices, setFilteredservices] = useState(Allservices);
        useEffect(()=>{
            if(text.trim()===""){
                setFilteredservices(Allservices)
            }
            else{
                const newarray =
                Allservices.filter(item=>{
                    return item.title.toLowerCase().includes(text.toLowerCase())})
                    setFilteredservices(newarray);
                }           
        },
        [text,Allservices]);

    return(
        <div className=" h-fit min-h-screen w-full bg-stone-100 felx justify-center items-center mb-12">
             <div className="h-64 bg-stone-100 w-full flex items-center justify-center">
                <input value={text} onChange={(e)=>settext(e.target.value)} className="h-16 w-[50%] focus:outline-0 border rounded-full px-14 border-amber-700 relative" type="text" placeholder="Search here" />
        </div>
            
            <div className="h-[90%] bg-stone-100 w-full grid grid-cols-3 grid-rows-2 justify-center items-center gap-8">
                 {filteredservices.length>0?filteredservices.map((cart ,index)=>(
                    <div key={index}>
                        <h1>{cart.title}</h1>
                    </div>
 
                    )):
                <h1 className=" bg-stone-200 border border-stone-300 shadow p-7 text-center ml-56">No Flower is Found!</h1>
                    }
            </div>
        </div>
    )
}
import React, { useEffect, useState } from 'react';

function Counter() {
    const [counts , setCounts] = useState([20, 970, 1929, 30]);
    const stopAt = [25, 975, 1934, 35]; // عدد توقف برای هر کانتر

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = prevCounts.map((num, i) => 
                    num < stopAt[i] ? num + 1 : num
                );

                // اگر همه کانترها به مقدار توقف رسیدند، interval را پاک کن
                if (newCounts.every((num, i) => num >= stopAt[i])) {
                    clearInterval(interval);
                }

                return newCounts;
            });
        },1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full lg:h-[60vh] md:h-[60vh] h-screen bg-cover bg-no-repeat bg-center bg-[url(/images/Not2.jpg)]'>
            <div className='h-full relative w-full font-Headeing justify-center items-center gap-6 flex flex-col bg-black/10 '>
                <h3 className='text-[#D83054] text-xl'>Interested In An Estimate</h3>
                <h1 className='text-4xl '>Get Started With Your Free Estimate</h1>
                <p className='lg:w-[50%] md:w-[50%]  w-full text-center'>Donec feugiat lectus mi, nec scelerisque massa viverrac. Vivamus vestibulum ornare imperdiet. Nam etsagittis diam. Maecenas maximus fringilla viverra etsagittis diam ornare viverrac.</p>
                <div className='lg:w-[80%] w-full absolute -bottom-12 h-fit py-8 bg-[#D83054] text-white flex justify-between lg:flex-row md:flex-row flex-col px-6 items-center lg:gap-12 md:gap-12 gap-6'>
                    {counts.map((count,index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <h1 className='text-4xl font-Headeing'>{count} <sup>+</sup></h1>
                            <span>Years Experience</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Counter;

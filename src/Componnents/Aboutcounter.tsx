import React, { useEffect, useState } from 'react';

export default function Aboutcounter() {
    const [counts , setCounts] = useState([1427, 970,3537]);
    const stopAt = [1432, 975, 3541]; // عدد توقف برای هر کانتر

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
        },300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-[60vh] bg-cover bg-no-repeat bg-center bg-[url(/images/hero6.jpg)]'>
            <div className=' h-full py-8 text-white flex lg:justify-end md:justify-end justify-center  px-6 items-center gap-32'> 
                <div className=' h-full py-8 text-white flex justify-end  px-6 items-center lg:gap-32 md:gap-32 gap-18'>
                    {counts.map((count,index) => (
                        <div key={index} className='flex flex-col justify-center items-center'>
                            <h1 className='text-4xl font-Headeing'>{count} <sup>+</sup></h1>
                            <span>Project Comlated</span>
                        </div>
                    ))}
                </div>
                </div>  
        </div>
    );
}

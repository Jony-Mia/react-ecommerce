import React from 'react';
import Promo_1 from "@/assets/img/grocery-banner.png"
const PromoBanner = () => {
    return (
        <>
               <div className='relative w-full'>
                 <div className=' flex items-center '>
                    <div>
                        <img className='absolute top-0 -z-1' src={Promo_1} width={550} alt="" />
                    </div>

                    <div className="px-6 pt-12">
                        <h1 className='text-2xl font-bold'>Fruits & Vegetables</h1>
                        <p className='text-lg font-semibold text-gray-400'>Get Upto 30% off</p>
                       <span> <button className='btn btn-neutral my-3'>Shop Now</button></span>
                    </div>
                    
                </div>
               </div>
               
               <div className='relative w-full'>
                 <div className=' flex items-center '>
                    <div>
                        <img  className='absolute top-0 -z-1' src={Promo_1} width={550} alt="" />
                    </div>

                    <div className="px-6 pt-12">
                        <h1 className='text-2xl font-bold'>Fruits & Vegetables</h1>
                        <p className='text-lg font-semibold text-gray-400'>Get Upto 30% off</p>
                       <span> <button className='btn btn-neutral my-3'>Shop Now</button></span>
                    </div>
                    
                </div>
               </div>

        </>
    );
};

export default PromoBanner;
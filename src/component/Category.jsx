import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Category = ({categoryList}) => {
    let category = [
        ...new Map(categoryList.map(items=>[items.category,items])).values()
    ]
    
    return (
        <>
        <h1 className='font-bold text-3xl my-3 ms-3'>Featured Categories</h1>
           <Swiper 
            modules={[Pagination]}
            pagination={{
            type: "fraction"
            }} 
            spaceBetween={5}
            loop={true}
            slidesPerView={5}
            className='mySwiper h-[300px]'
           >
                {
                    category.map(cat=>{
                        return(
                            <SwiperSlide key={cat.id} >
                               <div className='p-4 border w-fit border-green-300 rounded-lg'>
                                    <div>
                                        <img width={180} src={cat.images[0]} alt="" />
                                    </div>
                                    <div>
                                        <p className='text-center mt-3 text-xs'>{cat.title}</p>
                                    </div>
                               </div>
                            </SwiperSlide>
                        )
                    })
                }
           </Swiper>
        </>
    );
};

export default Category;
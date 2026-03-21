import React, { use, useState } from 'react';
import { useParams } from 'react-router';
import { singleProduct } from './API/api';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PostDetails = () => {
    let [thumbsSwiper, setThumbsSwiper] = useState(null)
    let {id} = useParams()
    let singleProductData = use(singleProduct(id))
    
    let single = singleProductData.data;
    let image  = single.images.map(i=><SwiperSlide className=' border-transparent border-2 active:border-green-400 rounded-lg' key={i}><img className='w-full rounded-lg' src={i} alt="" /></SwiperSlide>);
    
    let percentage= Math.round(single.price * single.discountPercentage /100)
    
    return (
        <>
        <div  className='container sm:grid-cols-1 grid-cols-1 md:gri grid gap-15 mt-10 p-4 m-auto'>
            <div className=''>
            <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            
            }}
            watchSlidesProgress={true}
            spaceBetween={10}
            navigation={true}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 relative"
        >  <div className='absolute top-4 right-4 z-1 badge badge-soft badge-success p-3 font-bold rounded-full'>{single.brand}</div>
           {image}
            </Swiper>
            <br />
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
               {image}
            </Swiper>
            </div>
            <div className=''>
                <h1 className='text-success font-bold text-2xl ' >{single.category}</h1>
                <h2 className='font-semibold my-2'>{single.title}</h2>
                <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                <div className='flex relative gap-3'>
                    <p className='font-bold text-2xl'>${single.price}</p>
                    <del className='text-success'>${single.discountPercentage}</del>
                    <p className='bg-red-600 p-2.5 rounded-4xl badge badge-xs text-base-100 font-bold'>$ {percentage}  offer</p>
                </div>
                <hr className=' border-b-2 border-base-300 w-full mt-2.5 ' />
                <div className='space-x-2'>
                    <button className="btn btn-outline">250g</button>
                    <button className="btn btn-outline">500g</button>
                    <button className="btn btn-outline">1kg</button>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default PostDetails;
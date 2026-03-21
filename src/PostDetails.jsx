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
    let image  = single.images.map(i=><SwiperSlide className=' border-transparent border-2 active:border-green-400 rounded-lg' key={i}><img className='w-full rounded-lg' src={i} alt="" /></SwiperSlide>)
    
    
    return (
        <>
        <div  className='container p-4 m-auto'>
            <div className='w-[50%]'>
            <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            
            }}
            watchSlidesProgress={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
        >
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
        </div>
        
        </>
    );
};

export default PostDetails;
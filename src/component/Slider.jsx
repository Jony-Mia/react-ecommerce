import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slider_1 from "../assets/img/slide-1.jpeg";
import Slider_2 from "../assets/img/slider-2.jpeg";
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
const Slider = () => {
    return (
      <>
        <div className=''>
            <Swiper
            modules={[Navigation,Autoplay,Pagination]}
            
            pagination={true}
            loop={true}
            spaceBetween={10}
            autoplay={{
                delay: 3000
            }}
             >
                <SwiperSlide>
                    <section style={{
                        backgroundImage: `url(${Slider_1})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition:"center center",
                        }}
                        className={`w-full flex items-center p-5 h-full rounded-2xl`} >
                        <div className='px-10'>
                        <p className='text-xs badge badge-warning rounded-full text-neutral font-bold '>Opening sale 50% discount</p>

                        <h1 className='text-5xl leading-14 font-bold'> Super Market For <br /> Fresh Grocery </h1>
                        <br />
                        <p className='w-5/7 text-lg font-semibold text-gray-500'> Introduced a new model for online grocery shopping and convenient home delivery.</p>
                        <button className="btn rounded-[8px] mt-4 btn-neutral">Shop Now <i className='fa fa-arrow-right'></i> </button>
                        </div>
                        <div>
                            <div className='h-130 w-full'></div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section style={{
                        backgroundImage: `url(${Slider_2})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition:"center center",
                        }}
                        className={`w-full flex items-center p-5 h-full rounded-2xl`} >
                        <div className='px-10'>
                        <p className='text-xs badge badge-warning rounded-full text-neutral font-bold '>Opening sale 50% discount</p>

                        <h1 className='text-5xl leading-14 font-bold'> Free shipping on <br /> orders over <span className='text-green-600'> 100$</span> </h1>
                        <br />
                        <p className='w-5/7 text-lg font-semibold text-gray-500'> Introduced a new model for online grocery shopping and convenient home delivery.</p>
                        <button className="btn rounded-[8px] mt-4 btn-neutral">Shop Now <i className='fa fa-arrow-right'></i> </button>
                        </div>
                        <div>
                            <div className='h-130 w-full'></div>
                        </div>
                    </section>
                </SwiperSlide>
                
                

            </Swiper>
        </div></>
    );
};

export default Slider;
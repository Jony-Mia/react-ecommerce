import React, { use, useState } from 'react';
import { useParams } from 'react-router';
import { singleProduct } from './API/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PostDetails = () => {
    let [quantity, setQuantity] = useState(0)
    let [thumbsSwiper, setThumbsSwiper] = useState(null)
    let {id} = useParams()
    let singleProductData = use(singleProduct(id))
    let single = singleProductData.data;
    let image  = single.images.map(i=><SwiperSlide className=' border-transparent border-2 active:border-green-400 rounded-lg' key={i}>
        <img className='w-full rounded-lg' src={i} alt="" /></SwiperSlide>);

    let percentage= Math.round(single.price * single.discountPercentage /100)
    
    let plus =()=>setQuantity(quantity+1);
    let minus =()=>setQuantity(quantity+1);
    return (
        <>
        <div  className='container sm:grid-cols-1 grid-cols-1 md:grid-cols-2 md:gri grid gap-15 mt-10 p-4 m-auto'>
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

                <br />
                <hr className=' border-b-2 border-base-300 w-full mt-2.5 ' />
                <br />

                <div className='space-x-2'>
                    <button className="btn btn-outline">250g</button>
                    <button className="btn btn-outline">500g</button>
                    <button className="btn btn-outline">1kg</button>
                </div>

                <div className="join-item mt-5 join-vertical">
                    <button onClick={minus} className="btn btn-neutral rounded-s-[20px] join-item">-</button>
                    <input maxLength={1} min={1} type="text" className='input text-center rounded-none join-item w-12  focus:outline-0' value={quantity} />
                    <button onClick={plus} className="btn btn-neutral rounded-e-[20px] join-item">+</button>
                </div>

                <div className='mt-5 space-x-2'>
                    <button className='btn btn-outline btn-neutral'> 
                        <span className='fa fa-shopping-cart'></span>
                        Add to cart
                    </button>
                    <button className='btn btn-outline btn-neutral'>
                        <span className='fa fa-left-right'></span>
                    </button>
                    <button className='btn btn-outline btn-neutral'>
                        <span className='far fa-heart'></span>
                    </button>
                </div>
                 <hr className=' border-b-2 border-base-300 w-full mt-5 ' />
                <br className='border-b-2 border-base-300' />
                <table className='table'>
                    <tr>
                        <td>Product Code</td>
                        <td>FB92OC1B2</td>
                    </tr>
                    <tr>
                        <td>Availability</td>
                        <td>In Stock</td>
                    </tr>
                    <tr>
                        <td>Availability</td>
                        <td>In Stock</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>Fruits</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td className='text-sm'>Nuralapur</td>
                    </tr>
                </table>
                <div className='dropdown'>
                    <div role='button' tabIndex={0} className='btn btn-neutral btn-outline'>  Share</div>
                      <ul tabIndex={1} className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a><i className='fa-brands fa-facebook'></i> Facebook</a></li>
                        <li><a><i className='fa-brands fa-twitter'></i>  Twitter</a></li>
                        <li><a><i className='fa-brands fa-instagram'></i>  Twitter</a></li>
                        <li><a><i className='fa-brands fa-threads'></i>  Twitter</a></li>
                      </ul>
                </div>
            </div>
        </div> 
        
        </>
    );
};

export default PostDetails;
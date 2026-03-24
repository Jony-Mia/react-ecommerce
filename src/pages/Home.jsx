import React, { lazy, use, useState } from 'react';
import { useNavigate } from "react-router";
import Product from "@/component/Product";
import Banner_Deal from '@/assets/img/banner-deal.jpeg';

const Slider = lazy(()=>import("@/component/Slider"));
const Category= lazy(()=>import("@/component/Category"));
const PromoBanner = lazy(()=>import("@/component/PromoBanner"));
const Daily = lazy(()=>import("@/component/Daily"));

  // const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';
 //  let productsPromise= fetch('https://api.freeapi.app/api/v1/public/randomproducts').then(res=>res.json())
//   const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');
  
export default function Home ({productsPromise}) {
let navigate = useNavigate()
let productsData = use(productsPromise) || null ;
let product = productsData.data.data;

let [cartData, setCartData] = useState([])
console.log(cartData);

function dataSender(data){
    console.log(data);    
    setCartData(()=>cartData,[...data])
}
    return (
        <>
        <div className='container m-auto mt-5'>
           
            <br />
            <br />
            <Slider/>
            <br />

            <Category categoryList={product}></Category>
           <section className='flex m-auto container items-center mt-10 justify-between'>
             <PromoBanner/>
           </section>
           <br />
           <br />
           <br />
                <div className='grid sm:grid-cols-2 md:grid-cols-4 max-md:grid-cols-4 grid-cols-2 gap-10'>
                {product.slice(0,20).map(list=>(<Product
                onClick={()=>navigate(`/product/${list.id}`)}
                key={list.id} 
                title={list.title} 
                image={list.thumbnail} 
                category={list.category} 
                price={list.price} 
                discount={list.discountPercentage} 
                data = {list}
                dataSender={dataSender}
                />))}
                </div>
           
            <div className='grid sm:grid-cols-1 md:grid-cols-4 grid-cols-3 mt-10 gap-2'>
            <div style={{
                        backgroundImage: `url(${Banner_Deal})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition:"center center",
                        padding: "40px",
                        color: "white",
                        borderRadius: "10px"
                        }}>
                <h1 className='text-3xl font-bold my-1'>100% Organic Coffee Beans.</h1>
                <h3>Get the best deal before close</h3>
                <button className='btn bg-green-500 border-green-500 text-base-100 rounded-lg mt-3'>Shop
                    <span className="fa fa-arrow-right"></span>
                </button>
            </div>
             {product.slice(0,3).map(list=>(<Daily
                        key={list.id} 
                        title={list.title} 
                        image={list.images[0]} 
                        category={list.category} 
                        price={list.price} 
                        discount={list.discountPercentage} 
             />))}
             </div>
           </div>

        </>
    );
};

import React, { Suspense, use } from 'react';
import Product from "@/component/Product"
import Slider from '@/component/Slider';
import Category from '@/component/Category'
import PromoBanner from '@/component/PromoBanner';
import Daily from '@/component/Daily';
// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';

//  let productsPromise= fetch('https://api.freeapi.app/api/v1/public/randomproducts').then(res=>res.json())
//   const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');
  
export default function Home ({productsPromise}) {
let productsData = use(productsPromise) || null ;
let product = productsData.data.data;

 
    return (
        <>
        <div className='container m-auto mt-5'>
            <div className='grid sm:grid-cols-1 md:grid-cols-4 grid-cols-3 gap-2'>
             {product.slice(0,4).map(list=>(<Daily
             key={list.id} 
             title={list.title} 
             image={list.images[0]} 
             category={list.category} 
             price={list.price} 
             discount={list.discountPercentage} 
             />))}
             </div>
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
           
            {product.slice(0,20).map(list=>(<Product
             key={list.id} 
             title={list.title} 
             image={list.images[0]} 
             category={list.category} 
             price={list.price} 
             discount={list.discountPercentage} 
             />))}
           </div>

        </>
    );
};

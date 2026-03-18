import React, { Suspense, use } from 'react';
import Product from './Product';
import Slider from '../component/Slider';

// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';

//  let productsPromise= fetch('https://api.freeapi.app/api/v1/public/randomproducts').then(res=>res.json())

//   const response = await fetch('https://api.freeapi.app/api/v1/public/randomproducts');
  
export default function Home ({productsPromise}) {
let productsData = use(productsPromise);
let product = productsData.data.data;

 console.log(product);
 
    return (
        <>
        <div className='container m-auto mt-5'>
            <br />
            <br />
            <Slider/>

            
        </div>

        </>
    );
};

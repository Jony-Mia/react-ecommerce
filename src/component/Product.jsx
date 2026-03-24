// import { cartProductData } from '@/feature/cart';
import React from 'react';
export default function Product({title,category,price,discount,image,onClick,data}) {
// let cartProduct = cartProductData
    return (
        <>
            <div  className="card hover:shadow-lg hover:border-green-300 border-transparent border bg-base-100 pt-5 shadow-sm">
                <figure>
                    <img src={image}
                         alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-400 text-[14px]">{category}</h2>
                    <h2  onClick={onClick} className="card-title cursor-pointer text-lg leading-5">{title}</h2>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                  <div className="card-actions justify-end">
                        <p className="font-bold text-2xl"> ${price} <del className='text-success'> ${discount}</del> </p>
                        <button onClick={()=>console.log(data)} className="btn btn-success text-base-100"><i className="fa fa-plus"></i>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};

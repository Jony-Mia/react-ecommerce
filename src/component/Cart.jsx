import { cartProductData } from '@/feature/cart';
import React from 'react';

const Cart = () => {
    let data = cartProductData()
    console.log(data);

    return (
        <div className='w-full'>
            
        </div>
    );
};

export default Cart;
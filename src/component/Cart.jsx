// import { cartProductData } from '@/feature/cart';
import React from 'react';
import eid from '../assets/img/Eid-Mubarak-Jony-Mia.png'

const Cart = ({cartProduct,setCartProduct,onClick}) => {
    // let data = JSON.parse(localStorage.getItem('cart'))
    let remove = (id)=>{
        let rem =  cartProduct.filter(fil => fil.id!==id)
        setCartProduct(rem);
    }
    // console.log(cartProduct);
    
// data[0].thumbnail='../assets/img/Eid-Mubarak-Jony Mia.png'
    return (
        <div className='w-full'>
            <table className='table'>
               <thead>
                 <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
               </thead>
                  <tbody>
                      {cartProduct?.map(d=>{return(<tr key={d?.id} >

                        <td><img width={50} src={eid} alt="" /></td>
                        <td><button onClick={onclick}>{d?.title}</button></td>
                        <td>{d?.price}</td>
                        <td>
                            <button className='btn btn-error text-base-100' onClick={()=>remove(d.id)} >🗑️</button>
                        </td>

                    </tr>)})}
                  </tbody>
            </table>
        </div>
    );
};

export default Cart;
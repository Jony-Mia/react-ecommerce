import { lazy, Suspense, use, useState } from 'react';
import { getProducts } from './API/api'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import PostDetails from '@/PostDetails';
// import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './component/Footer';

function App() {
  let local =JSON.parse(localStorage.getItem('cart'));
  // let cond = local.length===0 ? null : [...local];
// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=phone';

// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&';
// console.log(cond);

let [cartProduct, setCartProduct] = useState([])
let productsList = getProducts()
let datas = JSON.parse(localStorage.getItem('cart'))
    // if(cartProduct?.length===0){
    //   setCartProduct(datas)
    // }
return (
   <>
      <BrowserRouter>
     <Navbar cartProduct={cartProduct} setCartProduct={setCartProduct} />
          <Suspense fallback={<h1 className='loading loading-spinner text-center'></h1>}>
            <Routes>
              <Route path='/' element={<Home cartProduct={cartProduct} setCartProduct={setCartProduct} productsPromise={productsList} />}></Route>
              <Route path='/product/:id' element={<PostDetails/>} ></Route>
            </Routes>
          </Suspense>
      </BrowserRouter>
      <Footer/>
   </>
  )
}

export default App
import { lazy, Suspense, use } from 'react';
import { getProducts } from './API/api'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import PostDetails from '@/PostDetails';
// import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './component/Footer';

function App() {
// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=phone';

// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&';

let productsList = getProducts()
    
return (
   <>
     <Navbar/>
      <BrowserRouter>
          <Suspense fallback={<h1 className='loading loading-spinner text-center'></h1>}>
            <Routes>
              <Route path='/' element={<Home productsPromise={productsList} />}></Route>
              <Route path='/product/:id' element={<PostDetails/>} ></Route>
            </Routes>
          </Suspense>
      </BrowserRouter>
      <Footer/>
   </>
  )
}

export default App
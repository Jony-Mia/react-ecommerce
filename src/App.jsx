import { Suspense, use } from 'react';
import { getProducts } from './API/api'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'

function App() {
// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=phone';
const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&';


let productsList =  fetch(url).then(res=>res.json());
    


return (
   <>
   
     <Navbar/>
     
      <Suspense fallback={<h1>Loading....</h1>}>
        <Home productsPromise={productsList} />
      </Suspense>
      
   </>
  )
}

export default App
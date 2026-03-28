import axios from "axios";

const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=100&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&';
// const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';
let productPromise = null;
let productCache = new Map()

export let fetchProducts= async()=>{
    let productsList = await axios.get('/data.json' )
    return productsList.data
}
export let fetchSingleProduct = async (id)=>{
    let single = await axios.get(`https://api.freeapi.app/api/v1/public/randomproducts/${id}`);
    return single.data
}
export let getProducts = ()=>{
    if (!productPromise) {
        productPromise = fetchProducts()
    }
    return productPromise;
}
export let singleProduct = (id)=>{
    if (!productCache.has(id)) {
        productCache.set(id,fetchSingleProduct(id))
    }
    return productCache.get(id);
}
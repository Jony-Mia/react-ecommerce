const url = 'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10&inc=category%252Cprice%252Cthumbnail%252Cimages%252Ctitle%252Cid&query=mens-watches';

export function getProducts(){
    let productsList =  fetch('https://api.freeapi.app/api/v1/public/randomproducts')
    .then(res=>res.json());
     
return productsList;
}
// const cache = new Map();
// let promise = null;

// export function fetchPosts() {
//     if (!promise) {
//         promise = fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
//     }
//     return promise;
// }

// export function fetchPost(id) {
//     if (!cache.has(id)) {
//         let promised = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
        
//         cache.set(id, promised)
//     }
//     return cache.get(id)
// }
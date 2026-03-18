// import React, { use } from 'react';
// import {  useNavigate } from 'react-router';
// import { fetchPosts } from '../API/api';
// import Card from './Card';

// const Post = () => {

//     let getPost= use(fetchPosts());
//     let navigate = useNavigate();

//     return (
//         <>
//             <section className='grid grid-cols-4 gap-5 p-4'>
//             {getPost.map(({id,title,body})=><Card 
//                 key={id}
//                 id={id}
//                 title={title}
//                 body={body}
//                 onClick={()=>navigate(`/post/${id}`)}
//             />)}

//             </section>
//         </>
//     );
// };

// export default Post;
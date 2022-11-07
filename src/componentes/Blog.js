import React from 'react';
import posts from '../data/post';
import { NavLink } from 'react-router-dom';

const Blog = () => {
    return ( 
        <div>
            <h2>Página de Blog</h2>
            <ul>
                {posts.map((post)=>{
                    return <li key={post.id}> <NavLink to={`/post/${post.id}`}>{post.titulo}</NavLink></li>
                })}
            </ul>
        </div>
    );
}

export default Blog;
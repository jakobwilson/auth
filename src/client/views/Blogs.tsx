
import React from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const blogsData = [
  { id: 1, title: 'Blog 1', content: 'Content for Blog 1', author: 'Author 1' },
  { id: 2, title: 'Blog 2', content: 'Content for Blog 2', author: 'Author 2' },
  
];

const Blogs = () => {
  return (
    <div>
       <nav className='navbar navbar-expand-lg'>
    <div className="container-fluid">
        <h3 className='title'>Blogs</h3>
        <Link className='btn' to='/'>Home</Link>
    </div>
   </nav>
      <div className="card-deck">
        {blogsData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;


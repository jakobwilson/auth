
import React from 'react';
import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { GET } from '../services/api-service';
import { Blog } from '../types';

const blogsData = [
  
];


const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  useEffect(() => {
    GET('/api/blogs').then(setBlogs)
  },[])
  return (
    <div>
   
      <div className="card-deck">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            id={blog.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;


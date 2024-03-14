import React, { useEffect, useState } from 'react'
import { Blog } from '../types';
import { GET } from '../services/api-service';
import { Link, useParams } from 'react-router-dom';


const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        GET(`/api/blogs/${id}`)
        .then((data) => setBlog(data))
    }, [id]);
    if (!blog) return <></>
  return (
    <div>
        
      <div className="row justify-content-center">
          <div className="col-12 col-md-9" key={`blog-card-${blog.id}`}>
           
            <div className="card shadow-lg p-3 m-2">
              <h1>{blog.title}</h1>
              <h2>{blog.content}</h2>
              <Link className="btn m-2 detail-btn" to={`/blogs/${blog.id}/edit`}>Edit</Link>
            </div>
              <Link className="btn m-2" to='/'>Back</Link>
          </div>
        
      </div>
    </div>
  )
}

export default BlogDetails;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = (props: BlogCardProps) => {
    const { title, content, id} = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">
          
          {/* <small className="text-muted">Author: {author}</small> */}
        </p>
        <Link to={`/blogs/${id}`}>Details</Link>
      </div>
    </div>
  );
};

export default BlogCard;

interface BlogCardProps {
    title: string;
    content: string;
    id: number
    // author: string;
}

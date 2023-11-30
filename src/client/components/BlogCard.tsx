import React from 'react';

const BlogCard = (props: BlogCardProps) => {
    const { title, content, author } = props;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <p className="card-text">
          <small className="text-muted">Author: {author}</small>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;

interface BlogCardProps {
    title: string;
    content: string;
    author: string;
}

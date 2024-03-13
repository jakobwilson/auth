
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { POST, apiService } from '../services/api-service';

const PostBlog = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    POST('/api/blogs', {title, content})
  }


  return (
   <>
   <main className='container'>
    <section className='row justify-content-center'>
      <div className="col-12 col-md-4">
        <form className="form-group border rounded shadow p-4">
          <label htmlFor="title">Title:</label>
          <input className='mb-2 form-control' type="title" value={title} onChange={e => setTitle(e.target.value)}/>
          <label htmlFor="content">Content:</label>
          <textarea className='mb-2 form-control' value={content} onChange={e => setContent(e.target.value)} />
          <button onClick={handleClick} className='btn'>POST</button>
        </form>
    <Link className='btn' to='/'>Back</Link>
      </div>
    </section>
   </main>
   </>
  )
}

export default PostBlog;


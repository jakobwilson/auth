import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Blog } from '../types';
import { apiService } from '../services/api-service';

const Edit = () => {
    const nav = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState<Blog>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        apiService<Blog>(`/api/blogs/${id}`)
        .then((data) => {
            setBlog(data);
            setTitle(data.title);
            setContent(data.content);
        })
        .catch((errrorMessage) => alert(errrorMessage));
    }, [id]);

    const handleDelete = () => {
        apiService(`/api/blogs/${id}`, 'DELETE')
        .then(() => nav('/'))
        .catch((errorMessage) => alert(errorMessage));
    }

    const handleUpdate = () => {
        apiService(`/api/blogs/${id}`, 'PUT', {title, content})
        .then(() => nav(`/blogs/${id}`))
        .catch((errorMessage) => alert(errorMessage));
    }

    if (!blog) return <></>;

    return (
        <div className='row justify-content-center'>
            <div className="col-12 col-9">
                <div className="shadow-lg m-2 p-3 rounded-3">
                    <label>Title:</label>
                    <input value="title" onChange={e => setTitle(e.target.value)} />
                    <label>Content:</label>
                    <input value="content" onChange={e => setContent(e.target.value)} />
                    <button className='btn' onClick={handleDelete}>DELETE</button>
                    <button className='btn' onClick={handleUpdate}>Save</button>
                </div>
            </div>
        </div>
    )
    
};

export default Edit;
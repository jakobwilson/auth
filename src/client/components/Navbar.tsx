import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const [title, setTitle] = useState('Blogs')
    const loc = useLocation()
    const detailsStructure = /\/blogs\/\d+$/gm
    const editStructure = /\/blogs\/\d+\/edit$/gm 

    useEffect(() => {
        const path = loc.pathname
        if (path === '/') {
            setTitle('Home')
        } else if (path === '/login') {
            setTitle('Login')
        } else if (path === '/register') {
            setTitle('Register')
        } else if (path === '/postblog') {
            setTitle('Post')
        } else if (path.match(detailsStructure)) {
            setTitle('Blog Details')
        } else if (path.match(editStructure)) {
            setTitle('Edit Blog')
        } else {
            setTitle('Blogs')
        }
    }, [loc.pathname])

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="title">{title}</h3>
        <Link className="btn" to="/blogs">
          Blogs
        </Link>
        <Link className="btn" to="/postblog">
          Create
        </Link>
        <Link className="btn" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

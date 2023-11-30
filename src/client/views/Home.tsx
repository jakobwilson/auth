import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h3 className="title">Home Page</h3>
          <Link className="btn" to="/blogs">Blogs</Link>
          <Link className="btn" to="/login">Login</Link>
        </div>
      </nav>
      
    </>
  );
};

export default Home;

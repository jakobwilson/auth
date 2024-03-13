import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Pizza from './views/Pizza';
import NotFound from './views/NotFound';
import PrivateWrapper from './components/PrivateWrapper';
import Register from './views/Register';
import Blogs from './views/Blogs';
import PostBlog from './views/PostBlog';
import BlogDetails from './views/BlogDetails';
import Navbar from './components/Navbar';


const App = (props: AppProps) => {
	return (
	  <BrowserRouter>
	  <Navbar></Navbar>
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/register" element={<Register />} />  
		  <Route path="/blogs" element={<PrivateWrapper><Blogs /></PrivateWrapper>} />
		  <Route path="/postblog" element={<PrivateWrapper><PostBlog /></PrivateWrapper>}></Route>
		  <Route path="/blogs/:id" element={<PrivateWrapper><BlogDetails /></PrivateWrapper>}></Route>
		  <Route path="/pizza" element={<PrivateWrapper><Pizza /></PrivateWrapper>} />
		  <Route path="*" element={<NotFound />} />
		</Routes>
	  </BrowserRouter>
	);
  };
  

interface AppProps {}

export default App;

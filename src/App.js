import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import ContactUs from './ContactUs';
import Home from './Home';
import About from './About';

function App() {
  return <Router>
    <div className="header"> 
            <h1>Omega</h1>
            <h2>The best watches for you</h2>
          </div>
    <nav>
      
      <Link to = "/" className="link">Main Page</Link>
      <Link to = "/shop" className="link">Shop</Link>
      <Link to = "/contact" className="link">Contact us</Link>
    </nav>
    
    <Routes>
      <Route path = "/" element = {<About />} />
      <Route path = "/shop" element = {<Home />} />
      <Route path = "/contact" element = {<ContactUs />} />
    </Routes>
  </Router>
}

export default App;

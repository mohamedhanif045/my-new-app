// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
// import Footer from './Footer';
// import Home from './pages/Home';
// import About from './pages/About';
import './app.css'; // Ensure this is correct

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

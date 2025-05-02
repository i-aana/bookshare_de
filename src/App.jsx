import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Books from './components/BookSlider/Books';
import Books2 from './components/Books2/Books2';
// import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import AutoPanel from './components/AutoPanel/AutoPanel';
import Slider from './components/Slider/Slider';
import './stylese/custom-styles.css';
import Cart from './components/Cart/Cart'; // Make sure CartPage is created in pages/
import About from './components/About/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <hr className="hr-13" />
              <Books />
              <hr className="hr-13" />
              <AutoPanel />
              <hr className="hr-13" />
              <Books2 />
              {/* <Testimonial /> */}
              <hr className="hr-13" />
              <Footer />
            </>
          }
        />
        
        {/* Cart route */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Adjusted to match your component's file name casing
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre'; // Import the WhoWeAre page
import 'leaflet/dist/leaflet.css'; //for map 
import Products from './pages/Products/Products'; // Import the Products page
import JoinUs from './pages/JoinUs/JoinUs';  // Import the JoinUs page

const App = () => {
  return (
    <>
      {/* Main App Layout */}
      <div className='app'>
        {/* Navbar */}
        <Navbar />
        
        {/* Page Routes */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/who-we-are' element={<WhoWeAre />} /> {/* New Route */}
          <Route path="/products" element={<Products />} /> {/* New Route for Products */}
          <Route path="/join-us" element={<JoinUs />} /> {/* Add the new route */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;

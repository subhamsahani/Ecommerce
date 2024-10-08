import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'; // Assuming this is the file for the Shop page
import Category1 from './Pages/Category1/Category1'; // New route for Men's category
import Category2 from './Pages/Category2/Category2'; // New route for Women's category
import Category3 from './Pages/Category3/Category3'; // New route for Kids' category
import Abstract from './Pages/Abstract/Abstract';
import Landscape from './Pages/Landscape/Landscape';
import Product from './Pages/Product'; 
import Cart from './Pages/Cart'; // Assuming you have a Cart component
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Portrait from './Pages/Portrait/Portrait';
// import StillLife from './Pages/StillLife/StillLife';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/painting' element={<Category1 />} /> {/* Updated route for Men's category */}
          <Route path='/womens' element={<Category2 />} /> {/* Updated route for Women's category */}
          <Route path='/kids' element={<Category3 />} /> {/* Updated route for Kids' category */}
          <Route path='/painting/abstract' element={<Abstract />} /> {/* New route for Abstract category */}
          <Route path='/painting/landscape' element={<Landscape />} /> {/* New route for Landscape category */}
          <Route path='/painting/portrait' element={<Portrait/>} /> {/* New route for Landscape category */}
          {/* <Route path='/painting/stilllife' element={<StillLife/>} /> New route for Landscape category */}
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/products/:productId' element={<Product />} />
        </Routes>
        {/* Uncomment the Footer component if needed */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero'
import Products from './components/Products'
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero/>
     <Products heading = "Choose Your Favorite" data={productData}></Products>
   <Feature />
   <Products heading = "Sweet Treats for You" data={productDataTwo}></Products>
    <Footer/>
    </Router>
  );
}

export default App;

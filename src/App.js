import React from 'react'
import Categories from './components/Categories';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';



function App() {
  const [showCartList, setshowCartList] = useState(false);

  function handleShow() {
    setshowCartList(!showCartList);
  }
  return (
    <div>
      <ThemeProvider >
      <Header show={handleShow} />
      {showCartList && <Cart />}
      <Categories />
      <Products />
      <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App

import Header from './components/header';
import Footer from './components/footer';
import Categories from './components/categories';
import Products from './components/products';
import {useState} from 'react';
import Cart from './components/cart';
function App() {
  const [showCartList, setshowCartList] = useState(false)
  function handleShow(){
    setshowCartList(!showCartList);}
  return (
    <>
      <Header show={handleShow}/>
      <Categories/>
      {showCartList&&<Cart  />}
      <Products />

      <Footer />
    </>
  );
}

export default App;

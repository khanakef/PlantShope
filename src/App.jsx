import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Facilities from './component/Facilities';
import Cards from './component/Cards';
import Blogs from './component/Blogs';
import Footer from './component/Footer';
import CartSidebar from './component/Cartsidebar';
import './component/style.css';

function App({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) {
  return (
    <>
      <Header toggleCart={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Banner />
      <Facilities />
      <Cards addToCart={addToCart} />
      
      <Blogs />
      <Footer />
    </>
  );
}
export default App;

import './App.css';
import Header from './componet/Header';
import Baner from './componet/Baner';
import Facilities from './componet/Facilities';
import Cards from './componet/Cards';
import PlansList from './componet/PlansList';
import Blogs from './componet/Blogs';
import Footer from './componet/Footer';
import CartSidebar from './componet/Cartsidebar';
import './componet/style.css';

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
      <Baner />
      <Facilities />
      <Cards addToCart={addToCart} />
      
      <Blogs />
      <Footer />
    </>
  );
}
export default App;

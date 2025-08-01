
import Header from "../component/Header";
import Facilities from "../component/Facilities";
import CartSidebar from "../component/Cartsidebar";
import BlogsBanner from "../component/BlogsBanner";
import Blogs from "../component/Blogs"
import Footer from "../component/Footer";

const Blog = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <Header toggleCart={toggleCart} />
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <BlogsBanner/>
      <Facilities />
      <Blogs/>
      <Footer />
    </>
  );
};

export default Blog;

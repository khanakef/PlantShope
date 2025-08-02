
import Facilities from "../component/Facilities";
import CartSidebar from "../component/Cartsidebar";
import BlogsBanner from "../section/BlogsBanner";
import Blogs from "../section/Blogs"


const Blog = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <BlogsBanner />
      <Facilities />
      <Blogs />

    </>
  );
};

export default Blog;

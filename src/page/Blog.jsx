
import Facilities from "../component/Facilities";
import CartSidebar from "../component/Cartsidebar";
import Banner from '../section/Banner'; // adjust path if different
import Blogs from "../section/Blogs";

const BlogSlides = [
    { image: "/Images/blogbanner.png", caption: 'Rooted in Nature, Grown with Love. From Our Garden to Your Home.' },
    // { image: "/Images/pexels-cottonbro-4503732.jpg", caption: 'Fresh plants for a fresh mind' },
    // { image: "/Images/pexels-fotios-photos-1090638.jpg", caption: 'Bring greenery to your life' }
  ];

const Blog = ({ toggleCart, isCartOpen, cartItems, clearCart }) => {
  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Banner slides={BlogSlides} carouselId="BlogBanner" />
      <Facilities />
      <Blogs />

    </>
  );
};

export default Blog;

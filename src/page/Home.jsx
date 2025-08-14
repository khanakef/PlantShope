import Banner from '../section/Banner';
import Facilities from '../component/Facilities';
import Cards from '../component/Cards';
import Blogs from '../section/Blogs';
import CartSidebar from '../component/Cartsidebar';
import '../component/style.css';

const Home = ({ toggleCart, isCartOpen, cartItems, clearCart }) => {
  const homeSlides = [
    { image: "/Images/pexels-saijanani-selvarajan-759261681-33143925.jpg", caption: 'Rooted in Nature, Grown with Love. From Our Garden to Your Home.' },
    { image: "/Images/pexels-cottonbro-4503732.jpg", caption: 'Fresh plants for a fresh mind' },
    { image: "/Images/pexels-fotios-photos-1090638.jpg", caption: 'Bring greenery to your life' }
  ];

  const homeCards = [
    { img: "public/images/anthurium.jpg", alt: "anthurium", title: "Anthurium Red Plant", description: "Anthurium is a genus of about 1,000 perennial plants...", delay: "" },
    { img: "public/images/Peace.jpg", alt: "peace lily", title: "Peace Lily", description: "The peace lily (Spathiphyllum) is a tropical perennial...", delay: "200" },
    { img: "public/images/anthurium.jpg", alt: "anthurium", title: "Anthurium Red Plant", description: "Anthurium is a genus of about 1,000 perennial plants...", delay: "400" }
  ];

  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
      />
      <Banner slides={homeSlides} carouselId="homeBanner" />
      <Facilities />
      <Cards data={homeCards} />
      <Blogs />
    </>
  );
};

export default Home;

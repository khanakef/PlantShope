import CartSidebar from '../component/Cartsidebar';
import Banner from '../section/Banner'; // adjust path if different
import Checkoutdetails from '../section/Checkoutdetails';

const CheckoutSlides = [
    { image: "/Images/pexels-saijanani-selvarajan-759261681-33143925.jpg", caption: 'Rooted in Nature, Grown with Love. From Our Garden to Your Home.' },
    { image: "/Images/pexels-cottonbro-4503732.jpg", caption: 'Fresh plants for a fresh mind' },
    { image: "/Images/pexels-fotios-photos-1090638.jpg", caption: 'Bring greenery to your life' }
  ];


const Checkout = ({toggleCart, isCartOpen, cartItems, clearCart}) => {
    return (
        <>
            <CartSidebar
                isOpen={isCartOpen}
                toggleCart={toggleCart}
                cartItems={cartItems}
                clearCart={clearCart}
            />
            <Banner slides={CheckoutSlides} carouselId="CheckoutBanner" />
            <Checkoutdetails/>
        </>
    )
};
export default Checkout;
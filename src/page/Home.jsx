import Banner from '../section/Banner';
import Facilities from '../component/Facilities';
import Cards from '../component/Cards';
import Blogs from '../section/Blogs';
import CartSidebar from '../component/Cartsidebar';
import '../component/style.css';

const Home = ({isCartOpen, cartItems, addToCart, clearCart }) => {
    return (
        <>
            <CartSidebar
                isOpen={isCartOpen}
                cartItems={cartItems}
                clearCart={clearCart}
            />
            <Banner />
            <Facilities />
            <Cards addToCart={addToCart} />
            <Blogs />
        </>
    )
}
export default Home;
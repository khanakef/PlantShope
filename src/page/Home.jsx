import Banner from '../section/Banner';
import Facilities from '../component/Facilities';
import Cards from '../component/Cards';
import Blogs from '../section/Blogs';
import CartSidebar from '../component/Cartsidebar';
import '../component/style.css';

const Home = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart }) => {
    const homeCards = [
        {
            img: "public/images/anthurium.jpg",
            alt: "anthurium",
            title: "Anthurium Red Plant",
            description: "Anthurium is a genus of about 1,000 perennial plants...",
            delay: ""   
           
        },
        {
            img: "public/images/Peace.jpg",
            alt: "peace lily",
            title: "Peace Lily",
            description: "The peace lily (Spathiphyllum) is a tropical perennial...",
            delay: "200"
        },
        {
            img: "public/images/anthurium.jpg",
            alt: "anthurium",
            title: "Anthurium Red Plant",
            description: "Anthurium is a genus of about 1,000 perennial plants...",
            delay: "400"
        }
    ];

    return (
        <>
            <CartSidebar
                isOpen={isCartOpen}
                toggleCart={toggleCart}
                cartItems={cartItems}
                clearCart={clearCart}
            />
            <Banner />
            <Facilities />
            <Cards data={homeCards} />
            <Blogs />
        </>
    )
}

export default Home;

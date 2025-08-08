
import Facilities from "../component/Facilities";
import PlansList from "../component/PlansList";
import ShopBaner from "../section/ShopBaner";
import CartSidebar from "../component/Cartsidebar";
import Cards from "../component/Cards";

const Shop = ({ toggleCart, isCartOpen, cartItems, addToCart, clearCart, removeFromCart,updateQuantity  }) => {

  const handleAdd = (plant) => {
        addToCart({
            id: plant.id,
            name: plant.title,
            price: plant.price,
            quantity: 1,
            image: plant.img
        });
    };

    const plantsData = [
        {
            id: 1,
            img: "/public/Images/rose1.jpg",
            alt: "Red Rose",
            title: "RED ROSE",
            description: "Red Rose is a classic...",
            price: 399,
            delay: "fade-left"
        },
        {
            id: 2,
            img: "/public/Images/sunflow.jpg",
            alt: "Sunflower",
            title: "SUNFLOWER",
            description: "The sunflower is a tall, bright flower...",
            price: 299,
            delay: "zoom-in-up"
        },
        {
            id: 3,
            img: "/public/Images/cherry.jpg",
            alt: "Cherry Blossom",
            title: "Cherry Blossom (Sakura)",
            description: "Cherry Blossom is a delicate pink or white flower...",
            price: 499,
            delay: "fade-right"
        },
        {
            id: 1,
            img: "/public/Images/rose1.jpg",
            alt: "Red Rose",
            title: "RED ROSE",
            description: "Red Rose is a classic...",
            price: 399,
            delay: "fade-left"
        },
        {
            id: 2,
            img: "/public/Images/sunflow.jpg",
            alt: "Sunflower",
            title: "SUNFLOWER",
            description: "The sunflower is a tall, bright flower...",
            price: 299,
            delay: "zoom-in-up"
        },
        {
            id: 3,
            img: "/public/Images/cherry.jpg",
            alt: "Cherry Blossom",
            title: "Cherry Blossom (Sakura)",
            description: "Cherry Blossom is a delicate pink or white flower...",
            price: 499
           
        }
    ];


  return (
    <>
      <CartSidebar
        isOpen={isCartOpen}
        toggleCart={toggleCart}
        cartItems={cartItems}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />


      <ShopBaner/>
      <Facilities />
      <Cards data={plantsData} onButtonClick={handleAdd} />
    </>
  );
};

export default Shop;

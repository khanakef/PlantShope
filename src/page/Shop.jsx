import Baner from "../componet/Baner";
import Blogs from "../componet/Blogs";
import CartSidebar from "../componet/Cartsidebar";
import Facilities from "../componet/Facilities";
import Footer from "../componet/Footer"
import Header from "../componet/Header";
import PlansList from "../componet/PlansList";
import ShopBaner from "../componet/ShopBaner";

const Shop=()=>{
    return(
        <>
        <Header/>
        <CartSidebar/>
        <ShopBaner/>
        <Facilities/>
        <PlansList/>
        <Footer/>
        </>
    )
}
export default Shop;
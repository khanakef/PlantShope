import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componet/Header'
import Baner from './componet/Baner'
import Facilities from './componet/Facilities'
import Cards from './componet/Cards'
import Blogs from './componet/Blogs'
import Footer from './componet/Footer'
import './componet/style.css';
import CartSidebar from './componet/Cartsidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header/>

      <CartSidebar/>
      
      <Baner/>

      <Facilities/>

      <Cards/>
      
      <div id='blog'>
        <Blogs />
      </div>
      
      <Footer/>
      
    </>
  )
}

export default App;

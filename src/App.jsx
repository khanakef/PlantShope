import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componet/Header'
import Baner from './componet/Baner'
import Facilities from './componet/Facilities'
import Cards from './componet/cards'
import Blogs from './componet/Blogs'
import Footer from './componet/Footer'
import './componet/style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <Header>
      </Header>
      <br /><br />
      <Baner>
      </Baner>

      <Facilities>
      </Facilities>

      <Cards>
      </Cards>

      <Blogs>
      </Blogs>

      <Footer>
      </Footer>
      </body>
    </>
  )
}

export default App

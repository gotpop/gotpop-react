import './styles/app.css'

import { Route, Routes } from 'react-router-dom'

import { About } from '@pages/About'
import { Home } from '@pages/Home'
import { MenuProvider } from '@context/MenuContext'
import { Page404 } from '@pages/Page404'
import { Shop } from '@pages/Shop'
import { ShoppingCartProvider } from '@context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <MenuProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </MenuProvider>
    </ShoppingCartProvider>
  )
}

export default App

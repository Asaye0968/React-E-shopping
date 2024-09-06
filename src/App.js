
import React from 'react'
import ProductDetails from './Comp/ProductDetails'
import Newcollection from './Comp/Newcollection'
import All_products from './Comp/All_products/All_products'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Nav from './Comp/Nav'
import Home from './Comp/Home'
import Cart from './Comp/Cart'
import Footer from './Comp/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
<Routes>
<Route path='/' element={<Home />} />

<Route path='/Cart' element={<Cart />} />
<Route path='/All_products' element={<All_products />} />
<Route path="/product/:id" element={<ProductDetails />} /> {/* Route for product details */}

<Route path='/Newcollection' element={<Newcollection />} />
<Route path='/Cart' element={<Cart />} />

</Routes>
<All_products />
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
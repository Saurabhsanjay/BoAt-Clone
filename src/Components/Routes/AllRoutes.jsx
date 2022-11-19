import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ProductPage from '../Pages/ProductPage'

const AllRoutes = () => {
  return (
    <div>
    
      <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path=''/>
   <Route path="/dailyDeals" element={<h1>Daily Deals</h1>}/>
   <Route path="/offerZone" element={<h1>Offer zone</h1>}/>
   <Route path="/products/:id" element={<h1>SingleProductPage</h1>}/>
   <Route path="/login" element={<h1>Login</h1>}/>
   <Route path="/register" element={<h1>Register</h1>}/>
   <Route path="/cart" element={<h1>Cart</h1>}/>
   <Route path="/wishlist" element={<h1>Wishlist</h1>}/>
   <Route path="/checkout/payment" element={<h1>Checkout</h1>}/>
   <Route path="/ordersuccess" element={<h1>success</h1>}/>
   <Route path="/product" element={<ProductPage/>}/>
   

   

      </Routes>
    </div>
  )
}

export default AllRoutes

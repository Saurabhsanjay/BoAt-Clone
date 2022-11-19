import React from 'react'
import  '../../App.css'
const Blogs = () => {
  return (
    <div className='mindiv' >
      <h3 className='head'>boAt Blogs</h3>

      <div className='imagess' >
      <div>
      <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Earphone_1296x_540x_25759241-1386-4661-bec0-bad7c111178f_540x.png?v=1650620291" alt="err" /> <a className='atg'  >Earphones Buying Guide - Everything You Need To Know</a>
      </div>

      <div> 
      <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Main-banner_520x500_540x_d7c9944e-0985-498b-9a89-3a54d32c9dd2_520x.png?v=1650620307" alt="err" /> <a className='atg' >The Ultimate Smartwatch Guide - Get The World On Your Wrist</a>
      </div>

      <div>
       <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/articles/misfit_updated_600x.png?v=1661779681" alt="err" /><a className='atg'  >Have You Met #YourStyleWingman? Introducing Misfit T200 3-in-1 Grooming Kit for Men</a>
       </div>


      </div>
      <div className='btdiv' ><button className='btbt'>EXPLORE BLOGS</button></div>
    </div>
  )
}

export default Blogs

import React from 'react'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
 } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className=' buthead'>

       
        <img style={{width:"30%"}} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1600753267" alt="err" />
          <span className='subs'>Subscribe to email alerts. We promise not to spam your inbox.</span>
        <div className="footerInputDiv">
                  <input
                     type="text"
                     className="footerInput"
                     placeholder="Email Address*"
                  />
                  <button className="footerBtn">SUBSCRIBE</button>
               </div>
               <div className='icons'>
                <a><FaFacebookF/></a>
                <a><FaTwitter/></a> 
                <a><FaInstagram/></a>
                <a><FaYoutube/></a>
                <a><FaLinkedinIn/></a>
               </div>
        </div>

        <div className='shop'>
            <p>SHOP</p>
            <a >True Wireless Earbuds</a>
            <a >Wireless Headphones</a>
            <a >Wired Headphones</a>
            <a >Wireless Speakers</a>
            <a >Home Audio</a>
            <a >Mobile Accessories</a>
            <a >Smart Watches</a>
            <a >TRebel</a>
            <a >Misfit</a>
            <a >Gift Card</a>
            <a >Rock In India</a>
            <a >Earn Rs.100</a>
            
        </div>

        <div className='shop'>
            <p>HELP</p>
            <a >Track Your Order</a>
            <a >Warranty & Support</a>
            <a >Return Policy</a>
            <a >Service Centers</a>
            <a >Bulk Orders</a>
            <a >FAQs</a>
           <a >Why Buy Direct</a>
        </div>

        <div className='shop'>
             <p>COMPANY</p>
             <a >About boAt</a>
             <a >News</a>
             <a >Read Our Blog</a>
             <a >Careers</a>
             <a >Security</a>
             <a >Terms of Service</a>
             <a >Privacy Policy</a>
             <a >Investor Relations</a>
             <a >Social Responsibility</a>
             <a >Warranty Policy</a>



        </div>
       
        
      </div>
      <div className='cards'>

<div>  <img  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054" alt="err" /></div>
<div></div>
<div className='downlod'><p>DOWNLOAD THE APP</p></div>
<div><img  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293" alt="err" /></div>
<div><img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293" alt="err" /></div>
</div>
 <p className='Alr'>© 2022 Imagine Marketing Limited. All Rights Reserved.</p>

    </div>
  )
}

export default Footer

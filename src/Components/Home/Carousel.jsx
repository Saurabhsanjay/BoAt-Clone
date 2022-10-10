import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const CarouselDiv = () => {
   return (
      <Carousel className="carousel"
         autoPlay="true"
         infiniteLoop="true"
         interval="2000"
         showThumbs=""
      >
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/banner-shop-now_2_1400x.gif?v=1661324429"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit-2_1_1400x.png?v=1661518500"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Savings-Round-The-Clock_wbann_2000x.jpg?v=1651128820"
               alt=""
            />
         </div>
         <div>
            <img
               src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD500_anc_wbann_2000x.jpg?v=1649855267"
               alt=""
            />
         </div>
      </Carousel>
   );
};

export default Carousel;

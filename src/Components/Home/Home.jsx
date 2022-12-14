import React from 'react'
import  '../../App.css'
import { useContext } from 'react';
import AppContext from '../Context/AppContext';
import Footer from './Footer';
import BestSeller from './BestSeller';
import { CarouselDiv } from "./Carousel";
import Trimmer from './Trimmer';
import Marvel from './Marvel';
import Blogs from './Blogs';
import AboutSay from './AboutSay';
import Awards from './Awards';
import BrandPRomise from './BrandPRomise';
import ShopbyCategories from './ShopbyCategories';
import { ChakraProvider } from '@chakra-ui/react';





const Home = () => {

    const {AllData} = useContext(AppContext)
console.log(AllData);
  return (
    <div>
      <CarouselDiv/>
      <BestSeller data={AllData.bestseller} Text={"Best Seller"} />
     <ChakraProvider>

      <ShopbyCategories/>
     </ChakraProvider>

      <BestSeller data={AllData.dailydeals} Text={"Daily Deals"} />
     <Trimmer  data={AllData.Trimmer}/>
      <BestSeller data={AllData.SmartWatches} Text={"Smart Watches"} />
      <Marvel data={AllData}  Text={" boAt | Superheroes"}/>
      {/* <Footer/> */}
      <Blogs/>
      <AboutSay/>
      <Awards/>
      <BrandPRomise/>
    </div>
  )
 
}

export default Home

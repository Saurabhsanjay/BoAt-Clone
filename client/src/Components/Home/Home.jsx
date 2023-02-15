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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../redux/product/product.action';





const Home = () => {
  const dispatch=useDispatch()
  const {products,loading,error}=useSelector((state)=>state.products)

  useEffect(()=>{
    dispatch(fetchData());
  },[])
 

    const {AllData} = useContext(AppContext)
console.log(AllData);
 if (loading) {
   return <div>Loading....</div>;
 }
 console.log(products[0]?.bestseller, "products");
  return (
    <div>
      <CarouselDiv />
      <BestSeller data={products[0]?.bestseller} Text={"Best Seller"} />
      <ChakraProvider>
        <ShopbyCategories />
      </ChakraProvider>

      <BestSeller data={products[0]?.dailydeals} Text={"Daily Deals"} />
      <Trimmer data={products[0]?.Trimmer} />
      <BestSeller data={products[0]?.SmartWatches} Text={"Smart Watches"} />
      <Marvel data={products && products[0]} Text={" boAt | Superheroes"} /> 
      {/* {/* <Footer/> */}
      <Blogs />
      <AboutSay />
      <Awards />
      <BrandPRomise />
    </div>
  );
 
}

export default Home

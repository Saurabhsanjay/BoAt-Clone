import React from 'react'
import  '../../App.css'

import BestSeller from './BestSeller';
import { CarouselDiv } from "./Carousel";
import Trimmer from './Trimmer';
import Marvel from './Marvel';
import Blogs from './Blogs';
import AboutSay from './AboutSay';
import Awards from './Awards';
import BrandPRomise from './BrandPRomise';
import ShopbyCategories from './ShopbyCategories';
import { ChakraProvider, HStack, Image } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../redux/product/product.action';
import { cartData} from '../../redux/cart/cart.action';
import loader from "../images/final_loader.gif";




const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(cartData(id));
    dispatch(fetchData());
  }, [dispatch]);

  if(loading){
    return (
      <HStack justifyContent={'center'} alignItems='center'  w='100%'>
        <Image width="80px"  src={loader} alt="" />
      </HStack>
    )
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

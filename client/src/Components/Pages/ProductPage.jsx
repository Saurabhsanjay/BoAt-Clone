import React, { useEffect } from 'react'
import { ChakraProvider, CircularProgress, Divider, Flex, HStack, Image, Select, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css";
import '../Pages/ProductPage.css'

import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/product/product.action';
import { postCartData } from '../../redux/cart/cart.action';
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const ProductPage = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const { username } = useSelector((state) => state.user);
     
    useEffect(() => {
      dispatch(fetchData());
      Aos.init({ duration: 2000 });
    }, []);
 
    
  
  const Navigate = useNavigate();
  const handleNeedtoLoginfirst = () => {
    toast.error("You need to Login First", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      Navigate("/login");
    }, 1000);
  };
  const handleAddedtoCart = () => {
    toast.success("Added To Cart", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const addTocart = (el) => {
    dispatch(
      postCartData(
        { username, ...el },
        handleNeedtoLoginfirst,
        handleAddedtoCart
      )
    );
    console.log({ username, ...el });
  };
    if (loading) {
      return (
        <CircularProgress
          isIndeterminate
          color="red"
          thickness={0.2}
        ></CircularProgress>
      );
    }

  return (
    <>
      <ChakraProvider>
        <Text bg={"gray.200"} fontSize={"1.5rem"} padding="10px 20px">
          Wireless Earbuds
        </Text>
        <Divider />
        <HStack padding="10px 45px" bg={"gray.200"}>
          {" "}
          <Spacer />
          <Text
            fontWeight="bold"
            fontSize={{ base: "7px", md: "10px", lg: "16px" }}
          >
            Sort By - &nbsp;
          </Text>
          <Select
            // onChange={(e) => Sort(e.target.value)}
            borderColor={"gray.500"}
            borderRadius={{ base: "full", sm: "full" }}
            size={{ base: "sm", sm: "sm" }}
            w={{ base: "100px", sm: "150px" }}
          >
            {/* <option>High to Low</option>
            <option>Low To high</option> */}
            <option>a to z</option>
            <option>z to a</option>
          </Select>
        </HStack>
      </ChakraProvider>
      <div>
        <div className="Apple">
          {products[1]?.wireless?.map((el, i) => {
            return (
              <div key={i}>
                <div className="insidediv">
                  <img
                    className="zoom"
                    style={{ width: "100%" }}
                    src={el.image}
                    width="100%"
                  />
                  <div className="textdiv">
                    <p className="heading">{el.name}</p>
                    <span className="star">
                      {" "}
                      <span style={{ color: "red" }}>★</span> {el.ratings}
                    </span>
                    <hr />
                    <span className="price">
                      ₹ {el.originalprice}{" "}
                      <del className="dell">₹ {el.cutprice}</del>
                    </span>
                    <p className="save">{el.savings}</p>
                    <button
                      onClick={() => addTocart(el)}
                      style={{
                        backgroundColor: i % 2 ? "red" : "yellow",
                        color: i % 2 ? "white" : "black",
                      }}
                      className="but"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr style={{ color: "white", marginTop: "10px" }} />
    </>
  );
}

export default ProductPage



// </Flex>
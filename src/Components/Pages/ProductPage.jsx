import React, { useEffect } from 'react'
import { background, Box, Button, ChakraProvider, Divider, Flex, HStack, Image, Select, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import Aos from "aos";
import "aos/dist/aos.css";
import '../Pages/ProductPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HoverImage from "react-hover-image";
const productdata = {
  "wireless": [
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_300x.png?v=1642405569",
      "name": "Airdopes 131",

      "ratings": "4.8 | 1244 reviews",

      "savings": "You Save: ₹ 1991 (67%)",
      "cutprice": "₹ 2,990",
      "originalprice": " ₹ 999"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/pink_93d7a9ed-186f-4081-a184-bad918274e7b_300x.png?v=1658994528",
      "name": "TRebel Airdopes 131",

      "ratings": "4.7 | 55 reviews",

      "savings": "You Save: ₹ 1691 (57%)",
      "cutprice": "₹ 2,990",
      "originalprice": "  ₹ 1,299"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/grey_300x.png?v=1668599490",
      "name": "Airdopes 141",

      "ratings": "4.9 | 526 reviews",

      "savings": "You Save: ₹ 3141 (70%)",
      "cutprice": "₹ 4,490",
      "originalprice": "  ₹ 1,349"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/3c53a1e3-bffe-4c6d-b102-cc409c1bfe71_600x.png?v=1625045117",
      "name": "TRebel Airdopes 141",

      "ratings": "5.0 | 61 reviews",

      "savings": "You Save: ₹ 2991 (67%)",
      "cutprice": "₹ 4,490",
      "originalprice": "  ₹ 1,499"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/Blue_0b68b413-f3ee-4c92-84bc-ba9cd6665463_300x.png?v=1657775058",
      "name": "Airdopes 131 PRO",

      "ratings": "5.0 | 94 reviews",

      "savings": "You Save: ₹ 1491 (50%)",
      "cutprice": "₹ 2,990",
      "originalprice": "  ₹ 1,499"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main3_9230f72d-9f86-4aec-9ae2-a7d87d332877_300x.png?v=1647426798",
      "name": "Airdopes 411 ANC",

      "ratings": "4.9 | 65 reviews",

      "savings": "You Save: ₹ 2491 (50%)",
      "cutprice": "₹ 4,990",
      "originalprice": "  ₹ 2,499"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/iiolo_300x.png?v=1658150489",
      "name": "Airdopes 121 PRO",

      "ratings": "4.9 | 37 reviews",

      "savings": "You Save: ₹ 1491 (50%)",
      "cutprice": "₹ 2,990",
      "originalprice": "  ₹ 1,499"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/airdopes-121-v2-black_300x.png?v=1612765376",
      "name": "Airdopes 121 v2",

      "ratings": "   4.8 | 540 reviews",

      "savings": "You Save: ₹ 1700 (57%)",
      "cutprice": "₹ 2,999",
      "originalprice": "  ₹ 1,299"
    },
    {
      "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/115-main1_300x.png?v=1655368638",
      "name": "Airdopes 115",

      "ratings": "4.9 | 78 reviews",

      "savings": "You Save: ₹ 1391 (47%)",
      "cutprice": "₹ 2,990",
      "originalprice": "  ₹ 1,599"
    }
  ]
}
const ProductPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])


  const [data, setData] = useState(productdata.wireless)

  const Sort = (e) => {



    if (e == 'a to z') {

      let New = productdata.wireless.sort((a, b) => a.name > b.name ? 1 : -1)
      console.log(New)
      setData([...New])
    }

    if (e == 'z to a') {

      let New = productdata.wireless.sort((a, b) => b.name < a.name ? -1 : 1)
      console.log(New)
      setData([...New])
    }



    //High to Low
    //Low To high
    //a to z
    //z to a

  }
  const Navigate = useNavigate()
  return (
    <>
      <ChakraProvider>

        <Text bg={'gray.200'} fontSize={'1.5rem'} padding='10px 20px'   >Wireless Earbuds</Text>
        <Divider />
        <HStack padding='10px 45px' bg={'gray.200'}> <Spacer /><Text fontWeight="bold"
          fontSize={{ base: "7px", md: "10px", lg: "16px" }}>Sort By - &nbsp;</Text>
          <Select onChange={(e) => Sort(e.target.value)} borderColor={'gray.500'}
            borderRadius={{ base: "full", sm: "full" }} size={{ base: "sm", sm: "sm" }} w={{ base: "100px", sm: "150px" }} >
            <option>High to Low</option>
            <option>Low To high</option>
            <option>a to z</option>
            <option>z to a</option>
          </Select>
        </HStack>
        </ChakraProvider>
        <div >
    
      <div className='Apple' >
      {  productdata.wireless.map((el,i)=>{
            return(
                <>
                    
                <div  key={el.id}  className='insidediv' >
                <img className='zoom' style={{width:"100%"}} src={el.image}  width="100%" />
                <div    className='textdiv' >
                <p className='heading'  >{el.name}</p> 
                <span  className='star' > <span style={{color:"red"}}>★</span> {el.ratings}</span> 
                <hr />
                <span className='price' >₹ {el.originalprice} <del className='dell' >₹ {el.cutprice}</del></span> 
                <p className='save'>{el.savings}</p>
                <button style={{ backgroundColor:i%2 ?"red":"yellow",color:i%2 ?"white":"black"}} className='but' >ADD TO CART</button>
                </div>
                </div>
               
                </>
            )
        })}
      </div>
    </div>
    <hr  style={{color:"white",marginTop:"10px"}}/>
    </>
  )
}

export default ProductPage



// </Flex>
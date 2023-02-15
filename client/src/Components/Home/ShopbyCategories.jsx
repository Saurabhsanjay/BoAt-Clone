// background: rgb(255,255,255);
// background: linear-gradient(180deg, rgba(255,255,255,1) 47%, rgba(231,231,231,1) 47%);

import { Box, Button, ChakraProvider, Divider, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const ShopbyCategoriesdata={
    categoriesimages:[
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A175Packaging.1805_1300x_ac940c96-a741-4051-b35a-5a4cb422b95f_small.png?v=1664699303",
    "name":"AIRDOPES TRUE WIRELESS EARPHONES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-1_new_small.png?v=1663305252",
    "name":"ROCKERZ NECKBANDS"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_new_small.png?v=1663305235",
    "name":"ROCKERZ HEADPHONES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_new_small.png?v=1663305091",
     "name":"BASSHEADS WIRED EARPHONES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_ea55ea05-113b-4ca2-b415-736c2739cc59_small.png?v=1662976773",
     "name":"BASSHEADS WIRED HEADPHONES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/trebel_cat_small.png?v=1664449979",
    "name":"TRebel RANGE"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/limited_editions_small.png?v=1664450066",
    "name":"LIMITED EDITION"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_481c8210-c7cf-48af-b767-ad5529e5e1f9_small.png?v=1663838944",
    "name":"IMMORTAL GAMING HEADPHONES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/smartwatches_new_ee36456a-ebda-49f9-9c08-b681ec622b02_small.png?v=1663838446",
    
    "name":"SMART WATCHES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_bd8976ab-837d-454a-8e12-53b3c38d79f2_small.png?v=1663838883",
    "name":"STONE SPEAKERS"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/home_audio_small.png?v=1663305152",
    "name":"AAVANTE HOME AUDIO"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_new_small.png?v=1663305202",
    "name":"CHARGERS"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_small.png?v=1662980890",
    "name":"MOBILE ACCESSORIES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_small.png?v=1662980928",
    "name":"CAR ACCESSORIES"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_57157db1-8a35-4db2-97ad-69cb09db3097_small.png?v=1663838502",
    "name":"MISFIT TRIMMERS"
    },
    {
    "image":"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_A_icon_white_small.png?v=1664455792",
    "name":"View All"
    }
    ]
    
    }

const ShopbyCategories = () => {
  const Navigate=useNavigate()
  return (
   <>
  

           <Text fontSize={'2rem'} p={10} textAlign='center' color={'white'}>Shop By Categories</Text>
            <SimpleGrid alignSelf='center' textAlign='center' columns={{base:"3",md:4,lg:"8"}} justifyContent='center' alignItems='center' margin={'auto'}  >
        { 
            ShopbyCategoriesdata?.categoriesimages?.map((el)=>
                <VStack  textAlign='center'
                       mb={7}>
                    <Image cursor={'pointer'} onClick={()=>Navigate('/product')} w={{base:"40%",md:"60%"}} src={el.image} />
                    <Text  mt={2} textAlign='center' fontSize={{base:"7px",md:"11px"}} color={"gray.200"} > {el.name}</Text>
                </VStack>
            )
        }
            </SimpleGrid>
   
   </>
    )
  
}

export default ShopbyCategories

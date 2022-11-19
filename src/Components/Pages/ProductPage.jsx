import React from 'react'
import { Box, Button, ChakraProvider, Divider, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

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
            "image": "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/white_0c484c51-8b11-487b-bd27-c31b09780700_300x.png?v=1648723865",
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


    return (
        <>
        <ChakraProvider>
        <SimpleGrid  columns={{base:"2",md:2,lg:4}}
bg="#edf3f8"
_dark={{
  bg: "#3e3e3e",
}}
p={50}
w="full"
alignItems="center"
justifyContent="center"
>
            {
                productdata.wireless.map((el) => 
                <Box mb={5}
  maxW="xs"
  mx="auto"
  bg="white"
  _dark={{
    bg: "gray.800",
  }}
  shadow="lg"
  rounded="lg"
>
  <VStack px={1} py={1} >
  <Image w={"70%"}
    h={48}
  
    fit="cover"
    mt={1}
    src={el.image}
    alt="Boat"
  />
 <Divider/>
    <Text as='h1'
      color="gray.800"
      _dark={{
        color: "white",
      }}
      fontWeight="bold"
      fontSize={{base:"7px",md:"10px",lg:"16px"}}
      textTransform="PascalCase"
    >
      {el.name}
    </Text>
    <Text as='p'
      mt={1}
      fontSize="sm"
      color="gray.600"
      _dark={{
        color: "gray.400",
      }}
    >
    <span style={{color:"red"}}>★</span> {el.ratings} <br />
      {el.savings}
      
    </Text>
  </VStack>

  
  <Flex
    alignItems="center"
    justifyContent="space-between"
    px={4}
    py={2}
    bg="gray.900"
    roundedBottom="lg"
  >
    <Text display='flex' as='h1' color="white" fontWeight="bold" fontSize="sm" >
    {el.originalprice} &nbsp; <Text marginTop={{base:'',sm:"2px"}} fontWeight="light"  fontSize="xs" as='del'>{el.cutprice} </Text> 
    </Text>
  
    <Button size={{base:"xs",md:"sm"}}
      // px={1}
      // py={1} 
      ml={2}
      bg="#FF0000"
      fontSize="xs"
      color="white"
     
      rounded="lg"
      textTransform="uppercase"
      _hover={{
        bg: "gray.200",
        color:"black"
      }}
      _focus={{
        bg: "gray.400",
      }}
    >
      Add to cart
    </Button>
  </Flex>
</Box>
                
                )
            }
            </SimpleGrid>
            </ChakraProvider>
        </>
    )
}

export default ProductPage



// </Flex>
import { Box, Button, Center, ChakraProvider, Divider, HStack, Image, SimpleGrid, Spacer, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
const SingleProductPage = () => {
    const images = [{
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/616b4ead-bbd9-4a16-aeab-8d331a16f697_600x.png?v=1642405569"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/ad131FIAD131TypeC_604a6a30-a93d-4b5e-8de4-b7bc602dcf2c_700x.jpg?v=1655462913"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/FeatureImagesAD131IWP_9ce42459-c38d-4768-bf89-f88498408ac9_700x.jpg?v=1655462913"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/FeatureImagesAD1314XCharge_0a36231e-c736-43da-af3d-d582bb8096c0_700x.jpg?v=1655462913"
    }, {
        img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/FeatureImagesAD131BV5.0_3eae02c7-f2d3-499d-a073-2dc10a4696ec_700x.jpg?v=1655462913"
    }]
    const [sliderdata, setsliderdata] = useState(images[0])
    const handleClick = (i) => {

        const slider = images[i]
        setsliderdata(slider)
    }
    let threedigitsrandom = Math.floor(100 + Math.random() * 900)
    return (
        <ChakraProvider>
            <>




                <HStack spacing={10} p={{ base: 15, md: 30 }} flexDirection={{ base: "row", sm: "row" }} bg={'gray.200'} >



                    <Box display={{ base: "none", md: "block" }} flexDirection='row' >
                        {images.map((el, i) =>
                            <Image key={i} onClick={() => handleClick(i)} p={1} border='1px solid gray' borderRadius='5px' mb={2} width='150px' src={el.img} />
                        )}
                    </Box>




                    <Box marginRight={'20px'} >
                        <Image borderRadius={3} w={600} src={sliderdata.img} /> </Box>

                    <Stack gap={2}   >
                        <Text textAlign='start' as={'h1'} fontWeight={'bold'} fontSize={{ base: "1.1rem", sm: "1.2rem" }}>boAt Airdopes 131 | Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers and IWP Technology, 650mah C type Charging Case</Text>
                        <Text display='flex'> <span style={{ color: "green" }}>★</span> 4.8 | 1244 reviews
                            <Text margin={1}><BsFillPatchCheckFill style={{
                                color: "green"
                            }} /> </Text> </Text>
                        <Text fontWeight={'semibold'} color="red" fontSize={{ base: "10px", sm: "14px", md: "24px" }} >⚡ ₹ 1,099 &nbsp; <Text as={'del'} color='black' fontSize={{ base: "8px", sm: "10px", md: "18px" }}  >₹ 2,990</Text> </Text>
                        <Box  >
                            <Text color={'green'}>You Save: ₹ 1,891 (63%) &nbsp; <span style={{ color: "black" }} color='black'>Inclusive of all taxes</span> </Text>

                            <Box mt={2} borderRadius={{ base: "3px", md: "10px" }} p={1} width={'fit-content'} bg={'gray.300'}>
                                <Text fontWeight={'bold'} color={'green'} >In Stock &nbsp; <span
                                    style={{ color: "#e53e3e", fontWeight: "lighter" }}>Currently in {threedigitsrandom} carts</span> </Text> </Box>
                        </Box>
                        <Box display={'flex'}>

                            <Button colorScheme='red' w={'xs'} borderRadius={'10px'} >Add To Cart</Button>

                        </Box>
                    </Stack>




                </HStack>
                <Center m={'auto'} gap={3} padding='10px 10px' display={{ base: "flex", md: "none" }} w={'full'} bg={'gray.200'} >
                    {images.map((el, i) =>
                        <Image key={i} onClick={() => handleClick(i)} border='1px solid gray' borderRadius='5px' width={{ base: "60px", md: "100px" }} src={el.img} />
                    )}
                </Center>
                <Divider />
                <SimpleGrid padding={{ base: "0px 20px", md: "0px 40px", lg: "0px 60px" }} columns={4} bg={'gray.200'}>
                    <HStack>
                        <Image w={{ base: "20px", sm: "40px", md: "50px" }} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-1b.png?v=1654855622' />
                        <Text>

                            1 Year Warranty</Text></HStack>
                    <HStack> <Image w={{ base: "20px", sm: "40px", md: "50px" }} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-3b.png?v=1654855622' />
                        <Text>
                        7 Days Replacement</Text> </HStack>
                    <HStack>  <Image w={{ base: "20px", sm: "40px", md: "50px" }} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-2b.png?v=1654855622' />
                        <Text>

                            Free Shipping</Text> </HStack>
                    <HStack>  <Image w={{ base: "20px", sm: "40px", md: "50px" }} src='https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-4b.png?v=1654855622' />
                        <Text>
                            Secure Checkout</Text> </HStack>
                </SimpleGrid>
            </>
        </ChakraProvider>
    )
}

export default SingleProductPage

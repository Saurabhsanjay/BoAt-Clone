import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../redux/cart/cart.action";


export const Cart = () => {
    const {cart,loading,error}=useSelector((state)=>state.cart)
    const {id}=useSelector((state)=>state.user)
const dispatch=useDispatch()

    useEffect(()=>{
dispatch(cartData(id))

    },[])
    return(
      <ChakraProvider>
    <Box
      bgColor={"white"}
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart (3 items)
          </Heading>

          <Stack spacing="6">
            {/* {cartData.map((item) => (
            <CartItem key={item.id} {...item} />
          ))} */}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {/* <CartOrderSummary /> */}
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  </ChakraProvider>
    )
}

  
 
   


import {
  Box,
  Button,
  ChakraProvider,
  CircularProgress,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartData } from "../../redux/cart/cart.action";
import { CartItem } from "./CartItem";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};
export const Cart = () => {
    const {cart,loading,error}=useSelector((state)=>state.cart)
    const {id}=useSelector((state)=>state.user)
    console.log(cart?.cart?.length,"cartdata")
const dispatch=useDispatch()

    useEffect(()=>{
dispatch(cartData(id))

    },[])
const shippingCost = 87.58;

    const subtotal = cart?.cart?.reduce((acc, it) => {
      return acc + +it.price;
    }, 0);
    

const total = subtotal + shippingCost;
    if(loading){
        return (
          <CircularProgress
            isIndeterminate
            color="red"
            thickness={0.2}
          ></CircularProgress>
        );
    }
    return (
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
                Shopping Cart ({cart?.cart?.length})
              </Heading>

              <Stack spacing="6">
                {cart?.cart?.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Stack>
            </Stack>

            <Flex direction="column" align="center" flex="1">
              <Stack
                spacing="8"
                borderWidth="1px"
                rounded="lg"
                padding="8"
                width="full"
              >
                <Heading size="md">Order Summary</Heading>

                <Stack spacing="6">
                  <OrderSummaryItem label="Subtotal" value={subtotal + "/-"} />
                  <OrderSummaryItem
                    label="Shipping + Tax"
                    value={shippingCost + "/-"}
                  >
                    <Link href="#" textDecor="underline"></Link>
                  </OrderSummaryItem>
                  <OrderSummaryItem label="Coupon Code">
                    <Link href="#" textDecor="underline">
                      Add coupon code
                    </Link>
                  </OrderSummaryItem>
                  <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                      Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                      {total} /-
                    </Text>
                  </Flex>
                </Stack>
                <Button
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  rightIcon={<FaArrowRight />}
                >
                  Checkout
                </Button>
              </Stack>
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link color={mode("blue.500", "blue.200")}>
                  Continue shopping
                </Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      </ChakraProvider>
    );
}

  
 
   


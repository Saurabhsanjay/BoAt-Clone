import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  ChakraProvider,
  InputRightElement,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { BsFacebook } from "react-icons/bs";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { action_signup } from "../../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
const Signup = () => {
    const {loading}=useSelector((state)=>state.user)
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [signup, Setsignup] = useState({});
  const Navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    Setsignup({
      ...signup,
      [name]: value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(action_signup(signup, handleSignupSuccess, handlesignupError));
  };

  const handleSignupSuccess = (message) => {
    // Navigate("/");
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
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

  const handlesignupError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  ;
  };
  return (
    <>
     

      <ChakraProvider>
        <Flex
          minH={"100vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Sign Up </Heading>
              <Text fontSize={"lg"} color={"gray.600"}>
                Please enter your Name e-mail and password
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <Box
                  gap={3}
                  style={{ fontSize: "2rem" }}
                  alignItems={"center"}
                  justifyContent="center"
                  display={"flex"}
                >
                  <FcGoogle style={{ cursor: "pointer" }} />
                  <BsFacebook style={{ cursor: "pointer", color: "#3b5998" }} />
                </Box>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text" name="username" onChange={handleChange} />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" onChange={handleChange} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Link color={"red.400"}>Forgot password?</Link>
                  </Stack>
                  <Button
                    isLoading={loading}
                    loadingText="Please Wait"
                    onClick={handleSumbit}
                    bg={"red.500"}
                    colorScheme={"red"}
                    _hover={{
                      bg: "red.400",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Signup;

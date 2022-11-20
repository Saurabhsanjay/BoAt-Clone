import React from 'react'
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
    useColorModeValue,InputGroup,
    ChakraProvider,InputRightElement,
  } from '@chakra-ui/react';
  import { FcGoogle } from 'react-icons/fc';
  
  import { BsFacebook } from 'react-icons/bs';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {auth,provider} from './config';
  import {signInWithPopup} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
  const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value,setvalue]=useState('')
    const HandleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
           setvalue(data.user.email)
           localStorage.setItem("email",data.user.email)
        })
    }


    useEffect(()=>{
        setvalue(localStorage.getItem('email'))
    },[])

    const Navigate=useNavigate()
  return (
    <ChakraProvider>
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'}>Sign in </Heading>
        <Text fontSize={'lg'} color={'gray.600'}>
          Please enter your e-mail and password
        </Text>
        
      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
        <Box gap={3} style={{fontSize:"2rem"}} alignItems={'center'} justifyContent='center' display={'flex'}>

       {value? Navigate('/') : <FcGoogle onClick={HandleClick} style={{cursor:"pointer"}} />}
        <BsFacebook style={{cursor:"pointer",color:"#3b5998"}}  />
         </Box>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'red.400'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'red.500'}
              colorScheme={'red'}
              _hover={{
                bg: 'red.400',
              }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  </ChakraProvider>
  )
}

export default Login

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  ChakraProvider,
  Image,
  HStack,
  Input,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import React from 'react'

import logo from './images/logo.jpg'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { action_logout } from '../redux/user/user.action';
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { cart, loading, error } = useSelector((state) => state.cart);
    console.log(cart?.cart?.length,"nvbar");
  const Navigate=useNavigate()
 
  const dispatch=useDispatch();
  const {username}=useSelector((state)=>state.user)

  const handleclear=()=>{
  dispatch(action_logout(handleLogutSuccess))
  
   }
    const handleLogutSuccess = () => {
      toast.error("Logout Successfull!", {
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

  const { isOpen, onToggle } = useDisclosure();
  const DesktopNav = () => {
   
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    
    
    return (
      <Stack  direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={'whiteAlpha.800'}
                  _hover={{
                    textDecoration: 'none',
                    color: 'whiteAlpha.800',
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4} 
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  const NAV_ITEMS = [
    {
      label: 'Categories',
      children: [
        {
          label: 'Airpdopes True Wireless',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'SmartWatches',
          subLabel: 'Best Designes',
          href: '#',
        },
      ],
    },
    {
      label: 'Daily Deals',
      href: '#',
    },
    {
      label: 'Shop',
      href: '#',
    },
    {
      label: 'More',
      href: '#',
    },
  ];
  return (
    <ChakraProvider>
      <Box>
        <Flex
          bg={useColorModeValue("blackAlpha", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"40px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon color={"white"} w={8} h={8} />
                ) : (
                  <HamburgerIcon color={"white"} w={8} h={8} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              // textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
            >
              <Image
                p={0}
                color="white"
                w={{ base: "50px", sm: "60px", md: "80px" }}
                src={logo}
              />
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <HStack>
            {" "}
            <Input />{" "}
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {username ? (
              <>
                {" "}
                <Text
                  ml={3}
                  fontSize={"0.8rem"}
                  fontWeight={"semibold"}
                  textAlign={"center"}
                  color={"white"}
                >
                  {username}
                </Text>{" "}
                <Button
                  onClick={handleclear}
                  colorScheme={"red"}
                  size={"sm"}
                  px={5}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  ml={{ base: "10px" }}
                  padding="2px 10px"
                  color={"white"}
                  bg={"red.500"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/login"}
                  onClick={() => Navigate("/login")}
                >
                  Sign In
                </Button>
                <Button
                  display={{ base: "inline-flex", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={400}
                  color={"white"}
                  bg={"red.500"}
                  href={"/signup"}
                  onClick={() => Navigate("/signup")}
                  _hover={{
                    bg: "red.300",
                  }}
                >
                  Sign Up
                </Button>{" "}
              </>
            )}
          </Stack>

          <chakra.span
            pos="relative"
            display="inline-block"
            onClick={() => Navigate("/cart")}
            cursor={"pointer"}
          >
            <Icon
              ml={3}
              color="whiteAlpha.800"
              boxSize={8}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </Icon>
            <chakra.span
              pos="absolute"
              top="-1px"
              right="-1px"
              px={2}
              py={1}
              fontSize="xs"
              fontWeight="bold"
              lineHeight="none"
              color="red.100"
              transform="translate(50%,-50%)"
              bg="red.600"
              rounded="full"
            >
              {cart?.cart?.length}
            </chakra.span>
          </chakra.span>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </ChakraProvider>
  );

          }

export default Navbar

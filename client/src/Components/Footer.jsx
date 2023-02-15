import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import logo from './images/logo.jpg'


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

 function Footer() {
  return (
    
    <Box
      bg={useColorModeValue('BlackAlpha 700', 'gray.900')}
      color={useColorModeValue('gray.300', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          columns={{base:"2",sm:"4"}}
          spacing={8}>

          <Stack spacing={6}>
            <Box>
              <Image borderRadius={4} w={{base:50,sm:100}} src={logo}/> 
            </Box>
            <Text fontSize={'sm'}>
            © 2022 Imagine Marketing Limited. All Rights Reserved.
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader >Shop</ListHeader>
            <Link  >True Wireless Earbuds</Link>
            <Link >Wired Headphones</Link>
            <Link >Home Audio</Link>
            <Link >Misfit</Link>
            <Link >Rock In India</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link >Help Center</Link>
            <Link >Terms of Service</Link>
            <Link >Legal</Link>
            <Link >Privacy Policy</Link>
            <Link >FAQs</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Help</ListHeader>
            <Link >Track Your Order</Link>
            <Link >Return Policy</Link>
            <Link >Bulk Orders</Link>
            <Link >Why Buy Direct</Link>
            <Link >Service Centers</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('whiteAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('red.500', 'red.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'red.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
export default Footer
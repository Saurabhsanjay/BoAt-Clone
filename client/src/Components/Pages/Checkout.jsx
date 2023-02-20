import { Box, Divider,chakra, GridItem,Button,FormControl,FormLabel,Input,ChakraProvider,Text,Select,Stack, Heading, SimpleGrid, Image } from '@chakra-ui/react';
import React from 'react'
import image from "../images/Option_6.webp";
const Checkout = () => {
  return (
    <ChakraProvider>
      <Box
        bg="#edf3f8"
        _dark={{
          bg: "#111",
        }}
        p={10}
      >
      

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        <Box mt={[10, 0]}>
          <SimpleGrid
            display={{
              base: "initial",
              md: "grid",
            }}
            columns={{
              md: 3,
            }}
            spacing={{
              md: 6,
            }}
          >
            <GridItem
              colSpan={{
                md: 1,
              }}
            >
              <Box px={[4, 0]}>
                <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                  Order Details
                </Heading>
              <Image borderRadius={5} src={image} alt='boat-image' loading='lazy'/>
                <Text
                  mt={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  Enter a permanent address where you can receive Order.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              mt={[5, null, 0]}
              colSpan={{
                md: 2,
              }}
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        First name
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Last name
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Email address
                      </FormLabel>
                      <Input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="country"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Country / Region
                      </FormLabel>
                      <Select
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Select option"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </Select>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Street address
                      </FormLabel>
                      <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                      <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        City
                      </FormLabel>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        State / Province
                      </FormLabel>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        ZIP / Postal
                      </FormLabel>
                      <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button px={10}
                    type="submit"
                  colorScheme={'red'}
                  fontWeight='light'
                  >
                    Continue 
                  </Button>
                </Box>
              </chakra.form>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Divider
          my="5"
          borderColor="gray.300"
          _dark={{
            borderColor: "whiteAlpha.300",
          }}
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        />

        
      </Box>
      ;
    </ChakraProvider>
  );
}

export default Checkout

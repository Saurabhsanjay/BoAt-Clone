import { Badge, Box, Button, CloseButton, Divider, Flex, HStack, Icon, Image, Link, Select, SelectProps, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { BsFillGiftFill } from 'react-icons/bs'




const QuantitySelect = () => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
     
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = ({item}) => {
console.log(item)
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={item.image}
          alt={item.a}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{item.a}</Text>
            <Text color={"gray.600"} fontSize="sm">
              {item.save}
            </Text>
          </Stack>

          <HStack spacing="1" mt="3" color={"gray.600"}>
            <Icon as={BsFillGiftFill} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        </Box>
      </Stack>

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        {/* <PriceTag price={price} currency={currency} />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={onClickDelete} /> */}
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Button  size='sm' colorScheme={'red'}>
          Delete
        </Button>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        /> */}
        <HStack spacing="1">
          <Text
            as="span"
            fontWeight="medium"
            color={"blackAlpha.500"}
            textDecoration="line-through"
          >
            ₹ {item.price}
          </Text>

          <Text as="span" fontWeight="semibold" color={"gray.800"}>
            ₹ {item.price - 200}
          </Text>
        </HStack>
      </Flex>
      
    </Flex>
  );
}
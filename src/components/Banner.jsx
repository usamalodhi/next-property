import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} />
    <Box p='5'>
      <Text fontSize='sm' fontWeight='bold'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3'>
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize='xl' bg='brand.secondary' color='brand.primary'>
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

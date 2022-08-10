import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex h='100vh' direction='column'>
      <Box as='header'>
        <Navbar />
      </Box>
      <Box as='main' flex='1'>
        {children}
      </Box>
      <Box as='footer'>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;

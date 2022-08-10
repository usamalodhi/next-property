import React from 'react';
import Image from 'next/image';
import { Flex, Box, Link, List, ListItem } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Github from '../../public/social/github.svg';
import LinkedIn from '/public/social/linkedin.svg';

export const SocialLinks = ({ name, linkTo, image }) => {
  return (
    <ListItem textAlign='center'>
      <Link href={linkTo} isExternal>
        <Image src={image} alt={name} width={40} height={40} />
      </Link>
    </ListItem>
  );
};

const Footer = () => {
  return (
    <Flex justifyContent='space-between' alignContent='center' p='2' bg='brand.secondary' color='brand.primary'>
      <Box fontWeight='bold'>© 2022 Usama Lodhi Software Developer</Box>
      <List display='flex' gap='1em' listStyleType='none'>
        <SocialLinks image={Github} name='Github' linkTo='https://github.com/' />
        <SocialLinks image={LinkedIn} name='LinkedIn' linkTo='https://www.linkedin.com/' />
      </List>
    </Flex>
  );
};

export default Footer;

import { Center, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Center marginBottom={'24px'} bg={'gray.100'}>
      <Heading        
        size='xl'
        as="h1"
        >
        DIO Banking: Login
      </Heading>
    </Center>
  );
};

export default Header;

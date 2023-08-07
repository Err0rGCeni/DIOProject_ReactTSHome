import {
  ChakraProvider,
  Box,
  Center
} from '@chakra-ui/react'

import Header from './components/Header';
import Form from './components/FormCard';

function App() {
  return (
    <ChakraProvider>
      <Center
        bg={'blackAlpha.900'}
        h={'100vh'}
        w={'100%'}
        flexDirection={'column'}
        justifyContent={"flex-start"}
        padding={'12px'}
      >
        <Box
          w={'100%'}
          maxW={'1440px'}
        >
          <Header />
          <Form />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

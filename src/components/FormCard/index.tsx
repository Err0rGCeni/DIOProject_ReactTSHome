import {
  Flex,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { login } from '../../services/login'

import { FormContainer } from './style';
import Button from '../Button'

const Form = () => {
  return (
    <Flex
    bg={'gray.100'}
    padding={'12px'}
    justifyContent={'center'}
    alignItems={'center'}
    >
      <FormContainer>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Digite seu email" />
          </FormControl>

          <FormControl id="senha">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button onClick={login} title={"Entrar"}/>
        </Stack>
      </FormContainer>
    </Flex>
  );
};

export default Form

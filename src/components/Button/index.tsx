import { Button as Btn } from '@chakra-ui/react';

interface IButton {
  onClick: () => void;
  title: string;
}

const Button = (props: IButton) => {
  return (
    <Btn onClick={props.onClick} variant='outline' colorScheme='yellow' as="button">
      {props.title}
    </Btn>
  );
};

export default Button;

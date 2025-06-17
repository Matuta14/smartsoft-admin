import { InputStyled } from './input.styled';
import type { IInputProps } from './types';

export const Input = ({ onChange, label, value, ...rest }: IInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };

  return (
    <InputStyled onChange={(e) => handleChange(e)} value={value} {...rest} />
  );
};

export default Input;

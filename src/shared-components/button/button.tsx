import Loader from '../../shared-components/loader/loader';
import { ButtonStyled } from './button.styled';
import { IButtonProps } from './types';

export const Button = ({
  text,
  buttonType = 'primary',
  loading,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonStyled buttonType={buttonType} {...rest}>
      {loading ? <Loader /> : text}
    </ButtonStyled>
  );
};

export default Button;

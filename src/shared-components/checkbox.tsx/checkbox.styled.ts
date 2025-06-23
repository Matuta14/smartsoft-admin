import styled from 'styled-components';
import { Theme } from '../../theme';

export const CheckboxStyled = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${Theme.colors.MAIN_BLUE};
  input {
    width: 0.9375rem;
    height: 0.9375rem;
  }
`;

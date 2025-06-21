import styled from 'styled-components';
import { Theme } from '../../theme';
export const InputStyled = styled.input`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 1.25rem 0.3125rem;
  color: ${Theme.colors.MAIN_BLUE};
  border-bottom: 0.0625rem solid ${Theme.colors.MAIN_BLUE};
  font-size: 12px;
  &:focus-visible {
    outline: none;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${Theme.colors.MAIN_BLUE};
  }
`;

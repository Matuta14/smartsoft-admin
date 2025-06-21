import styled from 'styled-components';
import { Theme } from '../../theme';

export const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.875rem;
  max-width: 21.875rem;
  .error {
    margin: 1.25rem 0;
    color: ${Theme.colors.RED};
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
    button {
      margin-top: 1.25rem;
    }
  }
`;

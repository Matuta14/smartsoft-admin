import styled from 'styled-components';
import { Theme } from '../../theme';

export const HeaderStyled = styled.div`
  display: flex;
  font-size: 1.375rem;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  width: 100%;
  padding: 2rem;
  background-color: ${Theme.colors.CARD_BG};
  justify-content: space-between;
  align-items: center;
  .logo {
    padding: 0;
    height: auto;
  }
  a {
    text-decoration: none;
    color: ${Theme.colors.MAIN_FONT_COLOR};
    cursor: pointer;
    &:hover {
      color: ${Theme.colors.MAIN_BLUE};
    }
  }
  .left {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }

  .right {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }
`;

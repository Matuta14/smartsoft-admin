import styled from 'styled-components';
import { Theme } from '../../theme';

export const HeaderStyled = styled.div`
  display: flex;
  font-size: 1.375rem;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  width: 100%;
  padding: 1rem;
  background-color: ${Theme.colors.MAIN_BLUE};
  justify-content: space-between;
  align-items: center;
  color: #fff;
  .logo {
    padding: 0;
    height: auto;
  }
  a {
    text-decoration: none;
    color: ${Theme.colors.FONT_COLOR_LIGHT};
    cursor: pointer;
    font-size: 12px;
    &:hover {
      color: ${Theme.colors.SECONDARY_FONT_COLOR};
    }
  }
  .left {
    display: flex;
    gap: 0.625rem;
    align-items: center;
    font-size: 12px;
  }

  .right {
    display: flex;
    gap: 0.625rem;
    align-items: center;
    font-size: 14px;
  }
`;

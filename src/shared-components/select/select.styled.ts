import styled from 'styled-components';
import { Theme } from '../../theme';

export const SelectStyled = styled.input`
  display: flex;
  background-color: transparent;
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  padding: 0.625rem;
  border-color: ${Theme.colors.MAIN_BLUE};
  border: ${Theme.effects.BORDER_COLORED};
  outline: none;
  cursor: pointer;
  option {
    background-color: ${Theme.colors.CARD_BG};
    color: ${Theme.colors.MAIN_FONT_COLOR};
    border: none;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  position: relative;
  width: 12.5rem;

  .select-label {
    font-size: 0.75rem;
    color: ${Theme.colors.MAIN_BLUE};
  }
`;

export const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: ${Theme.colors.CARD_BG};
  color: ${Theme.colors.MAIN_FONT_COLOR};
  border: ${Theme.effects.BORDER_COLORED};
  border-radius: ${Theme.effects.BORDER_RADIUS};
  display: flex;
  flex-direction: column;
  z-index: 100;

  .option {
    padding: 0.625rem;
    border-radius: ${Theme.effects.BORDER_RADIUS};
    display: flex;
    &:hover {
      background-color: ${Theme.colors.TABLE_ROW_HOVER};
      cursor: pointer;
    }
  }
`;

export const SelectMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MobileSelectStyled = styled.div`
  display: flex;
  flex-direction: column;

  .row {
    display: flex;
  }
`;

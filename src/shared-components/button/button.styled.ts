import styled from 'styled-components';
import { Theme } from '../../theme';
interface Props {
  buttonType: 'primary' | 'secondary' | 'red' | 'green';
}
export const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'buttonType',
})<Props>`
  display: flex;
  background-color: ${({ buttonType }) =>
    buttonType === 'primary'
      ? Theme.colors.BUTTON_BG
      : buttonType === 'red'
        ? Theme.colors.RED
        : buttonType === 'green'
          ? Theme.colors.GREEN
          : 'transparent'};
  align-items: center;
  justify-content: center;
  padding: 0.1875rem 0.9375rem;
  border: none;
  border-radius: ${Theme.effects.BORDER_RADIUS};
  font-size: 12px;
  color: ${({ buttonType }) =>
    buttonType === 'primary' || buttonType === 'red' || buttonType === 'green'
      ? Theme.colors.FONT_COLOR_LIGHT
      : Theme.colors.SECONDARY_FONT_COLOR};
  cursor: pointer;
  height: 2.1875rem;
  min-height: 30px;
  // min-width: 160px;
  &:hover {
    background-color: ${({ buttonType }) =>
      buttonType === 'primary'
        ? Theme.colors.BUTTON_HOVER
        : buttonType === 'red'
          ? Theme.colors.RED_HOVER
          : buttonType === 'green'
            ? Theme.colors.GREEN_HOVER
            : 'transparent'};
  }
`;

import styled from 'styled-components';
import { Theme } from '../../theme';
interface Props {
  buttonType: 'primary' | 'secondary';
}
export const ButtonStyled = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'buttonType',
})<Props>`
  display: flex;
  background-color: ${({ buttonType }) =>
    buttonType === 'primary' ? Theme.colors.SEOCNDARY_BG_COLOR : 'transparent'};
  align-items: center;
  justify-content: center;
  padding: 0.1875rem 0.9375rem;
  border: none;
  border-radius: ${Theme.effects.BORDER_RADIUS};
  font-size: 1.125rem;
  color: ${({ buttonType }) =>
    buttonType === 'primary'
      ? Theme.colors.MAIN_FONT_COLOR
      : Theme.colors.SECONDARY_FONT_COLOR};
  cursor: pointer;
  height: 2.1875rem;
  &:hover {
    opacity: 0.7;
  }
`;

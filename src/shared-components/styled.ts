import styled from 'styled-components';
import { Theme } from '../theme';
interface Props {
  center?: boolean;
}
export const MainLayoutStyled = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'center',
})<Props>`
  display: flex;
  background-color: ${Theme.colors.MAIN_BG};
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'start')};
  flex-direction: column;
  gap: 1.25rem;
  min-height: 100%;
`;

export const ContentLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  background-color: ${Theme.colors.CARD_BG};
  padding: 1.875rem;
  height: 100%;
  width: calc(100% - 2rem);
  border-radius: ${Theme.effects.BORDER_RADIUS};
`;

export const AuthLayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.CARD_BG};
  padding: 1.875rem;
  border-radius: ${Theme.effects.BORDER_RADIUS};
`;

export const InnerLayout = styled.div`
  display: flex;
`;

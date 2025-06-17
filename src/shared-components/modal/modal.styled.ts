import styled from 'styled-components';
import { Theme } from '../../theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBody = styled.div`
  background: ${Theme.colors.CARD_BG};
  padding: 2rem;
  border-radius: 0.5rem;
  min-width: 18.75rem;
  position: relative;
  .close-icon {
    display: flex;
    justify-self: end;
  }
`;

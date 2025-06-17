import styled from 'styled-components';
import { Theme } from '../../theme';

export const ConfirmModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  .title {
    font-size: 1.375rem;
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }
  .buttons-box {
    display: flex;
    justify-content: space-between;
  }
`;

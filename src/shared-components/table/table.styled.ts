import styled from 'styled-components';
import { Theme } from '../../theme';

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  max-height: 100%;
  border-radius: ${Theme.effects.BORDER_RADIUS};
  box-shadow: ${Theme.effects.CARD_BOX_SHADOW};
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  background-color: ${Theme.colors.SEOCNDARY_BG_COLOR};
  span {
    color: ${Theme.colors.CARD_BG};
    font-size: 1.25rem;
  }
`;

export const TableRow = styled.div`
  display: flex;
  cursor: pointer;
  border-bottom: 0.0625rem solid ${Theme.colors.SEOCNDARY_BG_COLOR};
  &:hover {
    background-color: ${Theme.colors.TABLE_ROW_HOVER};
  }
`;
export const RowBtnBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.625rem;
`;
export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const TableCell = styled.span<{ $flex?: number; $align?: string }>`
  padding: 0.625rem;
  width: 6.25rem;
  flex: ${({ $flex }) => ($flex ? $flex : 'auto')};
  color: ${Theme.colors.MAIN_FONT_COLOR};
  font-size: 1.125rem;
  text-align: ${({ $align }) => $align};

  &.header-cell {
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }
  .hide-overflow {
    text-overflow: ellipsis;
    text-align: ${({ $align }) => $align};
    overflow: hidden;
    width: 100%;
    display: block;
  }
`;

export const EmptyTableStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 1.375rem;
  text-align: center;
  margin: 10% 0;
`;

export const TablePaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 0;
`;

export const MobileTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  overflow: auto;
`;

export const MobileBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.25rem;
  border-bottom: ${Theme.effects.BORDER_COLORED};
  .chart-button {
    align-self: end;
    color: ${Theme.colors.MAIN_BLUE};
    display: flex;
    align-items: center;
    gap: 0.3125rem;
    .arrow-icon {
      transform: rotate(90deg);
    }
  }
`;

export const MobileTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;

  .label {
    color: ${Theme.colors.SECONDARY_FONT_COLOR};
  }
  .value {
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }
`;

import styled from 'styled-components';
import { Theme } from '../../theme';

export const SelectStyled = styled.input`
  display: flex;
  border-radius: 4px;
  padding: 0.625rem;
  border-color: 1px solid #c2cad8;
  border: 1px solid #c2cad8;
  outline: none;
  cursor: pointer;
  width: 100%;
  option {
    border: none;
    color: black;
  }
  &:active {
    border: 1ox solid black;
  }
`;

export const SelectBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  position: relative;
  width: 12.5rem;
  align-items: center;
  justify-content: center;

  .icon {
    display: flex;
    position: absolute;
    right: 10px;
    height: 10px;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
  .select-label {
    font-size: 0.75rem;
    color: black;
  }
`;

export const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  border: ${Theme.effects.BORDER_COLORED};
  background-color: #ffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  border: 1px solid #c2cad8;
  margin-top: 3px;
  .option {
    padding: 0.625rem;
    border-radius: ${Theme.effects.BORDER_RADIUS};
    display: flex;

    color: black;
    &:hover {
      background-color: #c2cad8;
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

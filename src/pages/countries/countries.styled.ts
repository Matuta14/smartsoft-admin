import styled from 'styled-components';

export const CountriesStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FiltersBox = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  gap: 1.25rem;
  justify-content: space-between;
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  height: calc(100% - 60px);

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

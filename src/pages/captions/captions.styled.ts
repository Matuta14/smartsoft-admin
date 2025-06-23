import styled from 'styled-components';
import { Theme } from '../../theme';

export const CaptionsStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddWordBox = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  form {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.25rem;
    .inputs {
      display: flex;

      flex-wrap: wrap;
      gap: 1.25rem;
    }
    input {
      padding: 0;
    }
  }
  .error {
    color: ${Theme.colors.RED};
    display: flex;
  }
`;

export const TableBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .loader-box {
    margin-top: 30%;
  }
`;

export const EditModalStyled = styled.div`
  display: flex;
  .title {
    display: flex;
    align-items: center;
    font-size: 1.375rem;
    justify-content: center;
    color: ${Theme.colors.MAIN_FONT_COLOR};
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
      margin-top: 1.25rem;
    }
  }
`;

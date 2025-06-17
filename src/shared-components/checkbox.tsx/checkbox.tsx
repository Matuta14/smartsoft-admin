import { CheckboxStyled } from './checkbox.styled';
import { ICheckboxProps } from './types';

export const Checkbox = ({ onChange, checked, label }: ICheckboxProps) => {
  return (
    <CheckboxStyled>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </CheckboxStyled>
  );
};

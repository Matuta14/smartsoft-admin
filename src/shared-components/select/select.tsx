import { useState } from 'react';
import { ISelectOption, ISelectProps } from './types';
import { SelectBox, SelectMenu, SelectStyled } from './select.styled';
import svgUrl from '../../assets/dropdownChevron.svg';

export const Select = ({
  options,
  onChange,
  label,
  value,
  className,
}: ISelectProps) => {
  const [selected, setSelected] = useState(value || options[0]?.label);
  const [isOpenSelect, setIsOpen] = useState(false);

  const onOptionClick = (option: ISelectOption) => {
    setSelected(option?.label);
    onChange?.(option?.value);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SelectBox className={className} isOpen={isOpenSelect}>
      <label className="select-label">{label}</label>
      <SelectStyled
        value={selected}
        onClick={handleClick}
        type="text"
        placeholder="Select an option"
        readOnly
      />
      <img className="icon" src={svgUrl} />
      {isOpenSelect && (
        <SelectMenu>
          {options.map((option) => (
            <span
              key={option.value}
              onClick={() => onOptionClick(option)}
              className="option"
            >
              {option.label}
            </span>
          ))}
        </SelectMenu>
      )}
    </SelectBox>
  );
};

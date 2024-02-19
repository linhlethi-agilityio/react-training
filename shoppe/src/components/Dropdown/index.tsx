import { memo } from 'react';
import styled from 'styled-components';
import { IDropdownProps } from './types';

const Dropdown = (props: IDropdownProps) => {
  const { className, options, placeholder, onChange, value, name } = props;

  return (
    <select className={className} onChange={onChange} value={value || ''} name={name}>
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const StyledDropdown = memo(styled(Dropdown)`
  outline: none;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  font-weight: var(--font-weight-normal);
  font-size: var(--text-x-small);
  line-height: 22px;
  color: var(--color-primary);
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url('public/images/arrowDropDownIcon.webp');
  background-repeat: no-repeat;
  background-position-x: 235px;
  background-position-y: 20px;
  min-width: 261px;
  padding: 15px 23px 15px 12px;
  cursor: pointer;
`);

export { StyledDropdown };

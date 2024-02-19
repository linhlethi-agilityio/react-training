import styled from 'styled-components';
import { IDropdownProps } from './types';

const Dropdown = (props: IDropdownProps) => {
  const { className, options, placeholder, onChange, value, name } = props;

  return (
    <div>
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
    </div>
  );
};

const StyledDropdown = styled(Dropdown)`
  outline: none;
  border: none;
  font-weight: var(--font-weight-normal);
  font-size: var(--text-small);
  line-height: 22px;
  color: #545454;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url('public/assets/images/arrowDropDownIcon.webp');
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 9px;
  min-width: 90px;
`;

export { StyledDropdown };

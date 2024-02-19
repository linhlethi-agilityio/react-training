import StyledInput from '@components/Input';
import { memo } from 'react';
import styled from 'styled-components';
import { IInputControlProps } from './types';

const InputControl = (props: IInputControlProps) => {
  const { className, label, value, onChange, name, id, inputType } = props;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}:</label>
      <StyledInput
        name={name}
        id={id}
        onChange={onChange}
        type={inputType}
        variant="secondary"
        value={value}
      />
    </div>
  );
};

const StyledInputControl = memo(styled(InputControl)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-size: 20px;
    line-height: 26px;
  }
`);

export { StyledInputControl };

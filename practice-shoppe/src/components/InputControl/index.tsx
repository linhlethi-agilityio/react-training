import StyledInput from '@components/Input';
import { forwardRef, memo } from 'react';
import styled from 'styled-components';
import { IInputControlProps } from './types';

const InputControl = forwardRef(function InputControl(props: IInputControlProps, ref) {
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
        ref={ref}
      />
    </div>
  );
});

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

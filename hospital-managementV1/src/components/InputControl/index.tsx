import { StyledInput } from '@components/Input';
import styled from 'styled-components';
import { IInputControlProps } from './types';

const InputControl = (props: IInputControlProps) => {
  const { className, label, defaultValue, onChange, name, inputWidth, id } = props;

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        inputWidth={inputWidth}
        name={name}
        id={id}
        onChange={onChange}
        variant="secondary"
        defaultValue={defaultValue}
      />
    </div>
  );
};

const StyledInputControl = styled(InputControl)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    font-family: var(--font-secondary);
    font-size: 24px;
    line-height: 24px;
  }

  input {
    padding-left: 12px;
  }
`;

export { StyledInputControl };

import StyledInput from '@components/Input';
import { FormEvent } from 'react';
import { transformToStyleValue } from 'src/helper/transformNumber';
import styled from 'styled-components';
import { IFormControlProps } from './types';

const SubmitableForm = (props: IFormControlProps) => {
  const {
    className,
    IconComponent,
    onChange,
    onSubmit,
    placeholderInput,
    iconSize,
    inputVariant,
    value,
  } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.();
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <StyledInput
        onChange={onChange}
        inputWidth="full"
        variant={inputVariant}
        placeholder={placeholderInput}
        value={value}
      />
      <button type="submit">{IconComponent && <IconComponent size={iconSize!} />}</button>
    </form>
  );
};

const StyledSubmitableForm = styled(SubmitableForm)`
  position: relative;
  width: ${(props) => transformToStyleValue(props.formWidth)};

  input {
    padding-bottom: 12px;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 6px;
  }
`;

export { StyledSubmitableForm };

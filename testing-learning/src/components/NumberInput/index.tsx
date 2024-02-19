import { StyledButton } from '@components/Button';
import styled from 'styled-components';
import { INumberInputProps } from './types';
import StyledInput from '@components/Input';
import { memo } from 'react';

const NumberInput = (props: INumberInputProps) => {
  const { className, value, handleIncrease, handleDecrease, min, max } = props;

  return (
    <div className={className}>
      <StyledButton variant="outline" onClick={handleDecrease} disabled={value <= min}>
        -
      </StyledButton>
      <StyledInput type="number" value={value} readOnly />
      <StyledButton variant="outline" onClick={handleIncrease} disabled={value >= max}>
        +
      </StyledButton>
    </div>
  );
};

const StyledNumberInput = memo(styled(NumberInput)`
  display: flex;
  flex-direction: row;

  input {
    background: #efefef;
    border: none;
    outline: none;
    width: 34px;
    height: 53px;
    text-align: center;
    font-size: var(--text-small);
    color: var(--color-tertiary);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`);

export { StyledNumberInput };

/*
* const handleDecrease = jest.fn()
template = render(<NumberInput handleDecrease={handleDecrease}/>)

const button = template.find(StyledButton).at(0)

button.simulate('click')

expect(handleDecrease).toBeCalled()
*/

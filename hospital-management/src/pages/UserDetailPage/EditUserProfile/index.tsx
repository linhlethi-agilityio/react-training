import { StyledButton } from '@components/Button';
import { StyledInputControl } from '@components/InputControl';
import { FormEvent } from 'react';
import styled from 'styled-components';
import { IMyProfileProps } from './types';

const EditUserProfile = (props: IMyProfileProps) => {
  const { className, data, onChange, onSubmit } = props;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit?.();
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <StyledInputControlWrap>
        <StyledInputControl
          label="Name"
          name="name"
          id="name"
          defaultValue={data.name}
          onChange={onChange}
          inputWidth="72%"
        />
        <StyledInputControl
          label="E-mail"
          name="email"
          id="email"
          defaultValue={data.email}
          onChange={onChange}
          inputWidth="72%"
        />
        <StyledInputControl
          label="Phone"
          name="phone"
          id="phone"
          defaultValue={data.phone}
          onChange={onChange}
          inputWidth="72%"
        />
        <StyledInputControl
          label="Location"
          name="location"
          id="location"
          defaultValue={data.location!}
          onChange={onChange}
          inputWidth="72%"
        />
      </StyledInputControlWrap>
      <div>
        <StyledButton variant="secondary" type="submit">
          Save
        </StyledButton>
      </div>
    </form>
  );
};

const StyledEditUserProfile = styled(EditUserProfile)`
  width: 485px;

  button {
    margin-top: 78px;
  }

  div:last-child {
    display: flex;
    gap: 30px;
  }
`;

const StyledInputControlWrap = styled.div`
  div:nth-child(n + 2) {
    margin-top: 75px;
  }
`;

export { StyledEditUserProfile };

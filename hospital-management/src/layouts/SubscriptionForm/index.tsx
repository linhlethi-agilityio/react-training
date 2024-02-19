import { StyledButton } from '@components/Button';
import { StyledInput } from '@components/Input';
import { ChangeEvent, FormEvent, memo, useState } from 'react';

const SubscriptionForm = memo(function Form() {
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        variant="roundHead"
        placeholder="Email"
        value={emailValue}
        onChange={handleChange}
      />
      <StyledButton type="submit" variant="roundHead">
        Subscribe
      </StyledButton>
    </form>
  );
});

export { SubscriptionForm };

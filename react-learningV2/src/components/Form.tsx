import { ChangeEvent, FormEvent, useState } from 'react';

const Form = () => {
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<any>(null);
  const [status, setStatus] = useState<string>('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err: any) {
      setStatus('typing');
      setError(err);
    }
  };

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const submitForm = (answer: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'lima';
        if (shouldError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve('');
        }
      }, 1500);
    });
  };

  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
        {error !== null && <p>{error.message}</p>}
      </form>
    </>
  );
};

export { Form };

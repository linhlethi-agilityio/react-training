import { useState, useEffect, useRef } from 'react';

function TrackingState() {
  const [inputValue, setInputValue] = useState<string>('');
  const previousInputValue = useRef<string>('');

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <div>Current Value: {inputValue}</div>
      <div>Previous Value: {previousInputValue.current}</div>
    </>
  );
}

export default TrackingState;

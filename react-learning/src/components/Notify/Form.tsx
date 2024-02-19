import React, { useRef, useEffect } from 'react';
import { FancyInput } from '@components/Notify/FancyInput';

function Form() {
  const fancyInputRef = useRef(null);

  useEffect(() => {
    if (fancyInputRef.current) {
      fancyInputRef.current.focus();
    }
  }, []);

  return (
    <>
      <form>
        <FancyInput ref={fancyInputRef} />
      </form>
      <button
        onClick={() => {
          if (fancyInputRef.current) {
            fancyInputRef.current.toggleMessage();
          }
        }}
      >
        toggle notify
      </button>
    </>
  );
}

export default Form;

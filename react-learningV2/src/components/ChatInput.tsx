import { useState, useRef } from 'react';

const ChatInput = () => {
  const [text, setText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(0);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert('Sent!');
      setIsSending(false);
    }, 1000);
  };

  const handleUndo = () => {
    setIsSending(false);
    clearTimeout(timeoutRef.current);
  };

  return (
    <>
      <input disabled={isSending} value={text} onChange={(e) => setText(e.target.value)} />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
};

export { ChatInput };

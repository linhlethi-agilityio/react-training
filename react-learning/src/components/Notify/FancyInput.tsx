import React, { useRef, useImperativeHandle, useState } from "react";

export const FancyInput = React.forwardRef<void>((props, ref) => {
  const [showMsg, setShowMsg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: (): void => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },

    toggleMessage: (): void => {
      setShowMsg((prevValue) => !prevValue);
    },
  }));

  return (
    <>
      <input ref={inputRef} />
      {showMsg && <span style={{ color: "red" }}>notyfy</span>}
    </>
  );
});

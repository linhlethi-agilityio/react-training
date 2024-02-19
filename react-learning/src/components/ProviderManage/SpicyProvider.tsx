import React, { useState, createContext } from 'react';

export const SpicyStateCtx = createContext(null);
export const SpicyApiCtx = createContext(null);

interface IProps {
  children: string;
}

function SpicyProvider(props: IProps) {
  const { children } = props;
  const [spice, setSpice] = useState<string>('pepper');

  const api = {
    gingerSpice: () => setSpice('ginger'),
    sportySpice: () => setSpice('sporty'),
  };

  return (
    <SpicyStateCtx.Provider value={spice}>
      <SpicyApiCtx.Provider value={api}>{children}</SpicyApiCtx.Provider>
    </SpicyStateCtx.Provider>
  );
}

export default SpicyProvider;

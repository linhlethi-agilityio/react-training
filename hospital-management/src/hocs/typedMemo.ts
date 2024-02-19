import { ComponentType, memo } from 'react';

export const typedMemo: <T extends ComponentType<any>>(
  c: T,
  areEqual?: (prev: React.ComponentProps<T>, next: React.ComponentProps<T>) => boolean,
) => T = memo;

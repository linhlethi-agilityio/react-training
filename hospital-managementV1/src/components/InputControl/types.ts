import { ChangeEvent } from 'react';

export interface IInputControlProps {
  className?: string;
  label: string;
  defaultValue: string;
  name: string;
  width?: string;
  inputWidth?: string;
  id: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

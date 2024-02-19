import { ChangeEvent } from 'react';

export interface IInputControlProps {
  className?: string;
  label: string;
  value: string;
  name: string;
  id: string;
  inputType: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

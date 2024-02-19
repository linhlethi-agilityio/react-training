import { ChangeEvent } from 'react';

export interface IOptionConfig {
  label: string;
  value: string;
}

export interface IDropdownProps {
  className?: string;
  options: IOptionConfig[];
  placeholder: string;
  value: string | number;
  name: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

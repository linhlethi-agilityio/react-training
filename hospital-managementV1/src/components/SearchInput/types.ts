import { IInputProps } from '@components/Input/types';
import { ChangeEvent } from 'react';

export interface ISearchInputProps {
  className?: string;
  searchText: string;
  location: string;
  locationInputConfig: IInputProps;
  searchInputConfig: IInputProps;
  onChangeLocation?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

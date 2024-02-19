import { IUser } from '@data-types/user';
import { ChangeEvent } from 'react';

export interface IMyProfileProps {
  className?: string;
  data: IUser;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

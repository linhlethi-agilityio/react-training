import { IAppDescription } from '@data-types/appDescription';

export interface IAppDescriptionProps {
  className?: string;
  data: IAppDescription[];
  title: string;
  description: string;
}

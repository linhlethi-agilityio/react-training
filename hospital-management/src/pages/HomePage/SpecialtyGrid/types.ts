import { ISpecialty } from '@data-types/specialty';

export interface ISpecialtyGridProps {
  className?: string;
  data: ISpecialty[];
  resource: string;
  title?: string;
  description?: string;
}

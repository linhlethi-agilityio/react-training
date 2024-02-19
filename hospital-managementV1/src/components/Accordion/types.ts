import { IAccordionItem } from '@components/AccordionItem/types';
import { OlHTMLAttributes } from 'react';

export interface IAccordionProps extends OlHTMLAttributes<HTMLElement> {
  className?: string;
  data: IAccordionItem[];
}

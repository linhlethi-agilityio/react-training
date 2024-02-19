import { IBanner } from '@data-types/banner';

export interface IBannerProps {
  className?: string;
  data: IBanner[];
  resource: string;
}

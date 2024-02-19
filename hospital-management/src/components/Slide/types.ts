import { ISlideNavigationProps } from '@components/SlideNavigation/types';
import { IPaginationItemProps } from '@components/SlidePaginationItem/types';
import { FC, ReactNode } from 'react';

export interface ISlideProps {
  className?: string;
  pagination: boolean;
  navigation: boolean;
  CustomPaginationComponent?: FC<IPaginationItemProps>;
  CustomNavigationComponent?: FC<ISlideNavigationProps>;
  children?: ReactNode;
}

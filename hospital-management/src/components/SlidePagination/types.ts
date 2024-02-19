export interface ISlidePaginationProps {
  className?: string;
  slideCount: number;
  currentIndex: number;
  onItemClick: (i: number) => void;
}

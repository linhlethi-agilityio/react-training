import { TWidthValue } from 'src/helper/transformNumber';

export interface ISocialInfo {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
}

export interface ISocialInformationProps {
  className?: string;
  data: ISocialInfo;
  gap?: number | TWidthValue;
}

export interface IPerson {
  name: string;
  image: string;
}

export interface IAvatar extends React.ImgHTMLAttributes<HTMLImageElement> {
  person: IPerson;
  size: number;
}

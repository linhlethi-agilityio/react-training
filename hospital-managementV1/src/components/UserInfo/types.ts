export interface IUserInfoProps {
  className?: string;
  background: string;
  avatar: string;
  position?: string;
  location: string;
  socialInfo?: {
    [key: string]: string;
  };
  name: string;
  editable?: boolean;
  role?: string;
}

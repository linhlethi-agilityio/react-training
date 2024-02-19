import { ReactNode } from 'react';

export interface IListItemProps {
  children: ReactNode;
  active: boolean;
  className?: string;
}

const ListItem = (props: IListItemProps) => {
  const { children, className, active } = props;

  return (
    <li className={className}>
      {children} {active && '--active'}
    </li>
  );
};

export { ListItem };

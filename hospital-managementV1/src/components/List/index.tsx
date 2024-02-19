import { IListProps } from './types';

const List = (props: IListProps) => {
  const { orderable, children, className } = props;

  if (orderable) {
    return <ol className={className}>{children}</ol>;
  }

  return <ul className={className}>{children}</ul>;
};

export { List };

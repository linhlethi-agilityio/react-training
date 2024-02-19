import { ReactNode } from 'react';

interface IPanelProps {
  title: string;
  children?: ReactNode;
  isActive: boolean;
  onShow: () => void;
}

const Panel = ({ title, children, isActive, onShow }: IPanelProps) => {
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
};

export { Panel };

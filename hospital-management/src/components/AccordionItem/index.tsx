import styled from 'styled-components';
import { IAccordionItemProps } from './types';

const AccordionItem = (props: IAccordionItemProps) => {
  const { className, item } = props;

  return (
    <details className={className}>
      <summary>{item.title}</summary>
      {item.text}
    </details>
  );
};

const StyledAccordionItem = styled(AccordionItem)`
  font-weight: var(--font-weight-normal);
  font-size: var(--text-x-small);
  line-height: 20px;
  color: #555555;

  summary {
    font-weight: var(--font-weight-bold);
    font-size: var(--text-x-medium);
    line-height: 27px;
    color: var(--color-primary);
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary {
    list-style: none;
    cursor: pointer;
    margin-bottom: 17px;
  }
`;

export { StyledAccordionItem };

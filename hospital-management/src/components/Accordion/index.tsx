import { StyledAccordionItem } from '@components/AccordionItem';
import styled from 'styled-components';
import { IAccordionProps } from './types';

const Accordion = (props: IAccordionProps) => {
  const { className, data, ...rest } = props;

  return (
    <ol className={className} {...rest}>
      {data.map((item) => (
        <li key={item.id}>
          <StyledAccordionItem item={item} />
        </li>
      ))}
    </ol>
  );
};

const StyledAccordion = styled(Accordion)`
  counter-reset: section;
  list-style-type: none;

  li {
    display: flex;
    padding: 28px 0;
    border-bottom: 1px solid #ffffff;
  }

  li::before {
    counter-increment: section;
    content: counters(section, '.') '. ';
    font-weight: var(--font-weight-bold);
    font-size: var(--text-x-medium);
    line-height: 27px;
    color: var(--color-primary);
  }
`;

export { StyledAccordion };

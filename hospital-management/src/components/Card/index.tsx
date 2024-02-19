import { StyledLink } from '@components/Link';
import styled from 'styled-components';
import { ICardProps } from './types';

const Card = (props: ICardProps) => {
  const { className, linkHref, children } = props;

  return (
    <StyledLink to={linkHref} className={className}>
      {children}
    </StyledLink>
  );
};

const StyledCard = styled(Card)<ICardProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: ${(props) => props.border && `2px solid ${props.borderColor}`};
  font-family: var(--font-primary);
  font-size: var(--text-x-small);
  color: #000000;
  font-weight: var(--font-weight-normal);
  line-height: 20px;
`;

export { StyledCard };

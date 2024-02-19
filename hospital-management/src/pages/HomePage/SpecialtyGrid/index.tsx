import { StyledButton } from '@components/Button';
import { StyledCard } from '@components/Card';
import { StyledButtonLink } from '@components/Link';
import StyledText from '@components/Text';
import { ISpecialty } from '@data-types/specialty';
import _ from 'lodash';
import { memo } from 'react';
import styled from 'styled-components';
import { ISpecialtyGridProps } from './types';

export const SpecialtyGrid = (props: ISpecialtyGridProps) => {
  const { className, data, resource, title, description } = props;

  return (
    <section className={className}>
      <StyledText
        as="h2"
        color="#000000"
        lineHeight="42px"
        fontSize="var(--text-xx-large)"
        fontWeight="var(--font-weight-semi-bold)"
      >
        {title}
      </StyledText>
      <StyledText fontSize="var(--text-x-medium)" lineHeight="27px" color="inherit">
        {description}
      </StyledText>
      <CardList>
        {data.map((item: ISpecialty) => (
          <StyledCard key={item.id} linkHref={`${resource}/${item.id}`}>
            <img src={item.image} alt={`${resource}`} />
            <figure>
              <StyledText as="figcaption" mTop="11px" color="inherit">
                {item.name}
              </StyledText>
            </figure>
          </StyledCard>
        ))}
      </CardList>
      <StyledButtonLink to={`${resource}`}>
        <StyledButton variant="primary">View All</StyledButton>
      </StyledButtonLink>
    </section>
  );
};

const CardList = styled.div`
  margin-top: 73px;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);
  gap: 53px 61px;
  display: grid;
`;

const StyledSpecialtyGrid = memo(
  styled(SpecialtyGrid)`
    padding-top: 108px;
    padding-bottom: 113px;
    text-align: center;
    color: #555555;

    button {
      margin-top: 53px;
    }

    img {
      width: 240px;
      height: 218px;
      border-radius: 10px;
    }
  `,
  (prev, next) =>
    prev.title === next.title &&
    prev.description === next.description &&
    prev.resource === next.resource &&
    _.isEqual(prev.data, next.data),
);

export { StyledSpecialtyGrid };

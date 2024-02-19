import { StyledBox } from '@components/Box';
import { IProductCardProps } from './types';
import StyledText from '@components/Text';
import { memo } from 'react';
import styled from 'styled-components';

const ProductCard = (props: IProductCardProps) => {
  const { data, className } = props;

  return (
    <StyledBox className={className}>
      <img src={data.imageSrc} alt="product-cart" />
      <StyledText mTop={24} fontSize={20} lineHeight={26}>
        {data.name}
      </StyledText>
      <StyledText mTop={16} color="secondary" fontWeight={500} fontSize={20} lineHeight={26}>
        $ {''}
        {data.price}
      </StyledText>
    </StyledBox>
  );
};

const StyledProductCard = memo(styled(ProductCard)`
  img {
    border-radius: 8px;
    width: 300px;
    height: 300px;
  }
`);

export { StyledProductCard };

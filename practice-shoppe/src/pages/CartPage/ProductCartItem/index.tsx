import { IProductCardProps } from './types';
import StyledText from '@components/Text';
import styled from 'styled-components';
import { StyledFlexBox } from '@components/FlexBox';
import { StyledNumberInput } from '@components/NumberInput';
import { CloseIcon } from '@components/Icons';
import { StyledBox } from '@components/Box';

const ProductCartItem = (props: IProductCardProps) => {
  const {
    data,
    handleRemoveProduct,
    handleIncrease,
    handleDecrease,
    minQuantity,
    maxQuantity,
    quantity,
    className,
  } = props;

  return (
    <StyledFlexBox className={className} justifyContent="space-between">
      <StyledFlexBox gap={39}>
        <img src={data.product.imageSrc} alt="product-cart" />
        <StyledBox>
          <StyledText fontSize={20} lineHeight={26}>
            {data.product.name}
          </StyledText>
          <StyledText mTop={16} color="secondary" lineHeight={27}>
            $ {data.product.price}
          </StyledText>
        </StyledBox>
      </StyledFlexBox>
      <StyledFlexBox gap={52}>
        <StyledNumberInput
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          max={maxQuantity}
          min={minQuantity}
          value={quantity}
        />
        <StyledButtonClose onClick={handleRemoveProduct}>
          <CloseIcon />
        </StyledButtonClose>
      </StyledFlexBox>
    </StyledFlexBox>
  );
};

const StyledProductCartItem = styled(ProductCartItem)`
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 39px;
  padding-top: 39px;

  img {
    border-radius: 4px;
    width: 136px;
    height: 136px;
  }
`;

const StyledButtonClose = styled.button`
  display: flex;
  border: none;
  background: none;
  cursor: pointer;
`;

export { StyledProductCartItem };

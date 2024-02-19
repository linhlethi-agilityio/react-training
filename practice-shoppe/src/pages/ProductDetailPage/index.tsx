import { Layout } from '@layouts/';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StyledText from '@components/Text';
import { StyledNumberInput } from '@components/NumberInput';
import { StyledButton } from '@components/Button';
import { StyledBox } from '@components/Box';
import { StyledFlexBox } from '@components/FlexBox';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import { useProduct } from '@hooks/useProduct';
import { useCartProducts } from '@hooks/useCartProducts';
import { useAuth } from '@hooks/useAuth';

const ProductDetailPage = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useProduct(id!);
  const productBody = product?.body;

  const { data: userBody } = useAuth();

  const [quantity, setQuantity] = useState<number>(1);

  const { error: messageCart, addProductToCart } = useCartProducts();

  const handleIncrease = useCallback(() => {
    if (quantity <= MAX_QUANTITY) {
      setQuantity((prevState) => prevState + 1);
    }
  }, [quantity]);

  const handleDecrease = useCallback(() => {
    if (quantity >= MIN_QUANTITY) {
      setQuantity((prevState) => prevState - 1);
    }
  }, []);

  const handleAddProductToCart = useCallback(async () => {
    const data = {
      productId: productBody?.id,
      quantity: quantity,
      userId: userBody?.user.id,
    };

    addProductToCart(data);
  }, [productBody?.id, quantity]);

  return (
    <Layout>
      {productBody && (
        <StyledProductSection>
          {isLoading && <StyledLoadingSpinner />}
          <StyledFlexBox gap={80} justifyContent="center">
            <img src={productBody.imageSrc} alt="product-detail" />
            <StyledBox>
              <StyledText as="h4" fontSize={26} lineHeight={35}>
                {productBody.name}
              </StyledText>
              <StyledText mTop={23} color="secondary" fontSize={20} lineHeight={26}>
                $ {productBody.price}
              </StyledText>
              <StyledText mTop={46} color="tertiary" lineHeight={27}>
                {productBody.shortDescription}
              </StyledText>
              <StyledFlexBox mTop={75} gap={57}>
                <StyledNumberInput
                  min={MIN_QUANTITY}
                  max={MAX_QUANTITY}
                  value={quantity}
                  handleIncrease={handleIncrease}
                  handleDecrease={handleDecrease}
                />
                <StyledButton variant="secondary" onClick={handleAddProductToCart}>
                  Add to cart
                </StyledButton>
              </StyledFlexBox>
              {messageCart?.body || (
                <StyledText color="secondary" mTop={20}>
                  {messageCart?.body}
                </StyledText>
              )}
            </StyledBox>
          </StyledFlexBox>
          <StyledBox pTop={123}>
            <StyledText fontSize={20} lineHeight={26}>
              Description
            </StyledText>
            <hr />
            <StyledText mTop={39} lineHeight={27} color="tertiary">
              {productBody.fullDescription}
            </StyledText>
          </StyledBox>
        </StyledProductSection>
      )}
    </Layout>
  );
};

const StyledProductSection = styled.section`
  padding: 128px 103px 903px 99px;
  max-width: 1440px;
  margin: 0 auto;

  hr {
    width: 107px;
    display: inline-block;
    margin-top: 17px;
  }

  img {
    width: 540px;
    height: 600px;
  }
`;

export default ProductDetailPage;

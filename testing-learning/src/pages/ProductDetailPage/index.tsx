import { Layout } from '@layouts/';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StyledText from '@components/Text';
import { StyledNumberInput } from '@components/NumberInput';
import { StyledButton } from '@components/Button';
import { StyledBox } from '@components/Box';
import { StyledFlexBox } from '@components/FlexBox';
import { ProductDetailContext } from '@contexts/ProductDetailContext';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { CartContext } from '@contexts/CartContext';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import { addProductToCart } from 'src/services/CartProducts';
import { getProductById } from 'src/services/Products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { state, actions } = useContext(ProductDetailContext);
  const { product, loading } = state;

  const { getProductRequest, getProductRequestSuccess, getProductRequestFail } = actions;

  const { state: cartState, actions: cartActions } = useContext(CartContext);
  const { message } = cartState;

  const userId = Number(localStorage.getItem('login'));

  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getProductRequest();
        cartActions.setMessage('');

        if (id) {
          const result = await getProductById(id);
          getProductRequestSuccess(result);
        }
      } catch (error) {
        getProductRequestFail(`Error! An error occurred: ${error}. Please try again later`);
      }
    };

    fetchData();
  }, []);

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
    try {
      const data = {
        productId: product.id,
        quantity: quantity,
        userId: userId,
      };

      const result = await addProductToCart(data);

      cartActions.addProductToCart(result);
      cartActions.setMessage('Add product to cart success');
    } catch (error) {
      cartActions.setMessage(`Error! An error occurred: ${error}. Please try again later`);
    }
  }, [product, quantity]);

  return (
    <Layout>
      <StyledProductSection>
        {loading && <StyledLoadingSpinner />}
        <StyledFlexBox gap={80} justifyContent="center">
          <img src={product.imageSrc} alt="product-detail" />
          <StyledBox>
            <StyledText as="h4" fontSize={26} lineHeight={35}>
              {product.name}
            </StyledText>
            <StyledText mTop={23} color="secondary" fontSize={20} lineHeight={26}>
              $ {product.price}
            </StyledText>
            <StyledText mTop={46} color="tertiary" lineHeight={27}>
              {product.shortDescription}
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
            {message && (
              <StyledText color="secondary" mTop={20}>
                {message}
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
            {product.fullDescription}
          </StyledText>
        </StyledBox>
      </StyledProductSection>
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

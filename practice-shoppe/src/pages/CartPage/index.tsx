import { Layout } from '@layouts/';
import { useCallback } from 'react';
import styled from 'styled-components';
import { StyledProductCartItem } from './ProductCartItem';
import StyledText from '@components/Text';
import { StyledFlexBox } from '@components/FlexBox';
import { StyledBox } from '@components/Box';
import { StyledButton } from '@components/Button';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { ICartProduct } from '@type/product';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import { useCartProducts } from '@hooks/useCartProducts';

const CartPage = () => {
  const {
    data: cartProducts,
    isLoading,
    error,
    removeProductFromCart,
    updateQuantityProduct,
    checkout,
  } = useCartProducts();
  const cartProductsBody = cartProducts?.body;

  const totalPrice: number | undefined = cartProductsBody?.reduce(
    (sum, { quantity, product }) => sum + quantity * product.price,
    0,
  );

  const handleCheckout = useCallback(async () => {
    cartProductsBody?.forEach(async (item) => {
      removeProductFromCart(item.id);

      checkout();
    });
  }, [cartProducts]);

  const handleIncrease = useCallback(async (item: ICartProduct) => {
    const quantity = item.quantity;

    if (quantity <= MAX_QUANTITY) {
      const data = {
        quantity: quantity + 1,
      };

      updateQuantityProduct(item.id, data);
    }
  }, []);

  const handleDecrease = useCallback(async (item: ICartProduct) => {
    const quantity = item.quantity;

    if (quantity >= MIN_QUANTITY) {
      const data = {
        quantity: quantity - 1,
      };

      updateQuantityProduct(item.id, data);
    }
  }, []);

  const handleRemoveProduct = useCallback(async (item: ICartProduct) => {
    removeProductFromCart(item.id);
  }, []);

  return (
    <Layout>
      <StyledCartSection>
        <StyledText as="h2" fontWeight={500} fontSize={33} textAlign="center" lineHeight={43}>
          Shopping Cart
        </StyledText>
        <StyledFlexBox gap={88} mTop={18}>
          <StyledListProduct>
            {isLoading && <StyledLoadingSpinner />}
            {error?.body && <StyledText color="error">{error?.body}</StyledText>}
            {cartProductsBody && cartProductsBody.length > 0 ? (
              cartProductsBody?.map((item: ICartProduct) => (
                <StyledProductCartItem
                  handleIncrease={() => handleIncrease(item)}
                  handleDecrease={() => handleDecrease(item)}
                  minQuantity={MIN_QUANTITY}
                  maxQuantity={MAX_QUANTITY}
                  quantity={item.quantity}
                  handleRemoveProduct={() => handleRemoveProduct(item)}
                  key={item.id}
                  data={item}
                />
              ))
            ) : (
              <StyledText pTop={39}>No Product</StyledText>
            )}
          </StyledListProduct>
          <StyledBox pTop={39} pLeft={59} pRight={59}>
            <StyledText fontSize={26} lineHeight={25}>
              Cart totals
            </StyledText>
            <StyledFlexBox justifyContent="space-between" mTop={66}>
              <StyledText textTransform="uppercase" fontWeight={700} lineHeight={21}>
                Total
              </StyledText>
              <StyledText fontWeight={700} lineHeight={21}>
                $ {totalPrice}
              </StyledText>
            </StyledFlexBox>
            <StyledButtonCheckout variant="primary" onClick={handleCheckout}>
              proceed to checkout
            </StyledButtonCheckout>
          </StyledBox>
        </StyledFlexBox>
      </StyledCartSection>
    </Layout>
  );
};

const StyledCartSection = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  padding: 96px 96px 409px 96px;
`;

const StyledListProduct = styled.div`
  width: 47%;
`;

const StyledButtonCheckout = styled(StyledButton)`
  margin-top: 80px;
`;

export default CartPage;

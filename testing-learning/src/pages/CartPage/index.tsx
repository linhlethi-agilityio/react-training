import { CartContext } from '@contexts/CartContext';
import { Layout } from '@layouts/';
import { useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StyledProductCartItem } from './ProductCartItem';
import StyledText from '@components/Text';
import { StyledFlexBox } from '@components/FlexBox';
import { StyledBox } from '@components/Box';
import { StyledButton } from '@components/Button';
import { StyledLoadingSpinner } from '@components/LoadingSpinner';
import { ICartProduct, ICartProductInput } from '@type/product';
import { MAX_QUANTITY, MIN_QUANTITY } from '@constants/baseConfig';
import {
  removeProductCart,
  getProductFromCart,
  updateProductCart,
} from 'src/services/CartProducts';

const CartPage = () => {
  const { state, actions } = useContext(CartContext);

  const { cartProducts, loading } = state;

  const {
    setLoading,
    getProductsRequestSuccess,
    setMessage,
    checkout,
    updateQuantityProduct,
    removeProductFromCart,
  } = actions;

  const userId = Number(localStorage.getItem('login'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getProductFromCart();
        getProductsRequestSuccess(result);
      } catch (error) {
        setMessage(`Error! An error occurred: ${error}. Please try again later`);
      }
    };

    fetchData();
  }, []);

  const totalPrice: number = cartProducts.reduce(
    (sum, { quantity, product }) => sum + quantity * product.price,
    0,
  );

  const handleCheckout = useCallback(async () => {
    cartProducts.forEach(async (item) => {
      try {
        await removeProductCart(item.id);

        checkout(userId);
      } catch (error) {
        setMessage(`Error! An error occurred: ${error}. Please try again later`);
      }
    });
  }, [cartProducts]);

  const handleIncrease = useCallback(async (item: ICartProduct) => {
    const quantity = item.quantity;

    if (quantity <= MAX_QUANTITY) {
      try {
        const data = {
          quantity: quantity + 1,
        };

        const result = await updateProductCart(item.id, data);

        updateQuantityProduct(result.productId, result.quantity, userId);
      } catch (error) {
        setMessage(`Error! An error occurred: ${error}. Please try again later`);
      }
    }
  }, []);

  const handleDecrease = useCallback(async (item: ICartProduct) => {
    const quantity = item.quantity;

    if (quantity >= MIN_QUANTITY) {
      try {
        const data = {
          quantity: quantity - 1,
        };

        const result = await updateProductCart(item.id, data);

        updateQuantityProduct(result.productId, result.quantity, userId);
      } catch (error) {
        setMessage(`Error! An error occurred: ${error}. Please try again later`);
      }
    }
  }, []);

  const handleRemoveProduct = useCallback(async (item: ICartProduct) => {
    try {
      await removeProductCart(item.id);

      removeProductFromCart(item.product.id, item.userId);
      setMessage('Remove product success');
    } catch (error) {
      setMessage(`Error! An error occurred: ${error}. Please try again later`);
    }
  }, []);

  return (
    <Layout>
      <StyledCartSection>
        <StyledText as="h2" fontWeight={500} fontSize={33} textAlign="center" lineHeight={43}>
          Shopping Cart
        </StyledText>
        <StyledFlexBox gap={88} mTop={18}>
          <StyledListProduct>
            {loading && <StyledLoadingSpinner />}
            {cartProducts.length > 0 ? (
              cartProducts.map((item: ICartProduct) => (
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

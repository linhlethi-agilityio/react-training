import { cartReducer, CART_ACTIONS } from '@reducers/CartReducer';
import { ICartProduct, ICartProductInput } from '@type/product';
import { createContext, useReducer } from 'react';
import { ICartContext, ICartState, IContextProviderProps } from './types';

export const CartContext = createContext<ICartContext>({} as ICartContext);

export const initialState: ICartState = {
  cartProducts: [],
  loading: false,
  message: null,
};

export const CartProvider = (props: IContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const setLoading = (loading: boolean) => {
    dispatch({ type: CART_ACTIONS.SET_LOADING, loading: loading });
  };

  const getProductsRequestSuccess = (products: ICartProduct[]) => {
    dispatch({ type: CART_ACTIONS.GET_PRODUCTS_REQUEST_SUCCESS, cartProducts: products });
  };

  const addProductToCart = (product: ICartProductInput) => {
    dispatch({ type: CART_ACTIONS.ADD_PRODUCT, product: product });
  };

  const updateQuantityProduct = (id: string, value: number, userId: number) => {
    dispatch({
      type: CART_ACTIONS.SET_PRODUCTS,
      id: id,
      quantity: value,
      userId: userId,
    });
  };

  const removeProductFromCart = (id: string, userId: number) => {
    dispatch({ type: CART_ACTIONS.REMOVE_PRODUCT, id: id, userId: userId });
  };

  const setMessage = (message: string) => {
    dispatch({ type: CART_ACTIONS.SET_MESSAGE, message: message });
  };

  const checkout = (userId: number) => {
    dispatch({ type: CART_ACTIONS.CHECKOUT, userId: userId });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        actions: {
          setLoading,
          getProductsRequestSuccess,
          addProductToCart,
          updateQuantityProduct,
          removeProductFromCart,
          setMessage,
          checkout,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

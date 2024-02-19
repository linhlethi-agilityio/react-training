import { productDetailReducer, PRODUCT_DETAIL_ACTIONS } from '@reducers/ProductDetailReducer';
import { IProduct } from '@type/product';
import { createContext, useReducer } from 'react';
import { IContextProviderProps, IProductDetailContext, IProductDetailState } from './types';

export const ProductDetailContext = createContext<IProductDetailContext>(
  {} as IProductDetailContext,
);

export const initialState: IProductDetailState = {
  product: {},
  loading: false,
  errorMessage: null,
};

export const ProductDetailProvider = (props: IContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(productDetailReducer, initialState);

  const getProductRequestSuccess = (product: IProduct) => {
    dispatch({
      type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_SUCCESS,
      product: product,
    });
  };

  const getProductRequest = () => {
    dispatch({ type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT });
  };

  const getProductRequestFail = (errorMessage: string) => {
    dispatch({
      type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_FAIL,
      errorMessage: errorMessage,
    });
  };

  return (
    <ProductDetailContext.Provider
      value={{
        state,
        actions: { getProductRequestSuccess, getProductRequest, getProductRequestFail },
      }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};

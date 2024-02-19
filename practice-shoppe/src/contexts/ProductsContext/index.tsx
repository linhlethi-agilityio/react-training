import { productsReducer, PRODUCTS_ACTIONS } from '@reducers/ProductsReducer';
import { IProduct } from '@type/product';
import { createContext, useReducer } from 'react';
import { IContextProviderProps, IProductsContext, IProductsState, ISortOption } from './types';

export const ProductsContext = createContext<IProductsContext>({} as IProductsContext);

export const initialState: IProductsState = {
  products: [],
  pageNumber: 1,
  totalProducts: 0,
  loading: false,
  errorMessage: null,
  sortOption: {},
  searchValue: '',
};

export const ProductsProvider = (props: IContextProviderProps) => {
  const { children } = props;

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const getProductsRequestSuccess = (products: IProduct[], totalProducts: number) => {
    dispatch({
      type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_SUCCESS,
      products: products,
      totalProducts: totalProducts,
    });
  };

  const getProductsRequest = () => {
    dispatch({ type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS });
  };

  const getProductsRequestFail = (errorMessage: string) => {
    dispatch({ type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_FAIL, errorMessage: errorMessage });
  };

  const setPage = (pageNumber: number) => {
    dispatch({ type: PRODUCTS_ACTIONS.SET_PAGE, pageNumber: pageNumber });
  };

  const handleSortProducts = (sortOption: ISortOption) => {
    dispatch({
      type: PRODUCTS_ACTIONS.SORT_PRODUCTS,
      sortOption: sortOption,
    });
  };

  const handleSearchProducts = (searchValue: string) => {
    dispatch({ type: PRODUCTS_ACTIONS.SEARCH_PRODUCTS, searchValue: searchValue });
  };

  const resetInitialState = () => {
    dispatch({
      type: PRODUCTS_ACTIONS.RESET_INITIALSTATE,
    });
  };

  return (
    <ProductsContext.Provider
      value={{
        state,
        actions: {
          getProductsRequestSuccess,
          getProductsRequestFail,
          setPage,
          handleSortProducts,
          resetInitialState,
          handleSearchProducts,
          getProductsRequest,
        },
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

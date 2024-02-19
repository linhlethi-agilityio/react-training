import { IProductsState, ISortOption } from '@contexts/ProductsContext/types';
import { IProduct } from '@type/product';
import { initialState } from '@contexts/ProductsContext';

export enum PRODUCTS_ACTIONS {
  GET_REQUEST_PRODUCTS = 'GET_REQUEST_PRODUCTS',
  GET_REQUEST_PRODUCTS_SUCCESS = 'GET_REQUEST_PRODUCTS_SUCCESS',
  GET_REQUEST_PRODUCTS_FAIL = 'GET_REQUEST_PRODUCTS_FAIL',
  SET_PAGE = 'SET_PAGE',
  SORT_PRODUCTS = 'SORT_PRODUCTS',
  SEARCH_PRODUCTS = 'SEARCH_PRODUCTS',
  RESET_INITIALSTATE = 'RESET_INITIALSTATE',
}

interface getProductsRequestSuccess {
  type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_SUCCESS;
  products: IProduct[];
  totalProducts: number;
}

interface getProductsRequest {
  type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS;
}

interface getProductsRequestFail {
  type: PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_FAIL;
  errorMessage: string;
}

interface setPage {
  type: PRODUCTS_ACTIONS.SET_PAGE;
  pageNumber: number;
}

interface handleSortProducts {
  type: PRODUCTS_ACTIONS.SORT_PRODUCTS;
  sortOption: ISortOption;
}

interface handleSearchProducts {
  type: PRODUCTS_ACTIONS.SEARCH_PRODUCTS;
  searchValue: string;
}

interface resetInitialState {
  type: PRODUCTS_ACTIONS.RESET_INITIALSTATE;
}

export type ProductsAction =
  | getProductsRequestSuccess
  | getProductsRequestFail
  | setPage
  | handleSortProducts
  | handleSearchProducts
  | resetInitialState
  | getProductsRequest;

const productsReducer = (state: IProductsState, action: ProductsAction) => {
  switch (action.type) {
    case PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        totalProducts: action.totalProducts,
        products: action.products,
      };
    case PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS_FAIL:
      return {
        ...state,
        errorMessage: 'request products fail',
        loading: false,
      };
    case PRODUCTS_ACTIONS.GET_REQUEST_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case PRODUCTS_ACTIONS.SET_PAGE:
      return {
        ...state,
        pageNumber: action.pageNumber,
      };
    case PRODUCTS_ACTIONS.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchValue: action.searchValue,
      };
    }
    case PRODUCTS_ACTIONS.SORT_PRODUCTS:
      return {
        ...state,
        sortOption: action.sortOption,
      };
    case PRODUCTS_ACTIONS.RESET_INITIALSTATE:
      return initialState;

    default:
      return {
        ...state,
      };
  }
};

export { productsReducer };

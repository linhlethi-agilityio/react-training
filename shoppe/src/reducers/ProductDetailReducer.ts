import { IProductDetailState } from '@contexts/ProductDetailContext/types';
import { IProduct } from '@type/product';

export enum PRODUCT_DETAIL_ACTIONS {
  GET_REQUEST_PRODUCT = 'GET_REQUEST_PRODUCTS',
  GET_REQUEST_PRODUCT_SUCCESS = 'GET_REQUEST_PRODUCTS_SUCCESS',
  GET_REQUEST_PRODUCT_FAIL = 'GET_REQUEST_PRODUCTS_FAIL',
}

interface getProductsRequestSuccess {
  type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_SUCCESS;
  product: IProduct;
}

interface getProductsRequest {
  type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT;
}

interface getProductsRequestFail {
  type: PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_FAIL;
  errorMessage: string;
}

export type ProductDetailAction =
  | getProductsRequestSuccess
  | getProductsRequest
  | getProductsRequestFail;

const productDetailReducer = (state: IProductDetailState, action: ProductDetailAction) => {
  switch (action.type) {
    case PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        product: action.product,
      };
    case PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false,
      };
    case PRODUCT_DETAIL_ACTIONS.GET_REQUEST_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export { productDetailReducer };

import { ICartState } from '@contexts/CartContext/types';
import { ICartProduct, ICartProductInput } from '@type/product';

export enum CART_ACTIONS {
  SET_LOADING = 'SET_LOADING',
  GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  SET_PRODUCTS = 'SET_PRODUCTS',
  SET_MESSAGE = 'SET_MESSAGE',
  ADD_PRODUCT = 'ADD_PRODUCT',
  CHECKOUT = 'CHECKOUT',
}

interface setLoading {
  type: CART_ACTIONS.SET_LOADING;
  loading: boolean;
}

interface getProductsRequestSuccess {
  type: CART_ACTIONS.GET_PRODUCTS_REQUEST_SUCCESS;
  cartProducts: ICartProduct[];
}

interface setMessage {
  type: CART_ACTIONS.SET_MESSAGE;
  message: string;
}

interface setProducts {
  type: CART_ACTIONS.SET_PRODUCTS;
  id: string;
  userId: number;
  quantity: number;
}

interface addProduct {
  type: CART_ACTIONS.ADD_PRODUCT;
  product: ICartProductInput;
}

interface removeProduct {
  type: CART_ACTIONS.REMOVE_PRODUCT;
  id: string;
  userId: number;
}

interface checkout {
  type: CART_ACTIONS.CHECKOUT;
  userId: number;
}

export type CartAction =
  | setLoading
  | addProduct
  | getProductsRequestSuccess
  | setProducts
  | setMessage
  | removeProduct
  | checkout;

const cartReducer = (state: ICartState, action: CartAction) => {
  switch (action.type) {
    case CART_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
        message: null,
      };
    case CART_ACTIONS.GET_PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        cartProducts: action.cartProducts,
        loading: false,
        message: null,
      };
    case CART_ACTIONS.SET_PRODUCTS: {
      const products = state.cartProducts;

      const productIndex = products.findIndex((item) => item.product.id === action.id);

      const data = {
        ...products[productIndex],
        quantity: action.quantity,
      };

      products[productIndex] = data;

      return {
        ...state,
        products: products,
        loading: false,
        message: null,
      };
    }
    case CART_ACTIONS.SET_MESSAGE:
      return {
        ...state,
        message: action.message,
        loading: false,
      };

    case CART_ACTIONS.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.cartProducts, action.product],
        loading: false,
        message: null,
      };
    case CART_ACTIONS.REMOVE_PRODUCT: {
      const products = state.cartProducts.filter((item) => item.product.id !== action.id);

      return {
        ...state,
        cartProducts: products,
        loading: false,
        message: null,
      };
    }
    case CART_ACTIONS.CHECKOUT: {
      const products = state.cartProducts.filter((item) => item.userId !== action.userId);

      return {
        ...state,
        cartProducts: products,
        loading: false,
        message: null,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export { cartReducer };

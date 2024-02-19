import { ICartProduct, ICartProductInput } from '@type/product';
import { ReactNode } from 'react';

export interface ICartContext {
  state: ICartState;
  actions: {
    setLoading: (loading: boolean) => void;
    getProductsRequestSuccess: (products: ICartProduct[]) => void;
    addProductToCart: (product: ICartProductInput) => void;
    updateQuantityProduct: (id: string, value: number, userId: number) => void;
    removeProductFromCart: (id: string, userId: number) => void;
    setMessage: (message: string) => void;
    checkout: (userId: number) => void;
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface ICartState {
  cartProducts: ICartProduct[];
  loading: boolean;
  message: null | string;
}

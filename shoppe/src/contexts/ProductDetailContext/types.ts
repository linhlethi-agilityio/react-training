import { IProduct } from '@type/product';
import { ReactNode } from 'react';

export interface IProductDetailContext {
  state: IProductDetailState;
  actions: {
    getProductRequest: () => void;
    getProductRequestSuccess: (response: IProduct) => void;
    getProductRequestFail: (errorMessage: string) => void;
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IProductDetailState {
  product: Partial<IProduct>;
  errorMessage: null | string;
  loading: boolean;
}

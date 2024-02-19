import { IProduct } from '@type/product';
import { ReactNode } from 'react';

export interface ISortOption {
  _order?: string;
  _sort?: string;
}

export interface IProductsContext {
  state: IProductsState;
  actions: {
    getProductsRequest: () => void;
    getProductsRequestSuccess: (response: IProduct[], totalProducts: number) => void;
    getProductsRequestFail: (errorMessage: string) => void;
    setPage: (pageNumber: number) => void;
    handleSortProducts: (sortOption: ISortOption) => void;
    handleSearchProducts: (searchValue: string) => void;
    resetInitialState: () => void;
  };
}

export interface IContextProviderProps {
  children: ReactNode;
}

export interface IProductsState {
  products: IProduct[];
  totalProducts: number;
  pageNumber: number;
  loading: boolean;
  errorMessage: null | string;
  sortOption: ISortOption;
  searchValue: string;
}

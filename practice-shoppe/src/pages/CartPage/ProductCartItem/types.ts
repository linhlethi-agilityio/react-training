import { ICartProduct } from '@type/product';

export interface IProductCardProps {
  className?: string;
  data: ICartProduct;
  minQuantity: number;
  maxQuantity: number;
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleRemoveProduct: () => void;
}

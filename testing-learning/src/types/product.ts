export interface IProduct {
  id: string;
  name: string;
  imageSrc: string;
  price: number;
  fullDescription?: string;
  shortDescription?: string;
}

export interface ICartProduct {
  id: number;
  product: IProduct;
  quantity: number;
  userId: number;
}

export interface ICartProductInput {
  id: number;
  productId: string;
  quantity: number;
  userId: number;
}

import { API_BASE_URL, API_PATH } from '@constants/api';
import { ICartProduct, ICartProductInput } from '@type/product';
import { IApiResponse, get, post, remove, update } from '@services/APIRequest';
import useSWR, { useSWRConfig } from 'swr';

const useCartProducts = () => {
  const getCartUrl = `${API_BASE_URL}/${API_PATH.CART}?_expand=product`;
  const { mutate } = useSWRConfig();
  const { data, error, isLoading } = useSWR<IApiResponse<ICartProduct[]>>(getCartUrl, get);

  const addProductToCart = (data: Partial<ICartProductInput>) => {
    const addProductToCart = post(getCartUrl, data);

    mutate(getCartUrl, addProductToCart, {
      populateCache: (
        addCartProduct: IApiResponse<ICartProduct>,
        cartProducts: IApiResponse<ICartProduct[]>,
      ) => {
        return {
          ...cartProducts,
          ...addCartProduct,
        };
      },
    });
  };

  const updateQuantityProduct = (id: number, cartProductInput: Pick<ICartProduct, 'quantity'>) => {
    const updateCartProduct = update<ICartProduct>(
      `${API_BASE_URL}/${API_PATH.CART}/${id}`,
      cartProductInput,
    );

    mutate(getCartUrl, updateCartProduct, {
      populateCache: (
        updatedCartProduct: IApiResponse<ICartProduct>,
        cartProducts: IApiResponse<ICartProduct[]>,
      ) => {
        const newBody = cartProducts?.body.map((cartProduct) => {
          if (cartProduct.id !== id) {
            return cartProduct;
          }

          return {
            ...cartProduct,
            ...updatedCartProduct.body,
          };
        });

        return {
          ...cartProducts,
          body: newBody,
        };
      },
      revalidate: false,
    });
  };

  const removeProductFromCart = async (id: number) => {
    const removeCartProduct = remove(`${API_BASE_URL}/${API_PATH.CART}/${id}`);

    mutate(getCartUrl, removeCartProduct, {
      populateCache: (_, cartProducts: IApiResponse<ICartProduct[]>) => {
        const newBody = cartProducts?.body.filter((i) => i.id !== id);

        return {
          ...cartProducts,
          body: newBody,
        };
      },
      revalidate: false,
    });
  };

  const checkout = () => {
    const checkoutCartProduct = data?.body.map((item) => {
      remove(`${API_BASE_URL}/${API_PATH.CART}/${item.id}`);
    });

    mutate(getCartUrl, checkoutCartProduct, {
      populateCache: (_, cartProducts: IApiResponse<ICartProduct[]>) => {
        return {
          ...cartProducts,
          body: [],
        };
      },
      revalidate: false,
    });
  };

  return {
    data,
    error,
    isLoading,
    checkout,
    addProductToCart,
    updateQuantityProduct,
    removeProductFromCart,
  };
};

export { useCartProducts };

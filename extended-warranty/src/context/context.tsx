import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { Cart, Product } from '../types/produts';

type ShoppingCartProps = {
  children: ReactNode
}

type ShoppingCartContextData = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  deleteProduct: (productId: number) => void;
  extendedWarranty: (productId: number, value: number) => void;
  cart: Cart;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {
  const cartStorage = localStorage.getItem('@shopping-cart');
  const [cart, setCart] = useState<Cart>(cartStorage ? JSON.parse(cartStorage) : {});

  useEffect(() => {
    if (cartStorage && !Object.keys(cart).length) {
      setCart({});
    }

    localStorage.setItem('@shopping-cart', JSON.stringify(cart));

  }, [cart])

  const addProduct = (product: Product) => {

    const { id, title, price, image } = product;
    const cartProduct = cart[id];

    if (!cartProduct) {
      setCart({
        ...cart,
        [id]: {
          id,
          title,
          price,
          image,
          amount: 1
        }
      });
    } else {
      setCart({
        ...cart,
        [id]: {
          ...cartProduct,
          amount: cartProduct.amount + 1
        }
      });
    }
  }

  const removeProduct = (productId: number) => {
    const cartProduct = cart[productId];
    if (cartProduct) {
      if (cartProduct.amount === 1) {
        const { [productId]: removedProduct, ...rest } = cart;
        setCart(rest);
      } else {
        setCart({
          ...cart,
          [productId]: {
            ...cartProduct,
            amount: cartProduct.amount - 1
          }
        });
      }
    }
  }

  const deleteProduct = (productId: number) => {
    const cartProduct = cart[productId];
    if (cartProduct) {
      const { [productId]: removedProduct, ...rest } = cart;
      setCart(rest);
    }
  }

  const extendedWarranty = (productId: number, value: number) => {

    const cartProduct = cart[productId];
    if (cartProduct) {
      setCart({
        ...cart,
        [productId]: {
          ...cartProduct,
          extraWarranty: value
        }
      });
    }
  }

  return (
    <ShoppingCartContext.Provider value={{
      addProduct,
      removeProduct,
      deleteProduct,
      cart: cart,
      extendedWarranty
    }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  return context;
}
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';
import { Cart, Product } from '../types/produts';

type ShoppingCartProps = {
  children: ReactNode
}

type ShoppingCartContextData = {
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  deleteProduct: (productId: number, amount: number) => void;
  cart: Cart;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export const ShoppingCartProvider = ({ children }: ShoppingCartProps) => {

console.log('ShoppingCartProvider');
  const [cart, setCart] = useState<Cart>({});

  const addProduct = (product: Product) => {

    console.log(product);
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
    console.log(`removeProduct ${productId}`);
    const cartProduct = cart[productId];
    if (cartProduct) {
      if (cartProduct.amount === 1) {
        const { [productId]: removedProduct, ...rest } = cart;
        setCart(rest);
      } else {
        console.log('removeProduct');
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



  return (
    <ShoppingCartContext.Provider value={{
      addProduct,
      removeProduct,
      deleteProduct,
      cart: cart
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
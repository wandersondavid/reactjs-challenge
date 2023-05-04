import React, { useEffect, useState } from "react";
import { Product } from "../../types/produts";
import { CardProduct } from "../../components/CardProduct";
import { Box, Divider } from "@mui/material";
import { Cart } from "../../components/Cart";
import { useShoppingCart } from "../../context/context";

import cartSvg from '../../assets/images/cart.svg'
type Select = {
  [key: string]: (product: Product) => void;
}

type ProductGroup = {
  [key: string]: Product[];
}

export const Home = () => {
  const [products, setProducts] = useState<ProductGroup>({});
  const [loading, setLoading] = useState<Boolean>(true);

  const { cart } = useShoppingCart()

  const groupByCategory = (products: Product[]) => {
    return products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {} as { [key: string]: Product[] });
  };


  const fetchProducts = async () => {
    try {
      const data = await fetch('http://localhost:3333/products');
      const products = await data.json();

      const groupCategory = groupByCategory(products);

      setProducts(groupCategory);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }


  useEffect(() => {
    fetchProducts();

  }, []);

  const { addProduct, removeProduct } = useShoppingCart();
  const handleCart = (product: Product, type: string) => {

    const select: Select = {
      'add': addProduct,
      'remove': (product: Product) => removeProduct(product.id),
    }

    return select[type] && select[type](product);
  }

  if (loading) {
    return (<Box className="flex justify-center flex-col items-center h-screen">
      <img src={cartSvg} />
      <p className="text-zinc-800 mt-6 capitalize font-bold">Carregando...</p>
    </Box>)
  }

  return (
    <main className="h-full mt-28">
      <Cart cart={cart} />

      {Object.entries(products).map(([key, value], index) => (
        <React.Fragment key={key}>
          <h2 key={`${key}-${index}`} className="text-zinc-800 mt-6 capitalize font-bold">{key}</h2>
          <Box key={key} className="grid gap-4 grid-cols-2 py-4 sm:grid-cols-3 md:grid-cols-4">
            {value?.map((product) => (<CardProduct
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              images={product.images}
              rating={product.rating}
              onChange={handleCart}
              cart={cart}
            />))}
          </Box>
          {Object.entries(products).length - 1 !== index && <Divider className="my-4" />}
        </React.Fragment >
      ))
      }
    </main>
  )
}
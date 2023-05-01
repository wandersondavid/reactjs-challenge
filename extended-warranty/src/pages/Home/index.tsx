import { useEffect, useState } from "react";
import { Product } from "../../types/produts";
import { CardProduct } from "../../components/CardProduct";
import { Box, Card, CardContent, CircularProgress } from "@mui/material";
import { Cart } from "../../components/Cart";
import { useShoppingCart } from "../../context/context";

type Select = {
  [key: string]: (product: Product) => void;
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const { cart } = useShoppingCart()

  const convertToPriceCent = (products: Product[], exchangeRate: number) => {
    return products.map((product) => {
      const priceInReal = product.price * exchangeRate;
      const priceInCent = priceInReal * 100;
      return {
        ...product,
        price: priceInCent
      };
    });
  };

  const fetchProducts = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      const products = await data.json();


      const newData = convertToPriceCent(products, 5.5);
      setProducts(newData);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await data.json();

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();

    fetchCategories();
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
    return (<Box className="flex justify-center items-center h-screen">
      <CircularProgress />
      <p>Carregando...</p>
    </Box>)
  }

  return (
    <main className="h-full mt-28">
      <Cart cart={cart} />
      <Box className="grid gap-4 grid-cols-1 py-4 xl:grid-cols-3 md:grid-cols-2">
        {products?.map((product) => (<CardProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
          onChange={handleCart}
          cart={cart}
        />))}
      </Box>
    </main>
  )
}
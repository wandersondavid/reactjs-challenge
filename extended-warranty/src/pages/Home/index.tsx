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
    return (<Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
      <p>Carregando...</p>
    </Box>)
  }

  return (
    <main style={{ height: '100%' }}>
      <h1>Home</h1>
      <Cart cart={cart} />
      <CardContent sx={{
        display: 'grid',
        gridTemplateColumns: '384px 384px 384px',
        padding: '16px 0px 20px 0px',
        gridGap: 14,
        '@media (max-width: 1200px)': {
          gridTemplateColumns: '384px 384px',
          justifyContent: 'center'
        },
        '@media (max-width: 840px)': {
          gridTemplateColumns: '384px'
        }
      }}>
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
      </CardContent>
    </main>
  )
}
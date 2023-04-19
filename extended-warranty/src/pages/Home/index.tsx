import { useEffect, useState } from "react";
import { Product } from "../../types/produts";
import { CardProduct } from "../../components/CardProduct";
import { CardContent } from "@mui/material";
import { Cart } from "../../components/cart";
import { useShoppingCart } from "../../context/context";

type Select = {
  [key: string]: (product: Product) => void;
}

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { cart } = useShoppingCart()

  console.log(cart);

  const fetchProducts = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products');
      const products = await data.json();
      setProducts(products);

    } catch (error) {
      console.log(error);
    }
  }

  const fetchCategories = async () => {
    try {
      const data = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await data.json();
      console.log(categories);

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

  return (
    <main style={{ height: '100%' }}>
      <h1>Home</h1>
      <Cart cart={cart} />
      <CardContent sx={{ display: 'grid', gridTemplateColumns: '384px 384px 384px', padding: '16px 0px 20px 0px', gridGap: 16 }}>
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
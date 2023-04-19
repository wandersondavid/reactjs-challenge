import { useEffect, useState } from "react";
import { Product } from "../../types/produts";
import { CardProduct } from "../../components/CardProduct";
import { CardContent } from "@mui/material";



export const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <main>
      <h1>Home</h1>

      <CardContent sx={{ display: 'grid' ,gridTemplateColumns: '384px 384px 384px', gridGap: 16}}>
        {products?.map((product) => (<CardProduct
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />))}
      </CardContent>
    </main>
  )

}
import { useCallback, useEffect, useState } from "react";

type rating = {
  rate: number;
  count: number;
};


type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
}


export const Home = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try{
      const data = await fetch('https://fakestoreapi.com/products');
      const products = await data.json();
      setProducts(products);

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Home</h1>

      {products?.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.rating.rate}</p>
          <p>{product.rating.count}</p>
        </div>
      ))}


    </main>
  )

}
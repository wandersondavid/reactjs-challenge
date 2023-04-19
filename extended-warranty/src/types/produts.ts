export type rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
}

export type Cart = {
  [key: number]: {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
  };
}

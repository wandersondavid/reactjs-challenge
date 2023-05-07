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
  images: string;
  rating: rating;
}

export type Cart = {
  [key: number]: {
    id: number;
    title: string;
    price: number;
    images: string;
    amount: number;
    extraWarranty?: number;
  };
}

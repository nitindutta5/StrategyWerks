export type ProductType = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    rating: { rate: number; count: number };
  };
  
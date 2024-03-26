export type TProductItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  total?: number;
  rating: {
    rate: number;
    count: number;
  };
};

export type TObj = {
  [key: string]: unknown;
};

export type TObjCart = {
  [key: string]: TProductItem;
};

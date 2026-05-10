export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: string;
  images: string[];
};

export type Product = {
  productCard: ProductType;
};

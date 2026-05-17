export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  brand: string;
  price: string;
  images: string[];
  availabilityStatus: string;
  reviews: Review[];
  thumbnail: string;
};

export type Product = Pick<
  {
    productCard: ProductType;
  },
  'productCard'
>;

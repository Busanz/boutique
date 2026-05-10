import { useEffect, useState } from 'react';
import type { ProductType } from '../../utils/types';
import ProductCard from '../ProductCard';

type CategoryProps = {
  selectedCategory: string | null;
};

const ProductByCategoy = ({ selectedCategory = 'beauty' }: CategoryProps) => {
  const [productsByCategory, setProductByCategory] = useState<ProductType[]>(
    [],
  );

  const URL: string = `https://dummyjson.com/products/category/${selectedCategory?.toLowerCase().replace(' ', '-')}`;

  useEffect(() => {
    const loadCategoryProducts = async () => {
      try {
        const response: Response = await fetch(URL);
        const data = await response.json();
        setProductByCategory(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategoryProducts();
  }, [URL]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-auto gap-5">
      {productsByCategory.map((product) => (
        <ProductCard key={product.id} productCard={product} />
      ))}
    </section>
  );
};

export default ProductByCategoy;

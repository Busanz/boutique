import { useEffect, useState } from 'react';
import type { ProductType } from '../../utils/types';
import ProductCard from '../ProductCard';

type APIDataType = {
  products: ProductType[];
};

const Randomproducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const generateRandomNumbers = () => {
    const randomNumbers: number[] = [];
    while (randomNumbers.length < 12) {
      const randomNumber: number = Math.floor(Math.random() * 194) + 1;

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const URL: string = `https://dummyjson.com/products/?limit=0`;

        const response: Response = await fetch(URL);
        const data: APIDataType = await response.json();

        const randomProductIds: number[] = generateRandomNumbers();
        const randomProducts: ProductType[] = [];

        randomProductIds.forEach((id) => {
          const product: ProductType | undefined = data.products.find(
            (p) => p.id === id,
          );
          if (product) randomProducts.push(product);
        });

        setProducts(randomProducts);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, []);

  if (products.length === 0) return <div>Product is sold out</div>;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5">
      {products.map((product: ProductType) => (
        <ProductCard key={product.id} productCard={product} />
      ))}
    </section>
  );
};

export default Randomproducts;

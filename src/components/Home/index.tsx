import { useEffect, useState } from 'react';
import ProductByCategory from '../ProductsByCategory';
import RandomProducts from '../Randomproducts';
import Navbar from '../Navbar';
import { useCart } from '../../hooks/useCart';

type CategoryType = {
  slug: string;
  name: string;
  url: string;
};

const Home = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { cartProducts, cartProductCount, addToCart, removeFromCart } =
    useCart();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response: Response = await fetch(
          'https://dummyjson.com/products/categories',
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCategories();
  }, []);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsDrawerOpen(false);
  };

  const handleClickLogo = () => {
    setSelectedCategory(null);
  };
  return (
    <main className="relative flex flex-col justify-center w-full px-3 sm:px-12 md:px-14lg:px-24 py-2">
      <Navbar
        onClickNavbar={handleClickLogo}
        productCountNavbar={cartProductCount}
        cartProductsNavbar={cartProducts}
        removeFromCartNavbar={removeFromCart}
      />
      <section
        className="flex w-fit justify-center p-1 mx-auto mb-3 cursor-pointer"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-text-search"
        >
          <path d="M21 5H3" />
          <path d="M10 12H3" />
          <path d="M10 19H3" />
          <circle cx="17" cy="15" r="3" />
          <path d="m21 19-1.9-1.9" />
        </svg>
        <h1 className="px-3 text-lg md:text-xl">
          Categories
          <span className="inline-block text-[15px] md:text-xl px-3 text-primary font-extralight">
            {selectedCategory}
          </span>
        </h1>
      </section>

      {isDrawerOpen && (
        <div className="absolute flex flex-wrap w-full max-w-6xl justify-center pt-2 pb-4 px-4 gap-4 top-32 left-1/2 -translate-x-1/2 bg-tertiary">
          {categories.map((item) => (
            <p
              key={item.slug}
              className="w-36 md:w-48 text-center text-sm md:text-[15px] px-2 md:px-4 py-2 cursor-pointer bg-bg hover:bg-gray-100 transition-colors"
              onClick={() => handleCategorySelect(item.name)}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}

      {selectedCategory && (
        <ProductByCategory
          selectedCategory={selectedCategory}
          addtoCartCategory={addToCart}
        />
      )}
      {!selectedCategory && <RandomProducts addtoCartRandom={addToCart} />}
    </main>
  );
};

export default Home;

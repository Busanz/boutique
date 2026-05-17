import { useState, useEffect, useRef } from 'react';
import type { ProductType } from '../utils/types';

export const useCart = () => {
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  const [cartProductCount, setCartProductCount] = useState<number>(0);
  const isLoadingRef = useRef(false);

  const loadCart = () => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    const allProducts: ProductType[] = JSON.parse(
      localStorage.getItem('productInCart') || '[]',
    );
    setCartProducts(allProducts);
    setCartProductCount(allProducts.length);
    isLoadingRef.current = false;
  };

  const addToCart = (product: ProductType) => {
    const currentCart: ProductType[] = JSON.parse(
      localStorage.getItem('productInCart') || '[]',
    );

    const isInCart = currentCart.some((el) => el.id === product.id);

    if (!isInCart) {
      const updatedCart = [product, ...currentCart];
      localStorage.setItem('productInCart', JSON.stringify(updatedCart));

      setCartProducts(updatedCart);
      setCartProductCount(updatedCart.length);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);
  return { cartProducts, cartProductCount, addToCart };
};

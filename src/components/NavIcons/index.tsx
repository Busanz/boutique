import { useState } from 'react';
import type { ProductType } from '../../utils/types';
import CartDisplay from '../CartDisplay';

type NavIconsType = {
  productCountNavIcons: number;
  cartProductsNavIcons: ProductType[];
  removeFromCartNavIcons: (id: number) => void;
};

const NavIcons = ({
  productCountNavIcons,
  cartProductsNavIcons,
  removeFromCartNavIcons,
}: NavIconsType) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const onCloseCartDisplay = () => {
    setIsClicked(false);
  };
  // console.log(cartProductsNavIcons);
  return (
    <div className="flex space-x-2 md:space-x-3">
      <div className="relative" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart-icon lucide-shopping-cart p-2 hover:stroke-primary cursor-pointer"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        <span className="absolute top-1 right-1 grid min-h-5 min-w-5 translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-primary text-[13px] text-text">
          {productCountNavIcons}
        </span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--text)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-moon-icon lucide-moon p-2"
        >
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </svg>
      </div>
      <CartDisplay
        isOpenCart={isClicked}
        onCloseCart={onCloseCartDisplay}
        productsInCart={cartProductsNavIcons}
        removeFromCartDisplay={removeFromCartNavIcons}
      />
    </div>
  );
};

export default NavIcons;

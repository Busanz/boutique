import { useState } from 'react';
import type { ProductType } from '../../utils/types';
import ModalProduct from '../ModalProduct';
import AddToCartButton from '../AddToCartButton';

type ProductCardProps = {
  productCard: ProductType;
  addtoCartProductCard: (product: ProductType) => void;
};

const ProductCard = ({
  productCard,
  addtoCartProductCard,
}: ProductCardProps) => {
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpenModel(!isOpenModel);
  };
  return (
    <article
      key={productCard.id}
      className="flex flex-col w-fit max-w-96 h-full bg-tertiary/10 border border-secondary dark:border-bg p-4"
    >
      <img
        src={productCard.images[0] || 'fallback_productImage.png'}
        alt={productCard.title}
      />
      <h2 className="font-light text-xl pb-2">{productCard.title}</h2>
      <p className="font-extralight text-md pb-2 mb-2">
        {productCard.description}
      </p>
      <div className="flex flex-col gap-4 justify-start mt-auto">
        <p className="text-primary text-xl">${productCard.price}</p>
        <div className="flex gap-4 items-center mt-2">
          <span
            onClick={handleClick}
            className="p-1.5 bg-tertiary hover:bg-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-expand-icon lucide-expand text-bg dark:text-text"
            >
              <path d="m15 15 6 6" />
              <path d="m15 9 6-6" />
              <path d="M21 16v5h-5" />
              <path d="M21 8V3h-5" />
              <path d="M3 16v5h5" />
              <path d="m3 21 6-6" />
              <path d="M3 8V3h5" />
              <path d="M9 9 3 3" />
            </svg>
          </span>

          <AddToCartButton
            productAdd={productCard}
            addtoCartButton={addtoCartProductCard}
          />
        </div>
      </div>
      {isOpenModel && (
        <ModalProduct
          isPressedModal={isOpenModel}
          setIsOpenModel={handleClick}
          product={productCard}
          addtoCartButtonModal={addtoCartProductCard}
        />
      )}
    </article>
  );
};

export default ProductCard;

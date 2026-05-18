import { useState } from 'react';
import type { ProductType } from '../../utils/types';
import Alert from '../Alert';

type AddToCartProps = {
  productAdd: ProductType;
  addtoCartButton: (productAdd: ProductType) => void;
  isDarkAddToCart?: boolean;
};
const AddToCartButton = ({
  productAdd,
  addtoCartButton,
  isDarkAddToCart,
}: AddToCartProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const onCancelAlert = () => {
    setIsAlertOpen(false);
  };

  const onConfirmAlert = () => {
    addtoCartButton(productAdd);
    setIsAlertOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsAlertOpen(true)}
        className="px-5 py-1.5 font-light text-text bg-tertiary hover:bg-secondary"
      >
        Add to cart
      </button>

      <Alert
        isAlertOpen={isAlertOpen}
        onCancel={onCancelAlert}
        onConfirm={onConfirmAlert}
        isDarkAlert={isDarkAddToCart}
      />
    </>
  );
};

export default AddToCartButton;

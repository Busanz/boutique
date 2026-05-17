import { useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { TfiArrowLeft, TfiArrowRight } from 'react-icons/tfi';

import type { ProductType } from '../../utils/types';
import AddToCartButton from '../AddToCartButton';
import RatingCard from '../RatingCard';

type ModalProductProps = {
  isPressedModal: boolean;
  setIsOpenModel: (value: boolean) => void;
  product: ProductType;
  addtoCartButtonModal: (product: ProductType) => void;
};

const ModalProduct = ({
  isPressedModal,
  setIsOpenModel,
  product,
  addtoCartButtonModal,
}: ModalProductProps) => {
  const IMAGE_ARRAY_LEN: number = product.images.length - 1;
  const isImages: boolean = IMAGE_ARRAY_LEN !== 0;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextImage = () => {
    const isLastImage: boolean = currentIndex === IMAGE_ARRAY_LEN;
    const nextImage: number = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(nextImage);
  };
  const previousImage = () => {
    const isFirstImage: boolean = currentIndex === 0;
    const previousImage: number = isFirstImage
      ? IMAGE_ARRAY_LEN
      : currentIndex - 1;
    setCurrentIndex(previousImage);
  };
  return (
    <Dialog
      open={isPressedModal}
      onClose={() => setIsOpenModel(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500/90" />

      <div className="flex fixed items-center justify-center p-4 inset-0 z-10">
        <DialogPanel className="relative flex flex-col w-full max-w-3xl max-h-[90vh] overflow-hidden bg-bg">
          <DialogTitle
            as="h3"
            className="px-2 pt-2.5 font-light text-xl md:text-2xl text-center"
          >
            {product.title}-{product.brand || 'No specific brand'}
          </DialogTitle>
          <div className="flex-1 overflow-y-auto">
            <div className="px-4 sm:px-6 py-6">
              <div className="relative group mb-6 flex flex-col justify-center bg-[#eef3e3] p-4">
                <img
                  src={product.images[currentIndex]}
                  alt={`Product image of ${product.title}`}
                  className="w-full max-h-96 object-contain"
                />
                {isImages && (
                  <>
                    <button
                      className={`absolute w-fit h-fit rounded-full z-20  p-2 bg-secondary opacity-100 md:opacity-0 transition-opacity duration-500 group-hover:opacity-100 top-[50%] translate-x-0 -translate-y-1/2 right-4 text-2xl cursor-pointer`}
                    >
                      <TfiArrowRight size={20} onClick={nextImage} />
                    </button>
                    <button
                      className={`absolute w-fit h-fit rounded-full z-20 p-2 bg-secondary opacity-100 md:opacity-0 transition-opacity duration-500 group-hover:opacity-100 top-[50%] translate-x-0 -translate-y-1/2 left-4 text-2xl cursor-pointer`}
                    >
                      <TfiArrowLeft size={20} onClick={previousImage} />
                    </button>

                    <div className="flex justify-center gap-3 mt-3">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`text-2xl cursor-pointer transition-colors ${index === currentIndex ? 'text-secondary' : 'text-gray-600'}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={
                              index === currentIndex ? '#afc97e' : '#d4e6b5'
                            }
                            stroke={
                              index === currentIndex ? '#afc97e' : '#d4e6b5'
                            }
                            strokeWidth={index === currentIndex ? 1.5 : 0}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-small-icon lucide-circle-small"
                          >
                            <circle cx="12" cy="12" r="6" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="text-sm md:text-lg font-extralight text-primary leading-relaxed mb-3">
                {product.availabilityStatus}
              </p>
              <AddToCartButton
                productAdd={product}
                addtoCartButton={addtoCartButtonModal}
              />
              <p className="text-sm md:text-lg font-light text-text leading-relaxed my-3 text-pretty">
                {product.description}
              </p>
              <p className="text-lg md:text-xl font-semibold text-text leading-relaxed mb-3">
                {product.price}
                <span className="text-sm md:text-lg"> SEK</span>
              </p>
              <RatingCard reviewRating={product.reviews} />
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
            <button
              type="button"
              data-autofocus
              onClick={() => setIsOpenModel(false)}
              className="mb-3 cursor-pointer"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
export default ModalProduct;

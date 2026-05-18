import type { ProductType } from '../../utils/types';

type CartDisplayProps = {
  isOpenCart: boolean;
  onCloseCart: () => void;
  productsInCart: ProductType[];
  removeFromCartDisplay: (id: number) => void;
  isDarkCartDisplay: boolean;
};

const CardDisplay = ({
  isOpenCart,
  onCloseCart,
  productsInCart,
  removeFromCartDisplay,
  isDarkCartDisplay,
}: CartDisplayProps) => {
  if (!isOpenCart) return null;

  const initialValue: number = 0;
  const subtotal: number = productsInCart.reduce(
    (total: number, currentValue: ProductType) =>
      total + Number(currentValue.price),
    initialValue,
  );

  let discount: number = 0.0;
  if (subtotal >= 500) {
    discount = subtotal * 0.1;
  }
  const total: number = subtotal - discount;

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full gap-3 p-2 md:p-3 bg-gray-500/90 ${isDarkCartDisplay ? 'dark' : ''} z-50`}
      onClick={onCloseCart}
    >
      <div className="relative flex flex-col w-full h-full items-end">
        <div
          className="bg-bg dark:bg-text flex flex-col h-full w-full sm:max-w-lg gap-2 border-b border-secondary overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex w-full justify-between items-center pr-3 mb-3 bg-secondary">
            <h2 className="font-normal text-base sm:text-lg text-text px-6 py-4">
              Cart
              <span className="text-sm">
                ({productsInCart.length} products)
              </span>
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x cursor-pointer p-2 transition duration-300 hover:rotate-90 text-text"
              onClick={onCloseCart}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>

          {productsInCart.length === 0 ? (
            <div className="px-3 sm:px-5 text-red-400 dark:text-red-300 ">
              <p>Cart is empty, add to cart your favorite product</p>
            </div>
          ) : (
            productsInCart.map((product) => (
              <div
                key={product.id}
                className="px-4 border-b border-secondary dark:border-secondary/15 pb-2 last:border-0"
              >
                <div className="w-full flex items-center">
                  <div className="w-16 h-16">
                    <img
                      src={product.thumbnail}
                      alt={`Thumbnail of ${product.title}`}
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base text-text dark:text-bg font-light text-pretty">
                      {product.title}
                    </h3>
                    <p className=" text-primary font-medium">
                      {product.price}
                      <span className="text-sm font-light"> SEK</span>
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trash2-icon lucide-trash-2 stroke-red-300 dark:stroke-red-100 hover:stroke-red-400 cursor-pointer"
                      onClick={() => {
                        console.log(product.id);
                        removeFromCartDisplay(product.id);
                      }}
                    >
                      <path d="M10 11v6" />
                      <path d="M14 11v6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M3 6h18" />
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className="flex flex-col bg-tertiary dark:bg-secondary w-full h-fit p-6 mt-auto gap-3">
            <div className="flex justify-between flex-wrap text-text">
              <h2 className="font-light">Subtotal:</h2>
              <p>
                {subtotal.toFixed(2)}
                <span className="text-sm font-light"> SEK</span>
              </p>
            </div>
            <div className="flex justify-between opacity-60 text-text">
              <h2 className="font-light ">Discount:</h2>{' '}
              <p>
                {discount.toFixed(2)}
                <span className="text-sm font-light"> SEK</span>
              </p>
            </div>
            <div className="flex justify-between font-medium text-base sm:text-base text-text">
              <h2 className="">Total:</h2>{' '}
              <p>
                {total.toFixed(2)}{' '}
                <span className="text-sm font-light"> SEK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDisplay;

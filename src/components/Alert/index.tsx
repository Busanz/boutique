type AlertProps = {
  isAlertOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const Alert = ({ isAlertOpen, onCancel, onConfirm }: AlertProps) => {
  if (!isAlertOpen) return null;
  return (
    <div className="fixed inset-0 items-center justify-center bg-gray-500/90">
      <div className="relative flex w-full h-full p-4 justify-center items-center">
        <div className="bg-bg max-w-lg p-4">
          <h3 className="text-base md:text-lg leading-relaxed font-light">
            Save to local storage?
          </h3>
          <p className="mt-3 text-sm md:text-base leading-relaxed font-extralight text-text">
            This product details will be saved to your local storage. You can
            remove it at any time.
          </p>

          <div className="flex gap-5 mt-5 justify-end">
            <button
              className="px-5 md:px-7 py-2 text-sm md:text-base font-light bg-tertiary transition hover:bg-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="px-5 md:px-7 py-2 text-sm md:text-base font-light bg-tertiary transition hover:bg-secondary"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;

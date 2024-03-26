import useCart from "../../../stores/cart";
import { TProductItem } from "../../../types";

const PlusMinus = ({ item }: { item: TProductItem }) => {
  const onIncrease = useCart((state) => state.onIncrease);
  const onDecrease = useCart((state) => state.onDecrease);
  const onAdd = useCart((state) => state.onAdd);
  const cart = useCart((state) => state.cart);
  const singleItem = cart?.[item?.id];

  const onAddCart = (payload: TProductItem) => {
    onAdd({
      item: payload,
    });
  };

  return singleItem ? (
    <div className="flex flex-col justify-center items-center mt-6">
      <div className=" flex items-center px-3 max-w-52">
        <button
          onClick={() => onDecrease({ id: singleItem?.id })}
          type="button"
          id="decrement-button"
          data-input-counter-decrement="quantity-input"
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          max={100}
          id="quantity-input"
          data-input-counter
          data-input-counter-min="1"
          data-input-counter-max="50"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={singleItem?.total}
          required
        />
        <button
          type="button"
          onClick={() => onIncrease({ id: singleItem?.id })}
          id="increment-button"
          data-input-counter-increment="quantity-input"
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <div
      className="mt-6"
      onClick={() => {
        onAddCart(item);
      }}
    >
      <a className="cursor-pointer relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
        Add to Cart
      </a>
    </div>
  );
};

export default PlusMinus;

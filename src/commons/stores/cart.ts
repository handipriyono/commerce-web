import { create } from "zustand";
import { TProductItem, TObjCart } from "../types";

type TUseCart = {
  cart: TObjCart;
  onAdd: (p: { item: TProductItem }) => void;
  onRemove: () => void;
  onIncrease: ({ id }: { id: number | string }) => void;
  onDecrease: ({ id }: { id: number | string }) => void;
};

const useCart = create<TUseCart>((set, get) => ({
  cart: {},
  onAdd: ({ item }) => {
    const { cart } = get();
    return set({
      cart: {
        ...cart,
        [item?.id]: {
          ...item,
          total: 1,
        },
      },
    });
  },
  onRemove: () => {
    return set({
      cart: {},
    });
  },
  onIncrease: ({ id }) => {
    const { cart } = get();
    return set({
      cart: {
        ...cart,
        [id]: {
          ...cart?.[id],
          total: !cart?.[id]?.total ? 1 : (cart?.[id]?.total || 0) + 1,
        },
      },
    });
  },
  onDecrease: ({ id }) => {
    const { cart } = get();
    const totalCurrent = !cart?.[id]?.total ? 0 : (cart?.[id]?.total || 0) - 1;
    let tempCart = {
      [id]: {
        ...cart?.[id],
        total: totalCurrent,
      },
    };

    if (totalCurrent == 0) {
      tempCart = {};
      delete cart?.[id];
    }
    return set({
      cart: {
        ...cart,
        ...tempCart,
      },
    });
  },
}));

export default useCart;

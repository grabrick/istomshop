import { createSlice } from "@reduxjs/toolkit";
import { IBasket } from "@/types/types";

type State = {
  basket: IBasket[];
  totalPrice: number;
};

const initialState: State = {
  basket: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.basket.find((item) => item.id === newItem.id) as unknown as IBasket;

      if (existingItem) {
        existingItem.count += newItem.count;
      } else {
        state.basket.push(newItem);
      }

      state.totalPrice += newItem.price * newItem.count;
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const indexToRemove = state.basket.findIndex((item) => item.id === itemIdToRemove);

      if (indexToRemove !== -1) {
        const removedItem = state.basket[indexToRemove];
        state.basket.splice(indexToRemove, 1);
        state.totalPrice -= removedItem.price * removedItem.count;
      }
    },
    increment: (state, action) => {
      const itemIdToIncrement = action.payload;
      const itemToIncrement = state.basket.find((item) => item.id === itemIdToIncrement);

      if (itemToIncrement) {
        itemToIncrement.count += 1;
        state.totalPrice += itemToIncrement.price;
      }
    },
    decrement: (state, action) => {
      const itemIdToDecrement = action.payload;
      const itemToDecrement = state.basket.find((item) => item.id === itemIdToDecrement);

      if (itemToDecrement) {
        if (itemToDecrement.count > 1) {
          itemToDecrement.count -= 1;
          state.totalPrice -= itemToDecrement.price;
        } else {
          const indexToRemove = state.basket.findIndex((item) => item.id === itemIdToDecrement);
          if (indexToRemove !== -1) {
            const removedItem = state.basket[indexToRemove];
            state.basket.splice(indexToRemove, 1);
            state.totalPrice -= removedItem.price * removedItem.count;
          }
        }
      }
    },
  },
});

export const { addItem, removeItem, increment, decrement } = basketSlice.actions;

export default basketSlice.reducer;

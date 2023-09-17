import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
  searchResult: []
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.card = action.payload
    },
    searchCards: (state, action) => {
      const value = action.payload

      const findElements = state.card.filter((items: any) => items.title === value)
      if(findElements) {
        state.searchResult = findElements
      } else {
        state.searchResult = []
      }
    }
  }
});

export const { setCards, searchCards } = cardSlice.actions;

export default cardSlice.reducer;
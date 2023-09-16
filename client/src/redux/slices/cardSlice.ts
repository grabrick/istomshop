import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action) => {
        state.card = action.payload
    }
  }
});

export const { setCards } = cardSlice.actions;

export default cardSlice.reducer;
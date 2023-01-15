import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john " + state;
    },
  },
});

const list = createSlice({
  name: "list",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      const idx = state.findIndex((it) => {
        return it.id === action.payload;
      });
      state[idx].count++;
    },
  },
  addItem() {
    
  }
});

export let { changeCount } = list.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    list: list.reducer,
  },
});

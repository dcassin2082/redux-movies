import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};
export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearch: (state) => {
      state.searchText = "";
    },
  },
});

export const { setSearch, clearSearch } = navbarSlice.actions;
export default navbarSlice.reducer;

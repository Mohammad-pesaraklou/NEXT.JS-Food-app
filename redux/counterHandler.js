const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedItems: [],
  totalItems: 0,
  checkOut: false,
  clear: false,
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        console.log(action.payload);
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
        state.selectedItems = [...state.selectedItems];
      }
    },
    removeItem: (state, action) => {
      const filteredData = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...filteredData];
    },
    increase: (state, action) => {
      const increaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity++;
    },
    decrease: (state, action) => {
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity--;
    },
  },
});

export const { addItem, removeItem, decrease, increase } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

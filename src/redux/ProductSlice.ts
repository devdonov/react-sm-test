import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBurgers, getDrinks } from "../api";
import { Product } from "../type";
import { AppThunk } from "./store";

const initialState: { drinks: Product[], burgers: Product[], isLoading: boolean } = {
  drinks: [],
  burgers: [],
  isLoading: true
}

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setDrinks: (state, action: PayloadAction<Product[]>) => {
      state.drinks = action.payload
    },
    setBurgers: (state, action: PayloadAction<Product[]>) => {
      state.burgers = action.payload
    },
    setLoaded: (state) => {
      state.isLoading = false
    }
  }
});

export default slice.reducer;

const { setBurgers, setDrinks, setLoaded } = slice.actions;

export const fetchProducts = (): AppThunk => async (dispatch) => {
  const drinks = await getDrinks();
  const burgers = await getBurgers();
  console.log(drinks, burgers)
  dispatch(setDrinks(drinks));
  dispatch(setBurgers(burgers));
  dispatch(setLoaded());
}

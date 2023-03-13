
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/getAllProducts', async (_, thunkApi) => {
  try {
    const response = await fetch(`api/products`, { cache: 'force-cache' })
    const data = await response.json()
    const product = data.products
    return product
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
})


const initialState = {
  items: [],
  allProducts: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { product, quantity, dolar } = action.payload;
      const existingItem = state.items.find((item) => item.product.name === product.name);
      if (existingItem) {
        existingItem.quantity += parseInt(quantity);
      } else {
        state.items.push({ product, quantity, dolar });
      }
    },
    removeFromBasket: (state, action) => {
      const { name } = action.payload;
      state.items = state.items.filter((item) => item.product.name !== name);
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    }, 
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = state.allProducts.concat(action.payload);
    })
  }
});

export const { addToBasket, removeFromBasket, setAllProducts } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => (total + (item.product.price*item.dolar*Number(item.quantity))), 0)
export const selectAllProducts = (state) => state.basket.allProducts;

export default basketSlice.reducer;
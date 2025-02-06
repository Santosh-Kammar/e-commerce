import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch categories
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      return [{ slug: "All", name: "All" }, ...data];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    { selectedCategory, currentPage, itemsPerPage },
    { rejectWithValue }
  ) => {
    try {
      const categoryFilter =
        selectedCategory === "All"
          ? "https://dummyjson.com/products"
          : `https://dummyjson.com/products/category/${selectedCategory}`;
      const skip = (currentPage - 1) * itemsPerPage;

      const response = await fetch(
        `${categoryFilter}?limit=${itemsPerPage}&skip=${skip}`
      );
      if (!response.ok) throw new Error("Failed to fetch products");

      const data = await response.json();
      return { products: data.products || [], total: data.total || 0 };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    products: [],
    totalProducts: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Categories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.products;
        state.totalProducts = action.payload.total;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("TCL: action.payload", action.payload);
      });
  },
});

export default productSlice.reducer;

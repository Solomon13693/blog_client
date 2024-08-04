import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        loading: false, 
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setCategories,
    setLoading, 
} = categorySlice.actions;

export const getCategories = (state) => state.categories.categories;
export const getLoading = (state) => state.categories.loading; 

export default categorySlice.reducer;

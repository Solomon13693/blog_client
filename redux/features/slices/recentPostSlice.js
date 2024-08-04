import { createSlice } from '@reduxjs/toolkit';

const recentPostSlice = createSlice({
    name: 'recent_post',
    initialState: {
        posts: [],
        loading: false, 
    },
    reducers: {
        setRecentPost: (state, action) => {
            state.posts = action.payload;
        },
        setloading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const {
    setRecentPost,
    setloading, 
} = recentPostSlice.actions;

export const getRecentPost = (state) => state.recent_post.posts;
export const getRecentLoading = (state) => state.recent_post.loading; 

export default recentPostSlice.reducer;

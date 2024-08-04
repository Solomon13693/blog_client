import { combineReducers, configureStore } from '@reduxjs/toolkit';
import analyticsSlice from './features/slices/admin/analyticsSlice';
import authorAnalyticsSlice from './features/slices/author/authorAnalyticsSlice';
import categorySlice from './features/slices/categorySlice';
import recentPostSlice from './features/slices/recentPostSlice';

const rootReducer = combineReducers({
    admin: combineReducers({
        analytics: analyticsSlice,
    }),
    author: combineReducers({
        analytics: authorAnalyticsSlice,
    }),
    categories: categorySlice,
    recent_post: recentPostSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

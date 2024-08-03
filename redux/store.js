import { combineReducers, configureStore } from '@reduxjs/toolkit';
import analyticsSlice from './features/slices/admin/analyticsSlice';
import authorAnalyticsSlice from './features/slices/author/authorAnalyticsSlice';

const rootReducer = combineReducers({
    admin: combineReducers({
        analytics: analyticsSlice,
    }),
    author: combineReducers({
        analytics: authorAnalyticsSlice,
    }),
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

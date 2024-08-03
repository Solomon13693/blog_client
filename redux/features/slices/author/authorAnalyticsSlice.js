import { createSlice } from '@reduxjs/toolkit';

const authorAnalyticsSlice = createSlice({
  name: 'author_analytics',
  initialState: {
    analytics: null,
    chart: null,
    categories: null,
  },
  reducers: {
    setAnalytics: (state, action) => {
      state.analytics = action.payload;
    },
    setChart: (state, action) => {
      state.chart = action.payload;
    },
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {
    setAnalytics, setChart, setCategory
} = authorAnalyticsSlice.actions;

export const getAnalyticsData = (state) => state.author.analytics.analytics;
export const getChartData = (state) => state.author.analytics.chart;
export const getCategory = (state) => state.author.analytics.categories;

export default authorAnalyticsSlice.reducer;

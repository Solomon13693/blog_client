import { createSlice } from '@reduxjs/toolkit';

const analyticsSlice = createSlice({
  name: 'admin_analytics',
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
  },
});

export const {
    setAnalytics, setChart
} = analyticsSlice.actions;

export const getAnalyticsData = (state) => state.admin.analytics.analytics;
export const getChartData = (state) => state.admin.analytics.chart;

export default analyticsSlice.reducer;

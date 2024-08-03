import { setAnalytics, setCategory, setChart } from "../../slices/author/authorAnalyticsSlice";
import dashboardService from "@/services/dashboardService";

export const fetchAnalyticsData = (token) => async (dispatch, getState) => {

    try {

        const response = await dashboardService.getAnalytics(token);
        dispatch(setAnalytics(response.data));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const fetchChartData = ({ token, period }) => async (dispatch, getState) => {

    try {

        const response = await dashboardService.getChart(token, period);
        dispatch(setChart(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};

export const fetchCategories = () => async (dispatch, getState) => {

    try {

        const response = await dashboardService.getCategories();
        dispatch(setCategory(response.category));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};

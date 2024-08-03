import adminService from "@/services/adminService";
import { setAnalytics, setChart } from "../../slices/admin/analyticsSlice";

export const fetchAnalyticsData = (token) => async (dispatch, getState) => {

    try {

        const response = await adminService.getAnalytics(token);
        dispatch(setAnalytics(response.data));

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export const fetchChartData = ({ token, period }) => async (dispatch, getState) => {

    try {

        const response = await adminService.getChart(token, period);
        dispatch(setChart(response.data));

    } catch (error) {
        console.error('Error fetching brand data:', error);
    }
};


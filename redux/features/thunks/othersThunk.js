import userServices from "@/services/userServices";
import { setCategories, setLoading } from "../slices/categorySlice";
import { setloading, setRecentPost } from "../slices/recentPostSlice";

export const fetchUserCategory = () => async (dispatch) => {
    try {
        dispatch(setLoading(true)); 
        const response = await userServices.getCategories();
        dispatch(setCategories(response?.category));  
    } catch (error) {
        console.error('Error fetching brand data:', error);
    } finally {
        dispatch(setLoading(false)); 
    }
};

export const fetchRecentPosts = () => async (dispatch) => {
    try {
        dispatch(setloading(true)); 
        const response = await userServices.getRecentPosts();
        dispatch(setRecentPost(response?.data));  
    } catch (error) {
        console.error('Error fetching brand data:', error);
    } finally {
        dispatch(setloading(false)); 
    }
};

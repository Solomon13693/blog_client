import { axios } from "@/lib";

const updatePassword = async (payload, token) => {
    const response = await axios.patch("auth/profile/password", payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const updateProfile = async (payload, token) => {
    const response = await axios.patch("auth/profile", payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const uploadPost = async (payload, token) => {
    const response = await axios.post(`/post`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const updatePost = async (payload, id, token) => {
    const response = await axios.patch(`/post/${id}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const getAnalytics = async (token) => {
    const response = await axios.get(`/author/posts/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getChart = async (token, payload) => {
    const response = await axios.get(`/author/posts/chart?period=${payload}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPosts = async (token, query) => {
    const response = await axios.get('/author/posts', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPost = async (id, accessToken) => {
    const response = await axios.get(`/author/post/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
};

const deletePost = async (id, token) => {
    const response = await axios.delete(`/post/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getCategories = async () => {
    const response = await axios.get(`/category`);
    return response.data;
};

const dashboardService = {
    updatePassword,
    updateProfile,
    getAnalytics,
    getChart,

    getPosts,
    getPost,
    getCategories,
    deletePost,

    uploadPost,
    updatePost
};

export default dashboardService;
import { axios } from "@/lib";

const uploadPost = async (payload, token) => {
    const response = await axios.post(`/post`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const getAnalytics = async (token) => {
    const response = await axios.get(`admin/posts/analytics`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getChart = async (token, payload) => {
    const response = await axios.get(`admin/posts/chart?period=${payload}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getPosts = async (token, query) => {
    const response = await axios.get('/admin/posts', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getAuthors = async (token, query) => {
    const response = await axios.get('admin/authors', {
        params: query,
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const authorAction = async (token, id, payload) => {
    const response = await axios.post(`admin/author/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const uploadCategory = async (payload, token) => {
    const response = await axios.post(`/category`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

const updateCategory = async (id, payload, token) => {
    const response = await axios.patch(`/category/${id}`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

const deleteCategory = async (id, token) => {
    const response = await axios.delete(`/category/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return response.data;
};

const getPost = async (id, accessToken) => {
    const response = await axios.get(`/admin/post/${id}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
};

const adminService = {
    getAnalytics,
    getChart,

    uploadPost,
    getAuthors,
    authorAction,
    uploadCategory,
    updateCategory,
    deleteCategory,
    getPosts,
    getPost
};

export default adminService;
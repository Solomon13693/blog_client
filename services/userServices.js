import axios from "@/lib/axiosConfig";


const getCategories = async () => {
    const response = await axios.get('/category');
    return response.data;
};

const getRecentPosts = async () => {
    const response = await axios.get('/post/recent');
    return response.data;
};

const getPost = async (slug) => {
    const response = await axios.get(`/post/${slug}`);
    return response.data;
};

const getPosts = async (params) => {
    const response = await axios.get(`/post`, {
        params: params
    });
    return response.data;
};

const userServices = {
    getCategories,
    getRecentPosts,
    getPost,
    getPosts
};

export default userServices;
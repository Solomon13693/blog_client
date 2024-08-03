import { axios, setCookie } from "@/lib";

const register = async (payload) => {
    const response = await axios.post("/auth/register", payload);
    return response.data;
};
const authService = {
    register,
};

export default authService;
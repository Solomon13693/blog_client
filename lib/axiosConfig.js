import axios from "axios";

export default axios.create({
    // baseURL: 'http://127.0.0.1:5000/api/v1',
    baseURL: 'https://blog-server-8qlm.onrender.com/api/v1',
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})
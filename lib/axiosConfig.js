import axios from "axios";

export default axios.create({
    baseURL: 'http://127.0.0.1:5000/api/v1',
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    }
})
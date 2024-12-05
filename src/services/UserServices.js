import axios from "axios";

export const axiosJWT = axios.create();

export const signInUser = async (data) => {
    console.log("services", data);
    try {
        const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};
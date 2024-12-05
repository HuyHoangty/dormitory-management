import axios from "axios";

export const axiosJWT = axios.create();

export const signInUser = async (data) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

export const getDetailStudent = async (id, access_token) => {
    console.log("services", access_token, id);
    try {
        const res = await axiosJWT.get(`http://localhost:3001/api/student/get-detail-student/${id}`, {
            headers: {
                token: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};
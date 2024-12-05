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

export const signUpUser = async (data) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

export const getDetailStudent = async (id, access_token) => {
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
export const createStudent = async (id, data) => {
    try {
        const res = await axiosJWT.post(`http://localhost:3001/api/student/create-student/${id}`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.get("/get-detail-room/:id", roomController.getDetailRoom); // lấy cả các sinh viên trong phòng
export const getDetailRoom = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/room/get-detail-room/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}
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

export const getDetailRoom = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/room/get-detail-room/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

export const updateUser = async (id, data, access_token) => {
    try {
        const newData = {
            "password": data,
        }
        const res = await axiosJWT.put(`http://localhost:3001/api/user/update-user/${id}`, newData, {
            headers: {
                token: `Bearer ${access_token}`,
            }
        });
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.post("/create-request/:id", studentRequestsController.createRequest);
export const createRequest = async (id, data) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/student-request/create-request/${id}`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.get("/get-all-requests-student/:id", studentRequestsController.getAllRequestsStudent);
export const getAllRequestsStudent = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/student-request/get-all-requests-student/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

export const getAllFeesRoom = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/api/fees/get-all-fees-room/${id}`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

export const getDetailStaff = async (id, access_token) => {
    try {
        const res = await axiosJWT.get(`http://localhost:3001/api/staff/get-detail-staff/${id}`, {
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

export const getAllRequests = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/api/student-request/get-all-requests`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.put("/update-request-by-staff/:id", studentRequestsController.updateRequestByStaff);  //phê duyệt bởi quản lý
export const updateRequestByStaff = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:3001/api/student-request/update-request-by-staff/${id}`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.get("/get-all-room", roomController.getAllRoom); // body:gender=male
export const getAllRoom = async (data) => {
    try {
        console.log("services", data);
        const res = await axios.get(`http://localhost:3001/api/room/get-all-room`, {
            params: {
                gender: data?.gender, // Thêm tham số cần gửi
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.put("/update-student/:id", authUserMiddleWare, studentController.updateStudent);
export const updateStudent = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:3001/api/student/update-student/${id}`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.put("/update-room/:id", roomController.updateRoom);
export const updateRoom = async (id, data) => {
    try {
        const res = await axios.put(`http://localhost:3001/api/room/update-room/${id}`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.get("/get-all-student", studentController.getAllStudent);
export const getAllStudent = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/api/student/get-all-student`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.get("/get-all-fees", feesController.getAllFees);
export const getAllFees = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/api/fees/get-all-fees`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.post("/create-fees/:id", authStaffMiddleWare, feesController.createFees);
export const createFees = async (id, data, access_token) => {
    try {
        console.log(id, data, access_token);
        const res = await axiosJWT.post(`http://localhost:3001/api/fees/create-fees/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.put("/update-staff/:id", authStaffMiddleWare, staffController.updateStaff);
export const updateStaff = async (id, data, access_token) => {
    try {
        console.log(id, data, access_token);
        const res = await axiosJWT.put(`http://localhost:3001/api/staff/update-staff/${id}`, data, {
            headers: {
                token: `Bearer ${access_token}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}

// router.post("/create-room", roomController.createRoom);
export const createRoom = async (data) => {
    try {
        const res = await axios.post(`http://localhost:3001/api/room/create-room`, data);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
};

// router.get("/get-all-staff", staffController.getAllStaff);
export const getAllStaff = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/api/staff/get-all-staff`);
        return res.data;
    } catch (error) {
        console.error('Error signing in user:', error.response?.data || error.message);
        throw error; // Ném lỗi để React Query xử lý
    }
}
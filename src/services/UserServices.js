import axios from "axios";

export const axiosJWT = axios.create();

export const signInUser = async (data) => {
    const res = await axios.post(
        `http://localhost:3001/api/user/sign-in`,
        data
    );
    return res.data;
};
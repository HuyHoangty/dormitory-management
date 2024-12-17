import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import * as UserServices from "../services/UserServices";
import { useSelector } from 'react-redux';

import {
    faHome,
    faCompass,
    faUser,
    faSignOutAlt,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
function StudentRequest() {
    const user = useSelector((state) => state.user.user);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        request_type: '',
        description: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const isEmptyField = Object.values(formData).some((value) => value === "");
        if (isEmptyField) {
            alert("Vui lòng điền đầy đủ thông tin vào tất cả các trường.");
        }
        // Send request to server
        const res = await UserServices.createRequest(user.user_id, formData)
        console.log("resCreateReq", res);
        if (res?.status === "OK") {
            console.log("gui thanh cong")
            alert("Yêu cầu đã được gửi\nVui lòng đợi phản hồi trong vài ngày");
            navigate("/")
        } else {
            console.log("gui that bai")
            alert("Đã có lỗi xảy ra, vui lòng thử lại");
            setFormData({
                request_type: '',
                description: '',
            });
        }
    };
    return (
        <div className="bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-white py-4">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-1/3">
                        <a href="#">
                            <img
                                src="/src/assets/img/icon_logo/VNU_LOGO.png"
                                alt="VNU Logo"
                                className="w-40"
                            />
                        </a>
                    </div>
                    <div className="w-1/3 text-center">
                        <h1 className="text-2xl font-bold text-blue-700">
                            HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ
                        </h1>
                    </div>
                    <div className="w-1/3 text-right">
                        <img
                            src="/src/assets/img/icon_logo/VNU_CSS_LOGO.png"
                            alt="VNU CSS Logo"
                            className="w-40 inline-block"
                        />
                    </div>
                </div>
            </header>
            {/* Navigation */}
            <nav className="bg-blue-700">
                <div className="container mx-auto px-4 py-2 flex justify-end items-center text-white">
                    <a href="#" className="mx-2 hover:underline">
                        <FontAwesomeIcon icon={faHome} /> Trang chủ
                    </a>
                    <a href="#" className="mx-2 hover:underline">
                        <FontAwesomeIcon icon={faCompass} /> Trang điều khiển
                    </a>
                    <div className="relative inline-block text-left">
                        <button className="inline-flex items-center hover:underline focus:outline-none">
                            <FontAwesomeIcon icon={faUser} /> <span>Tài khoản</span>
                        </button>
                        {/* Dropdown menu */}
                        <div className="hidden origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Main description */}
            <main className="flex-grow container mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
                </h2>
                <form>
                    {/* Tiêu đề */}
                    <div className="mb-4">
                        <label htmlFor="request_type" className="block text-gray-700">
                            Tiêu đề <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="request_type"
                            name="request_type"
                            value={formData.request_type}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            required
                        >
                            <option value="" disabled>
                                -- Chọn yêu cầu --
                            </option>
                            <option value="Đổi phòng">Đổi phòng</option>
                            <option value="Ra khỏi ký túc xá">Ra khỏi ký túc xá</option>
                            <option value="Duyệt vào ký túc xá">Duyệt vào ký túc xá</option>
                            <option value="Khác">Yêu cầu khác</option>
                        </select>
                    </div>

                    {/* Nội dung */}
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-700">
                            Nội dung <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            required
                            rows="5"
                            minLength="3"
                            maxLength="2000"
                        ></textarea>
                    </div>
                    {/* Nút hành động */}
                    <div className="text-center">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="mx-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
                        >
                            Gửi
                            <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                        </button>
                    </div>
                </form>
            </main>
            {/* Footer */}
            <footer className="bg-blue-700 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Hệ Thống Quản Lý Ký Túc Xá</p>
                </div>
            </footer>
        </div>
    );
}
export default StudentRequest;
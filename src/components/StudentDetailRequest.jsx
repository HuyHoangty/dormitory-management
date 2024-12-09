import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import { useLocation } from "react-router-dom";
import * as UserServices from "../services/UserServices";
function HomeStaff() {
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation() || {};
    const item = location.state;

    const [requestsStudent, setRequestsStudent] = useState(item);


    console.log("user: ", user)
    console.log("user[0]", user[0])

    const handleSignOut = () => {
        // Xoá token khỏi localStorage hoặc sessionStorage
        localStorage.removeItem('access_token');  // Hoặc sessionStorage.removeItem('access_token') nếu bạn dùng sessionStorage
        // localStorage.removeItem('persist:root')
        // Đặt lại trạng thái người dùng (nếu bạn sử dụng state quản lý người dùng)
        dispatch(clearUser());

        // Điều hướng về trang chủ
        navigate('/sign-in');
    };


    return (
        <div className="bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-white py-4">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="w-1/3">
                        <a>
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

            {/* Main Content */}
            <div className="flex">
                <aside className="w-1/5 bg-white p-4">
                    <div className="flex items-center m-10">
                        <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                        <div>
                            <p className="text-gray-500">Ban quản lý</p>
                            <p className="font-bold">{user[0]?.full_name}</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li className="mb-4">
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-home mr-3"></i> Trang chủ
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="flex items-center text-blue-500">
                                    <i className="fas fa-tasks mr-3"></i> Quản lý yêu cầu
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-list mr-3"></i> Danh sách sinh viên
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-chart-bar mr-3"></i> Quản lý thanh toán
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-user mr-3"></i> Tài khoản
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-cog mr-3"></i> Cài đặt
                                </a>
                            </li>
                            <li>
                                <a onClick={handleSignOut}
                                    className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-cog mr-3"></i> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="w-4/5 p-6">
                    <h1 className="text-2xl font-bold mb-6">Quản lý yêu cầu</h1>

                    <div className="mb-4">
                        <a className="text-black-500 pb-2">{requestsStudent?.description}</a>
                    </div>

                    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                        <p><strong>Họ và tên:</strong> {requestsStudent?.full_name}</p>
                        <p><strong>Số điện thoại:</strong> {requestsStudent?.phone}</p>
                        <p><strong>Lớp:</strong> {requestsStudent?.class}</p>
                        <p><strong>Lý do:</strong></p>
                        <p>{requestsStudent?.description}</p>
                        <p>
                            <strong>Trạng thái:</strong>{" "}
                            <span
                                className={
                                    requestsStudent?.status === "Từ chối"
                                        ? "text-red-500"
                                        : "text-black"
                                }
                            >
                                {requestsStudent?.status}
                            </span>
                        </p>
                        {requestsStudent?.status === "Chờ xử lý" ? (
                            <div className="flex justify-end mt-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Đồng ý</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded">Từ chối</button>
                            </div>
                        )
                            // : requestsStudent?.status === "Từ chối" ? (
                            //     <div className="flex justify-end mt-4">
                            //         <button
                            //             className="bg-red-500 text-white px-4 py-2 rounded cursor-not-allowed"
                            //             disabled
                            //         >
                            //             Từ chối
                            //         </button>
                            //     </div>
                            // ) 
                            : (
                                <div className="flex justify-end mt-4">
                                    <button
                                        className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                                        disabled
                                    >
                                        Đã xử lý
                                    </button>
                                </div>
                            )}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="bg-blue-700 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Hệ Thống Quản Lý Ký Túc Xá</p>
                </div>
            </footer>
        </div>
    );
}
export default HomeStaff;
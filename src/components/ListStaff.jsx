import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import * as UserServices from "../services/UserServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboardList,
    faUsers,
    faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
function ListStaff() {
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleListRequest = () => {
        navigate('/admin');
    }

    const handleListStudent = () => {
        navigate('/admin/create-staff');
    }

    const [requests, setRequests] = useState(null);

    const fetchData = async () => {
        const res = await UserServices.getAllStaff();
        console.log('Fetching data', res)
        if (res?.status === "OK") {
            setRequests(res?.data);
            console.log('Fetching data11', requests)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCreateStaff = () => {
        navigate('/admin/create-staff');
    }

    return (
        <div>
            <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
        hs-overlay-open:translate-x-0
        -translate-x-full transition-all duration-300 transform
        w-[260px] h-full
        hidden
        fixed inset-y-0 start-0 z-[60]
        bg-white border-e border-gray-200
        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
        dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabIndex="-1" aria-label="Sidebar">
                <div className="relative flex flex-col h-full max-h-full bg-gray-900 text-white">
                    <div className="relative flex flex-col h-full max-h-full bg-gray-900 text-white">
                        <div className="px-6 pt-4">
                            <a className="flex">
                                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                                <div>
                                    <p className="font-bold text-xl">ADMIN</p>
                                </div>
                            </a>
                        </div>

                        <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600">
                            <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                                <ul className="flex flex-col space-y-1">
                                    <li className="hs-accordion" id="account-accordion">
                                        <a
                                            onClick={handleListRequest}
                                            className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg hover:bg-gray-600 text-white"
                                        >
                                            <FontAwesomeIcon icon={faClipboardList} className="text-2xl" />
                                            Danh sách các phòng
                                        </a>
                                    </li>

                                    <li onClick={handleListStudent} className="hs-accordion" id="users-accordion">
                                        <a
                                            className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg bg-gray-700 text-white hover:bg-gray-600"
                                        >
                                            <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                                            Danh sách quản lý
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            onClick={handleSignOut}
                                            className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg hover:bg-gray-600 text-white"
                                        >
                                            <FontAwesomeIcon icon={faDoorOpen} className="text-2xl" />
                                            Đăng xuất
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>

            </div>

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="flex h-full">
                        <main className="w-full p-6">
                            <h1 className="text-2xl font-bold mb-6">Danh sách quản lý</h1>

                            {/* Bảng hiển thị */}
                            <div className="bg-white rounded-lg shadow p-4">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="text-left text-gray-500">
                                            <th className="py-2 px-4">Tên quản lý</th>
                                            <th className="py-2 px-4">Số điện thoại</th>
                                            <th className="py-2 px-4">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requests && requests.length > 0 ? (
                                            requests.map((item, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="py-8 px-4">{item?.full_name}</td>
                                                    <td className="py-8 px-4">{item?.phone}</td>
                                                    <td className="py-8 px-4">{item?.email}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-8 text-gray-500">
                                                    Không có dữ liệu
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="text-right mt-4">
                                <button onClick={handleCreateStaff} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
                                    + Thêm quản lý
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListStaff;
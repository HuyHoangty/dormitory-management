import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import * as UserServices from "../services/UserServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTasks,
    faList,
    faFileInvoiceDollar,
    faUser,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function ManagerProfile() {
    const user = useSelector((state) => state.user.user);

    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    console.log('ooo', formData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        navigate('/staff');
    }

    const handleListStudent = () => {
        navigate('/staff/list-student');
    }

    const handleFees = () => {
        navigate('/staff/invoice-management');
    }

    const handleSetting = () => {
        navigate('/staff/profile');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await UserServices.updateStaff(
                user[0]?.staff_id,
                formData,
                user?.access_token
            );
            if (res?.status === "OK") {
                alert('Cập nhật thông tin staff thành công!');
                alert('Vui lòng đăng nhập lại!');
                handleSignOut();
            } else {
                alert('Cập nhật thông tin thất bại. Vui lòng thử lại!');
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật thông tin:', error);
            alert('Đã xảy ra lỗi trong quá trình cập nhật. Vui lòng thử lại!');
        }
    };
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
                <div className="relative flex flex-col h-full max-h-full">
                    <div className="px-6 pt-4">

                        <a className="flex">
                            <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="text-gray-500">Ban quản lý</p>
                                <p className="font-bold">{user[0]?.full_name}</p>
                            </div>
                        </a>

                    </div>


                    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                            <ul className="flex flex-col space-y-1">
                                <li><a onClick={handleListRequest} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className='mx-5' /> Quản lý yêu cầu
                                </a></li>

                                <li onClick={handleListStudent} className="hs-accordion" id="users-accordion">
                                    <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                        <FontAwesomeIcon icon={faList} className='mx-5' /> Danh sách sinh viên
                                    </a>
                                </li>
                                <li>
                                    <a onClick={handleFees} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                        <FontAwesomeIcon icon={faTasks} className='mx-5' /> Quản lý thanh toán
                                    </a>
                                </li>

                                <li className="hs-accordion" id="account-accordion">
                                    <a onClick={handleSetting}
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-100 text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                                    >
                                        <FontAwesomeIcon icon={faUser} className="mx-5" />
                                        Tài khoản
                                    </a>
                                </li>

                                <li>
                                    <a onClick={handleSignOut} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                        <FontAwesomeIcon icon={faSignOutAlt} className='mx-5' /> Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="w-full lg:ps-64">
                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="flex h-full">
                        <main className="w-full p-6">
                            <h1 className="text-2xl font-bold mb-6 text-center">Tài khoản</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                                <div className="col-span-12 sm:col-span-8 sm:col-start-3">
                                    <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-6">
                                        <div className="flex flex-col border-b py-4 sm:flex-row sm:items-center">
                                            <div className="sm:w-full">
                                                <p className="text-2xl font-medium text-center sm:text-left">Thông tin người dùng</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row sm:items-center">
                                            <p className="shrink-0 w-full sm:w-32 font-medium text-center sm:text-left">Họ tên</p>
                                            <input
                                                type="text"
                                                name="full_name"
                                                value={formData.full_name}
                                                onChange={handleChange}
                                                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                            />
                                        </div>

                                        <div className="flex flex-col gap-4 border-b py-4 sm:flex-row sm:items-center">
                                            <p className="shrink-0 w-full sm:w-32 font-medium text-center sm:text-left">Số điện thoại</p>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                            />
                                        </div>

                                        <div className="text-center mt-6">
                                            <button
                                                type="submit"
                                                className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium shadow-lg focus:outline-none focus:ring hover:bg-blue-700"
                                            >
                                                Lưu
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default ManagerProfile;
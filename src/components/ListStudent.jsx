import { useEffect, useState } from "react";
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

function ListStudent() {
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

    const [requests, setRequests] = useState(null);

    const fetchData = async () => {
        const res = await UserServices.getAllStudent();
        console.log('Fetching data', res)
        if (res?.status === "OK") {
            setRequests(res?.data);
            console.log('Fetching data11', requests)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const handleStudentClick = (item) => {
        console.log('item', item);
        if (item?.request_type === "Duyệt vào ký túc xá") {
            navigate("/staff/detail-request", { state: item });
        } else if (item?.request_type === "Đổi phòng") {
            navigate("/staff/room-change-request", { state: item })
        } else if (item?.request_type === "Ra khỏi ký túc xá") {
            navigate("/staff/move-out-request", { state: item })
        } else {
            navigate("/staff/other-request", { state: item })
        }
    };

    return (
        <div>
            <div className="-mt-px">

                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
                    <div className="flex items-center py-2">

                        <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
                        </button>

                        <ol className="ms-3 flex items-center whitespace-nowrap">
                            <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                                Application Layout
                                <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </li>
                            <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                                Dashboard
                            </li>
                        </ol>

                    </div>
                </div>

            </div>
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
                                <li onClick={handleListRequest} className="hs-accordion" id="users-accordion">
                                    <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                        <FontAwesomeIcon icon={faFileInvoiceDollar} className='mx-5' /> Quản lý yêu cầu
                                    </a>
                                </li>

                                <li className="hs-accordion" id="account-accordion">
                                    <a onClick={handleListStudent}
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-100 text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                                    >
                                        <FontAwesomeIcon icon={faList} className="mx-5" />
                                        Danh sách sinh viên
                                    </a>
                                </li>

                                <li>
                                    <a onClick={handleFees} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                        <FontAwesomeIcon icon={faTasks} className='mx-5' /> Quản lý thanh toán
                                    </a>
                                </li>


                                <li><a onClick={handleSetting} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                    <FontAwesomeIcon icon={faUser} className='mx-5' /> Tài khoản
                                </a></li>
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
                        <main className="w-4/5 p-6">
                            <h1 className="text-2xl font-bold mb-6">Danh sách sinh viên</h1>
                            <div className="flex mb-4">
                                <input type="text" placeholder="Tìm kiếm" className="border p-2 rounded mr-4 w-1/2" />
                                <select className="border p-2 rounded w-1/2">
                                    <option>Sắp xếp theo : Tên sinh viên</option>
                                </select>
                            </div>
                            <div className="bg-white rounded-lg shadow p-4">
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-gray-500">
                                            <th className="py-2 px-4">Tên sinh viên</th>
                                            <th className="py-2 px-4">Năm sinh</th>
                                            <th className="py-2 px-4">Giới tính</th>
                                            <th className="py-2 px-4">Ngành</th>
                                            <th className="py-2 px-4">Lớp</th>
                                            <th className="py-2 px-4">Số điện thoại</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {requests && requests.length > 0 ? (
                                            requests.map((item, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="py-8 px-4">
                                                        <button onClick={() => handleStudentClick(item)} className="text-blue-500 hover:underline">
                                                            {item?.full_name}
                                                        </button>
                                                    </td>
                                                    <td className="py-8 px-4">{item?.dob.split('T')[0]}</td>
                                                    <td className="py-8 px-4">
                                                        {item?.gender === 'male' ? 'Nam' : item?.gender === 'female' ? 'Nữ' : item?.gender}
                                                    </td>
                                                    <td className="py-8 px-4">{item?.major}</td>
                                                    <td className="py-8 px-4">{item?.class}</td>
                                                    <td className="py-8 px-4">{item?.phone}</td>
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
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListStudent;
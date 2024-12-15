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
function HomeStaff() {
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
        const res = await UserServices.getAllRequests();
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
                                <li className="hs-accordion" id="account-accordion">
                                    <a onClick={handleListRequest}
                                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-100 text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                                    >
                                        <FontAwesomeIcon icon={faFileInvoiceDollar} className="mx-5" />
                                        Quản lý yêu cầu
                                    </a>
                                </li>

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
                        <main className="w-full p-6">
                            <h1 className="text-2xl font-bold mb-6">Quản lý thanh toán</h1>

                            {/* Thanh tìm kiếm và sắp xếp */}
                            <div className="flex mb-4 gap-4">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm theo tên sinh viên, phòng..."
                                    className="border p-2 rounded w-1/2"
                                />
                                <select className="border p-2 rounded w-1/2">
                                    <option>Sắp xếp theo: Tên sinh viên</option>
                                    <option>Sắp xếp theo: Tổng tiền</option>
                                    <option>Sắp xếp theo: Trạng thái</option>
                                </select>
                            </div>

                            {/* Bảng hiển thị */}
                            <div className="bg-white rounded-lg shadow p-4">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="text-left text-gray-500">
                                            <th className="py-2 px-4">Tên sinh viên</th>
                                            <th className="py-2 px-4">Loại yêu cầu</th>
                                            <th className="py-2 px-4">Lớp</th>
                                            <th className="py-2 px-4">Thời gian tạo</th>
                                            <th className="py-2 px-4">Trạng thái</th>
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
                                                    <td className="py-8 px-4">{item?.request_type}</td>
                                                    <td className="py-8 px-4">{item?.class}</td>
                                                    <td className="py-8 px-4">{item?.created_at.split('T')[0]}</td>
                                                    <td className="py-8 px-4">
                                                        <button
                                                            className={`px-2 py-1 rounded ${item?.status === 'Đã xử lý'
                                                                ? 'bg-green-100 text-green-700'
                                                                : item?.status === 'Đang chờ xử lý'
                                                                    ? 'bg-yellow-100 text-yellow-700'
                                                                    : item?.status === 'Từ chối'
                                                                        ? 'bg-red-100 text-red-700'
                                                                        : 'bg-gray-100 text-gray-700'
                                                                }`}
                                                        >
                                                            {item?.status}
                                                        </button>
                                                    </td>

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
export default HomeStaff;
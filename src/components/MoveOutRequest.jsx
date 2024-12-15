import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import { useLocation } from "react-router-dom";
import * as UserServices from "../services/UserServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTasks,
    faList,
    faFileInvoiceDollar,
    faUser,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function MoveOutRequest() {
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation() || {};
    const item = location.state;

    const [requestsStudent, setRequestsStudent] = useState(item);
    const [rooms, setRooms] = useState(null);

    console.log("requestsStudent", requestsStudent)

    console.log("user: ", user)
    console.log("user[0]", user[0])

    const fetchData = async () => {
        const res = await UserServices.getDetailRoom(requestsStudent?.room_id);
        if (res?.status === "OK") {
            const data = res?.data
            setRooms(data[0]);
        }
    };

    console.log("rooms", rooms)


    useEffect(() => {
        fetchData();
    }, []);

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

    const handleApprove = async () => {
        const res = await UserServices.updateRequestByStaff(requestsStudent?.request_id, {
            status: "Đã xử lý",
            staff_id: user[0]?.staff_id
        })
        if (res?.status === "OK") {
            alert("Cập nhật yêu cầu thành công");
            setRequestsStudent((prev) => ({
                ...prev, // Sao chép toàn bộ các thuộc tính hiện tại
                status: "Đã xử lý", // Ghi đè thuộc tính status
            }));

            // cập nhập số lượng sinh viên rooms
            const updateRoom = await UserServices.updateRoom(rooms?.room_id, {
                "current_occupancy": Math.floor(rooms?.current_occupancy - 1)
            });
            if (updateRoom?.status == "OK") {
                alert("Cập nhật số lương sinh viên thành công");
            }
        } else {
            alert("Đã xảy ra lỗi, vui lòng thử lại");
        }
    }

    const handleReject = async () => {
        const res = await UserServices.updateRequestByStaff(requestsStudent?.request_id, {
            status: "Từ chối",
            staff_id: user[0]?.staff_id
        })
        if (res?.status === "OK") {
            alert("Từ chối yêu cầu thành công");
            setRequestsStudent((prev) => ({
                ...prev, // Sao chép toàn bộ các thuộc tính hiện tại
                status: "Từ chối", // Ghi đè thuộc tính status
            }));
        }
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
                        <main className="w-4/5 p-6">
                            <h1 className="text-2xl font-bold mb-6">Quản lý yêu cầu</h1>
                            <div className="mb-4">
                                <a className="text-black-500 pb-2">{requestsStudent?.request_type}</a>
                            </div>

                            <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                                <p><strong>Họ và tên:</strong> {requestsStudent?.full_name}</p>
                                <p><strong>Số điện thoại:</strong> {requestsStudent?.phone}</p>
                                <p><strong>Lớp:</strong> {requestsStudent?.class}</p>
                                <p><strong>Lý do:</strong></p>
                                <p>{requestsStudent?.description}</p>
                                <p><strong>Phòng:</strong> {rooms?.room_number}</p>
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
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                                            onClick={handleApprove}
                                        >
                                            Đồng ý
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                            onClick={handleReject}
                                        >
                                            Từ chối
                                        </button>
                                    </div>
                                )
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
                </div>
            </div>
        </div>
    );
}
export default MoveOutRequest;
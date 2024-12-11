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
    faCog,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function StudentDetailRequest() {
    const user = useSelector((state) => state.user.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation() || {};
    const item = location.state;

    const [requestsStudent, setRequestsStudent] = useState(item);
    const [rooms, setRooms] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState("");
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomId, setRoomId] = useState(null);

    const [num, setNum] = useState(0);

    console.log("roomId", roomId)

    console.log("requestsStudent", requestsStudent)


    console.log("user: ", user)
    console.log("user[0]", user[0])

    const fetchData = async () => {
        const res = await UserServices.getAllRoom({
            "gender": requestsStudent?.gender
        });
        console.log('Fetching data', res)
        if (res?.status === "OK") {
            setRooms(res?.data);
        }
    };

    console.log('Fetching data11', rooms)


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

    const handleSetting = () => { }

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

            const updataStudent = await UserServices.updateStudent(requestsStudent?.student_id, {
                "approved": 1,
                "room_id": roomId,
            })

            if (updataStudent?.status == "OK") {
                alert("Cập nhật sinh viên thành công");
            }

            // / cập nhập số lượng sinh viên rooms
            const updateRoom = await UserServices.updateRoom(roomId, {
                "current_occupancy": Math.floor(num + 1)
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
                                <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" >
                                    <FontAwesomeIcon icon={faCog} className='mx-5' /> Cài đặt
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
                                <p><strong>Phòng:</strong></p>
                                {/* {rooms && rooms.length > 0 ? (
                            <select
                                value={selectedRoom}
                                onChange={(e) => setSelectedRoom(e.target.value)}
                                className="border rounded px-4 py-2"
                            >
                                <option value="" disabled>Chọn phòng</option>
                                {rooms.map((room) => (
                                    <option key={room.room_id} value={room.room_number}>
                                        {room.room_number}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <p className="text-gray-500">Không có phòng nào khả dụng.</p>
                        )} */}
                                {rooms && rooms.length > 0 ? (
                                    <>
                                        <select
                                            value={selectedRoom}
                                            onChange={(e) => {
                                                const selected = rooms.find(
                                                    (room) => room.room_number === e.target.value
                                                );
                                                setSelectedRoom(selected.room_number);
                                                setNum(selected.current_occupancy);
                                                setRoomId(selected.room_id);
                                                setRoomDetails(selected); // Cập nhật thông tin chi tiết phòng
                                            }}
                                            className="border rounded px-4 py-2"
                                        >
                                            <option value="" disabled>Chọn phòng</option>
                                            {rooms.map((room) => (
                                                <option key={room.room_id} value={room.room_number}>
                                                    {room.room_number}
                                                </option>
                                            ))}
                                        </select>
                                        {roomDetails && (
                                            <p className="mt-4">
                                                <strong>Số lượng sinh viên: </strong>
                                                {roomDetails.current_occupancy}/{roomDetails.capacity}
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <p className="text-gray-500">Không có phòng nào khả dụng.</p>
                                )}

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
export default StudentDetailRequest;
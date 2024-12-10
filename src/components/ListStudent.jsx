import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import * as UserServices from "../services/UserServices";
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
        <div className="bg-gray-100 flex flex-col">
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
                                <a className="flex items-center text-gray-700 hover:text-blue-500">
                                    <i className="fas fa-tasks mr-3"></i> Quản lý yêu cầu
                                </a>
                            </li>
                            <li className="mb-4">
                                <a className="  flex items-center text-blue-500">
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
            {/* Footer */}
            <footer className="bg-blue-700 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p>&copy; 2024 Hệ Thống Quản Lý Ký Túc Xá</p>
                </div>
            </footer>
        </div>
    );
}

export default ListStudent;
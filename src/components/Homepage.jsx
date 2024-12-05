import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as UserServices from "../services/UserServices";
import { useMutationHooks } from "../hooks/useMutationHooks";
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


function Homepage() {
  const user = useSelector((state) => state.user.user);
  console.log("user", user.room_id)

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await UserServices.getDetailRoom(user.room_id);
    if (res?.status === "OK") {
      setData(res?.data);
    }
  };

  useEffect(() => {
    fetchData();
  });

  console.log('Fetching data', data)

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

      {/* Main Content */}
      <div className="w-full p-6">
        <header className="bg-blue-700 text-white text-center py-6 rounded-t-lg shadow-lg">
          <h1 className="text-2xl font-bold">HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ</h1>
        </header>

        <div className="bg-blue-600 text-white p-6 mt-4 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            {/* Thông tin học sinh */}
            <div className="flex-shrink-0 w-full md:w-1/2">
              <img
                src="https://placehold.co/100x100"
                alt="Student's portrait"
                className="rounded-full w-24 h-24 border-4 border-white"
              />
              <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                <p className="text-lg font-semibold">{user[0]?.full_name}</p>
                <p className="text-sm">Ngày sinh: {new Date(user[0]?.dob).toLocaleDateString()}</p>
                <p className="text-sm">Giới tính: {user[0]?.gender === 'male' ? 'Nam' : 'Nữ'}</p>
                <p className="text-sm">Dân tộc: {user[0]?.ethnicity}</p>
                <p className="text-sm">Ngành: {user[0]?.major}</p>
                <p className="text-sm">Lớp: {user[0]?.class}</p>
              </div>
            </div>

            {/* Thông tin phòng */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
              <div className="bg-blue-600 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2">Thông tin phòng ở</p>
                <p>Cơ sở lưu trú: Ký túc xá Ngoại ngữ</p>
                <p>Địa chỉ: 144 Xuân Thủy</p>
                <p>Tòa nhà: {data[0]?.room_number.charAt(data[0]?.room_number.length - 1)}</p>
                <p>Phòng số: {data[0]?.room_number}</p>
              </div>
            </div>
          </div>

          {/* Danh sách các bạn cùng phòng */}
          <div className="bg-blue-600 p-6 rounded-lg shadow-md mt-6">
            <p className="text-center text-lg font-semibold text-white">Danh sách các bạn cùng phòng</p>
            <div className="mt-4 flex justify-center">
              {data && data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-full">
                  {data.map((roommate, index) => (
                    <div key={index} className="bg-white text-blue-600 p-4 mb-4 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-200">
                      <p className="text-md font-semibold">{roommate.full_name}</p>
                      <p className="text-xs text-gray-600">Lớp: {roommate.class}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-white">Chưa có bạn cùng phòng</p>
              )}


            </div>
          </div>



        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Thông báo</h2>
            {/* Nội dung thông báo có thể thêm vào */}
          </div>
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Danh sách yêu cầu</h2>
            <table className="min-w-full mt-4 border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="border px-4 py-2">Yêu cầu</th>
                  <th className="border px-4 py-2">Loại yêu cầu</th>
                  <th className="border px-4 py-2">Ngày yêu cầu</th>
                  <th className="border px-4 py-2">Trạng thái</th>
                  <th className="border px-4 py-2">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                {["Đăng ký nội trú đợt 1", "Yêu cầu sửa chữa phòng", "Yêu cầu đổi phòng", "Đăng ký nội trú đợt 2"].map((request, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">{request}</td>
                    <td className="border px-4 py-2">Cấp phát thông tin</td>
                    <td className="border px-4 py-2">{new Date().toLocaleDateString()}</td>
                    <td className="border px-4 py-2 text-center">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button>
                    </td>
                    <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Biên lai lệ phí phòng ở</h2>
          <table className="min-w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border px-4 py-2">Mã biên lai</th>
                <th className="border px-4 py-2">Loại phòng</th>
                <th className="border px-4 py-2">Ngày hiệu lực</th>
                <th className="border px-4 py-2">Ngày hết hiệu lực</th>
                <th className="border px-4 py-2">Số tiền</th>
                <th className="border px-4 py-2">Trạng thái</th>
                <th className="border px-4 py-2">Tác vụ</th>
              </tr>
            </thead>
            <tbody>
              {["DNK20200001", "DNK20200002", "DNK20200003"].map((receipt, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{receipt}</td>
                  <td className="border px-4 py-2">A2</td>
                  <td className="border px-4 py-2">{new Date().toLocaleDateString()}</td>
                  <td className="border px-4 py-2">{new Date().toLocaleDateString()}</td>
                  <td className="border px-4 py-2">5,000,000 VND</td>
                  <td className="border px-4 py-2 text-center">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button>
                  </td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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

export default Homepage;

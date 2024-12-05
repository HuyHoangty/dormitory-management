import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  console.log("user", user[0])

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
      <div className="w-full p-4">
        <header className="bg-blue-700 text-white text-center py-4">
          <h1 className="text-xl font-bold">HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ</h1>
        </header>
        <div className="bg-blue-600 text-white p-4 mt-4 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <img src="https://placehold.co/100x100" alt="Student's portrait" className="rounded-lg" />
            </div>
            <div className="md:ml-4 mt-4 md:mt-0">
              <p>Họ và tên: {user[0].full_name}</p>
              <p>Ngày sinh: {new Date(user[0].dob).toLocaleDateString()}</p>
              <p>Giới tính: {user[0].gender === 'male' ? 'Nam' : 'Nữ'}</p>
              <p>Dân tộc: {user[0].ethnicity}</p>
              <p>Ngành: {user[0].major}</p>
              <p>Lớp: {user[0].class}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-600 p-4 rounded-lg text-center">
              <p>Số yêu cầu</p>
              <p className="text-2xl">6</p>
            </div>
            <div className="bg-blue-600 p-4 rounded-lg text-center">
              <p>Số hóa đơn</p>
              <p className="text-2xl">0/6</p>
            </div>
            <div className="bg-blue-600 p-4 rounded-lg text-center">
              <p>Thông tin phòng ở</p>
              <p>Cơ sở lưu trú: KTX A</p>
              <p>Tòa nhà: C</p>
              <p>Phòng số: 123</p>
              <p>Loại phòng: A2</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Thông báo</h2>
          </div>
          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold">Danh sách yêu cầu</h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Yêu cầu</th>
                  <th className="border px-4 py-2">Loại yêu cầu</th>
                  <th className="border px-4 py-2">Ngày yêu cầu</th>
                  <th className="border px-4 py-2">Trạng thái</th>
                  <th className="border px-4 py-2">Tác vụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Đăng ký nội trú đợt 1 năm 2024</td>
                  <td className="border px-4 py-2">Đăng ký nội trú</td>
                  <td className="border px-4 py-2">27/01/2024</td>
                  <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button></td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Yêu cầu sửa chữa phòng</td>
                  <td className="border px-4 py-2">Cấp phát thông tin</td>
                  <td className="border px-4 py-2">28/04/2024</td>
                  <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button></td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Yêu cầu đổi phòng</td>
                  <td className="border px-4 py-2">Yêu cầu đổi phòng</td>
                  <td className="border px-4 py-2">27/05/2024</td>
                  <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button></td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Yêu cầu sửa chữa phòng</td>
                  <td className="border px-4 py-2">Cấp phát thông tin</td>
                  <td className="border px-4 py-2">19/08/2024</td>
                  <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button></td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Đăng ký nội trú đợt 2 năm 2024</td>
                  <td className="border px-4 py-2">Đăng ký nội trú</td>
                  <td className="border px-4 py-2">15/08/2024</td>
                  <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Hoàn thành</button></td>
                  <td className="border px-4 py-2 text-center"><i className="fas fa-cog"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-4 mt-4 rounded-lg shadow">
          <h2 className="text-lg font-bold">Biên lai lệ phí phòng ở</h2>
          <table className="min-w-full mt-4">
            <thead>
              <tr>
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
              <tr>
                <td className="border px-4 py-2">DNK20200001</td>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">27/01/2024</td>
                <td className="border px-4 py-2">27/02/2024</td>
                <td className="border px-4 py-2">5,000,000 VND</td>
                <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button></td>
                <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DNK20200002</td>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">28/02/2024</td>
                <td className="border px-4 py-2">28/03/2024</td>
                <td className="border px-4 py-2">5,000,000 VND</td>
                <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button></td>
                <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DNK20200003</td>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">29/03/2024</td>
                <td className="border px-4 py-2">29/04/2024</td>
                <td className="border px-4 py-2">5,000,000 VND</td>
                <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button></td>
                <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DNK20200004</td>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">30/04/2024</td>
                <td className="border px-4 py-2">30/05/2024</td>
                <td className="border px-4 py-2">5,000,000 VND</td>
                <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button></td>
                <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
              </tr>
              <tr>
                <td className="border px-4 py-2">DNK20200005</td>
                <td className="border px-4 py-2">A2</td>
                <td className="border px-4 py-2">15/08/2024</td>
                <td className="border px-4 py-2">15/09/2024</td>
                <td className="border px-4 py-2">5,000,000 VND</td>
                <td className="border px-4 py-2 text-center"><button className="bg-blue-500 text-white px-2 py-1 rounded">Đã thanh toán</button></td>
                <td className="border px-4 py-2 text-center"><i className="fas fa-eye"></i></td>
              </tr>
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

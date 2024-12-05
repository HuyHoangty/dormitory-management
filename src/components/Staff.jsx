import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';
function submitForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [requests, setRequests] = React.useState([
        { name: 'Nguyễn Văn A', request: 'Đổi phòng', email: 'abc@gmail.com', phone: '0123456789', status: 'Đã xử lý' },
        { name: 'Nguyễn Văn B', request: 'Đăng ký nội trú', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ xử lý' },
        { name: 'Nguyễn Văn D', request: 'Đổi phòng', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ xử lý' },
        { name: 'Nguyễn Văn E', request: 'Rời khỏi ký túc xá', email: 'abc@gmail.com', phone: '0123456789', status: 'Đã xử lý' },
        { name: 'Nguyễn Văn F', request: 'Đăng ký nội trú', email: 'abc@gmail.com', phone: '0123456789', status: 'Đã xử lý' },
        { name: 'Nguyễn Văn G', request: 'Đổi phòng', email: 'abc@gmail.com', phone: '0123456789', status: 'Đã xử lý' },
        { name: 'Nguyễn Văn H', request: 'Đăng ký nội trú', email: 'abc@gmail.com', phone: '0123456789', status: 'Đã xử lý' },
        { name: 'Nguyễn Văn I', request: 'Rời khỏi ký túc xá', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ xử lý' },
    ]);

    const [activeTab, setActiveTab] = React.useState('Tất cả');

    const handleStatusChange = (index) => {
        const newRequests = [...requests];
        const currentStatus = newRequests[index].status;
        if (currentStatus === 'Đã xử lý') {
            newRequests[index].status = 'Đang chờ xử lý';
        } else if (currentStatus === 'Đang chờ xử lý') {
            newRequests[index].status = 'Không được chấp thuận';
        } else {
            newRequests[index].status = 'Đã xử lý';
        }
        setRequests(newRequests);
    };

    const handleStudentClick = (name) => {
        window.location.href = `/student-details?name=${encodeURIComponent(name)}`;
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
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
          <div className="flex">
                    <aside className="w-1/5 bg-white p-4">
                        <div className="flex items-center mb-6">
                            <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="text-gray-500">Ban quản lý</p>
                                <p className="font-bold">Quản lý A</p>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                        <i className="fas fa-home mr-3"></i> Trang chủ
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-blue-500">
                                        <i className="fas fa-tasks mr-3"></i> Quản lý yêu cầu
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                        <i className="fas fa-list mr-3"></i> Danh sách sinh viên
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                        <i className="fas fa-chart-bar mr-3"></i> Quản lý thanh toán
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                        <i className="fas fa-user mr-3"></i> Tài khoản
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                        <i className="fas fa-cog mr-3"></i> Cài đặt
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                    <main className="w-4/5 p-6">
                        <h1 className="text-2xl font-bold mb-6">Quản lý yêu cầu</h1>
                        <div className="flex mb-6">
                            {['Tất cả', 'Đang chờ xử lý', 'Đã xử lý', 'Không được chấp thuận'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => handleTabClick(tab)}
                                    className={`mr-4 ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
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
                                        <th className="py-2 px-4">Loại yêu cầu</th>
                                        <th className="py-2 px-4">Email</th>
                                        <th className="py-2 px-4">Số điện thoại</th>
                                        <th className="py-2 px-4">Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {requests.map((item, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="py-8 px-4">
                                                <button onClick={() => handleStudentClick(item.name)} className="text-blue-500 hover:underline">
                                                    {item.name}
                                                </button>
                                            </td>
                                            <td className="py-8 px-4">{item.request}</td>
                                            <td className="py-8 px-4">{item.email}</td>
                                            <td className="py-8 px-4">{item.phone}</td>
                                            <td className="py-8 px-4">
                                                <button
                                                    onClick={() => handleStatusChange(index)}
                                                    className={`px-2 py-1 rounded ${item.status === 'Đã xử lý' ? 'bg-green-100 text-green-700' : item.status === 'Đang chờ xử lý' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}
                                                >
                                                    {item.status}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-gray-500">Kết quả từ 1 đến 8 trên 50</p>
                                <div className="flex items-center">
                                    <button className="px-3 py-1 border rounded-l">{"<"}</button>
                                    <button className="px-3 py-1 border">1</button>
                                    <button className="px-3 py-1 border">2</button>
                                    <button className="px-3 py-1 border">3</button>
                                    <button className="px-3 py-1 border">4</button>
                                    <button className="px-3 py-1 border">...</button>
                                    <button className="px-3 py-1 border rounded-r">6</button>
                                </div>
                            </div>
                        </div>
                        <button className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">Tạo yêu cầu</button>
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
export default submitForm;
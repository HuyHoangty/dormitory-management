import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

function ChangePassword() {
  const [formData, setFormData] = useState({
    current_password: '',
    new_password: '',
    confirm_new_password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (formData.new_password !== formData.confirm_new_password) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }

    console.log('Form submitted:', formData);
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
      <div className="flex flex-col items-center">
                    <div className="w-full bg-gray-100 py-2">
                        <h2 className="text-center font-semibold">Hồ sơ sinh viên</h2>
                    </div>
                    <div className="w-3/4 bg-white p-6 border border-gray-300 mt-4">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <div className="border border-blue-500 h-40 w-32"></div>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Họ và tên" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Ngày sinh" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Dân tộc" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Giới tính" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Mã sinh viên" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Số CCCD/CMT" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Ngày cấp" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Nơi cấp" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Tôn giáo" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Quốc tịch" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Loại giấy tờ" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Ngày vào đoàn" className="border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Địa chỉ thường trú</h3>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <input type="text" placeholder="Quốc gia" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Tỉnh/Thành phố" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Quận/Huyện" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Phường/Xã" className="border border-gray-300 p-2 col-span-3" />
                                <input type="text" placeholder="Địa chỉ chi tiết" className="border border-gray-300 p-2 col-span-3" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Thông tin nhập học</h3>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <input type="text" placeholder="Đơn vị đào tạo" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Khoa" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Ngành" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Khóa" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Lớp" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Năm bắt đầu" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Năm kết thúc" className="border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Thông tin bố</h3>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <input type="text" placeholder="Họ tên bố" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Năm sinh" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Số điện thoại" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Nghề nghiệp" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Nơi làm việc" className="border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Thông tin mẹ</h3>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <input type="text" placeholder="Họ tên mẹ" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Năm sinh" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Số điện thoại" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Nghề nghiệp" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Nơi làm việc" className="border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Thông tin liên hệ</h3>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <input type="text" placeholder="Email" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Số điện thoại" className="border border-gray-300 p-2" />
                                <input type="text" placeholder="Địa chỉ liên hệ" className="border border-gray-300 p-2" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <button className="bg-blue-600 text-white py-2 px-6">Tiếp tục</button>
                        </div>
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

export default ChangePassword;

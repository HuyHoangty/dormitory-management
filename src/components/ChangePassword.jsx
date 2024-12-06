import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');

    // Phải đăng nhập mới truy cập được nên tạm thời vô hiệu hóa
    // if (!accessToken || !userId) {
    //   window.location.href = '/login';
    // }
  }, []);

  const accessToken = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.new_password !== formData.confirm_new_password) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3001/api/user/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'token': 'Bearer ' + accessToken
        },
        body: JSON.stringify({ 
          userId,
          currentPassword: formData.current_password, 
          newPassword: formData.new_password 
        })
      });
      const data = await res.json();
      if (data.status === 'OK') {
        alert('Đổi mật khẩu thành công!');
      } else {
        alert('Lỗi: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra');
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col">
      <header className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="w-1/3">
            <a href="#">
              <img src="/src/assets/img/icon_logo/VNU_LOGO.png" alt="VNU Logo" className="w-40" />
            </a>
          </div>
          <div className="w-1/3 text-center">
            <h1 className="text-2xl font-bold text-blue-700">HỆ THỐNG QUẢN LÝ KÝ TÚC XÁ</h1>
          </div>
          <div className="w-1/3 text-right">
            <img src="/src/assets/img/icon_logo/VNU_CSS_LOGO.png" alt="VNU CSS Logo" className="w-40 inline-block" />
          </div>
        </div>
      </header>

      <nav className="bg-blue-700">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center text-white">
          <a href="#" className="mx-2 hover:underline"><FontAwesomeIcon icon={faHome} /> Trang chủ</a>
          <a href="#" className="mx-2 hover:underline"><FontAwesomeIcon icon={faCompass} /> Trang điều khiển</a>
          <div className="relative inline-block text-left">
            <button className="inline-flex items-center hover:underline focus:outline-none">
              <FontAwesomeIcon icon={faUser} /> <span>Tài khoản</span>
            </button>
            <div className="hidden origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <button onClick={() => window.history.back()} className="mb-4 text-gray-700 hover:text-blue-700 focus:outline-none">
            <FontAwesomeIcon icon={faCaretLeft} /> Quay lại
          </button>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">Đổi Mật Khẩu</h2>
              <div className="my-2">
                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                  <p className="font-bold">Lưu ý</p>
                  <p>Mật khẩu phải có độ dài từ 6 - 15 ký tự và phải bao gồm 1 chữ cái in hoa và 1 chữ số.</p>
                </div>
              </div>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu hiện tại</label>
                  <input type="password" name="current_password" value={formData.current_password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu mới</label>
                  <input type="password" name="new_password" value={formData.new_password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required pattern="^(?=.*[A-Z])(?=.*\\d).{6,15}$" title="Mật khẩu phải có 1 chữ in hoa và 1 chữ số." />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nhập lại mật khẩu mới</label>
                  <input type="password" name="confirm_new_password" value={formData.confirm_new_password} onChange={handleChange} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required />
                </div>
                <div className="flex">
                  <button type="submit" className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none">Cập nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hệ Thống Quản Lý Ký TÚC XÁ</p>
        </div>
      </footer>
    </div>
  );
}

export default ChangePassword;

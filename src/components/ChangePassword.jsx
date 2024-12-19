import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as UserServices from "../services/UserServices";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
  faKey
} from '@fortawesome/free-solid-svg-icons';

function ChangePassword() {
  const user = useSelector((state) => state.user.user);
  console.log("user", user.access_token, user.user_id, user.email)

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (formData.new_password !== formData.confirm_new_password) {
      alert('Mật khẩu mới và xác nhận mật khẩu không khớp!');
      return;
    }

    const checkPassword = await UserServices.signInUser({
      email: user.email,
      password: formData.current_password,
    })

    console.log('checkPassword', checkPassword);

    if (checkPassword.status === "ERR") {
      alert('Mật khẩu không đúng!');
      setFormData({
        current_password: '',
        new_password: '',
        confirm_new_password: '',
      });
      return;
    }

    const res = await UserServices.updateUser(user.user_id, formData.new_password, user.access_token);
    console.log('res', res);
    if (res?.status === "OK") {
      alert('Cập nhật mật khẩu thành công!');
      setFormData({
        current_password: '',
        new_password: '',
        confirm_new_password: '',
      });
      navigate('/');  // Điều hướng về trang chủ
    }
  };

  const handleChangePassword = () => {
    navigate("/change-password")
  };

  const handleHome = () => {
    navigate("/");
  }

  const handleSignOut = () => {
    // Xoá token khỏi localStorage hoặc sessionStorage
    localStorage.removeItem('access_token');  // Hoặc sessionStorage.removeItem('access_token') nếu bạn dùng sessionStorage
    // localStorage.removeItem('persist:root')
    // Đặt lại trạng thái người dùng (nếu bạn sử dụng state quản lý người dùng)
    dispatch(clearUser());

    // Điều hướng về trang chủ
    navigate('/sign-in');
  };

  return (
    <div className="bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="w-1/3">
            <a >
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
      <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-end items-center text-white">
          <div className="flex space-x-8 items-center">
            <a onClick={handleHome} className="hover:text-blue-300 transition duration-300">
              <FontAwesomeIcon icon={faHome} className="mr-1" /> Trang chủ
            </a>
            <a className="hover:text-blue-300 transition duration-300">
              <FontAwesomeIcon icon={faCompass} className="mr-1" /> Trang điều khiển
            </a>
            <div className="relative group">
              <button className="inline-flex items-center hover:text-blue-300 transition duration-300 focus:outline-none">
                <FontAwesomeIcon icon={faUser} className="mr-1" /> <span>Tài khoản</span>
              </button>
              {/* Dropdown menu */}
              <div className="hidden group-hover:block group-focus-within:block absolute right-0 mt-1 w-40 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 pointer-events-auto z-50">
                <div className="py-2">
                  <a
                    onClick={handleSignOut}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" /> Đăng xuất
                  </a>
                  <a
                    onClick={handleChangePassword}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faKey} className="mr-1" /> Đổi mật khẩu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <button
            onClick={() => window.history.back()}
            className="mb-4 text-gray-700 hover:text-blue-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faCaretLeft} /> Quay lại
          </button>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">
                Đổi Mật Khẩu
              </h2>
              {/* <div className="my-2">
                <div
                  className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
                  role="alert"
                >
                  <p className="font-bold">Lưu ý</p>
                  <p>
                    Mật khẩu phải có độ dài từ 6 - 15 ký tự và phải bao gồm 1
                    chữ cái in hoa và 1 chữ số.
                  </p>
                </div>
              </div> */}
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    name="current_password"
                    value={formData.current_password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu mới</label>
                  <input
                    type="password"
                    name="new_password"
                    value={formData.new_password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Nhập lại mật khẩu mới
                  </label>
                  <input
                    type="password"
                    name="confirm_new_password"
                    value={formData.confirm_new_password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Cập nhật
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

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

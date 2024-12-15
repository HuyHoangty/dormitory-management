import { useEffect, useState } from "react";
import * as UserServices from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClipboardList,
  faUsers,
  faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
function CreateStaff() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'staff',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
    navigate('/admin');
  }

  const handleListStudent = () => {
    navigate('/admin/list-staff');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Hóa đơn được tạo:', formData);
    // // Xử lý logic gửi dữ liệu lên server

    const res = await UserServices.signUpUser(formData);
    if (res?.status === "OK") {
      alert('Staff được tạo thành công!');
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
        role: 'staff',
      });
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
        <div className="relative flex flex-col h-full max-h-full bg-gray-900 text-white">
          <div className="relative flex flex-col h-full max-h-full bg-gray-900 text-white">
            <div className="px-6 pt-4">
              <a className="flex">
                <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                <div>
                  <p className="font-bold text-xl">ADMIN</p>
                </div>
              </a>
            </div>

            <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-800 [&::-webkit-scrollbar-thumb]:bg-gray-600">
              <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                <ul className="flex flex-col space-y-1">
                  <li className="hs-accordion" id="account-accordion">
                    <a
                      onClick={handleListRequest}
                      className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg hover:bg-gray-600 text-white"

                    >
                      <FontAwesomeIcon icon={faClipboardList} className="text-2xl" />
                      Danh sách các phòng
                    </a>
                  </li>

                  <li onClick={handleListStudent} className="hs-accordion" id="users-accordion">
                    <a
                      className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg bg-gray-700 text-white hover:bg-gray-600"
                    >
                      <FontAwesomeIcon icon={faUsers} className="text-2xl" />
                      Danh sách quản lý
                    </a>
                  </li>

                  <li>
                    <a
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-x-4 py-3 px-3 text-lg rounded-lg hover:bg-gray-600 text-white"
                    >
                      <FontAwesomeIcon icon={faDoorOpen} className="text-2xl" />
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex h-full">
            <main className="w-full p-6">
              <h1 className="text-2xl font-bold mb-6">Thêm quản lý</h1>

              {/* Form nhập thông tin hóa đơn */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow p-6 space-y-4"
              >
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập email"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Nhập mật khẩu"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Xác nhận mật khẩu"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition w-full"
                >
                  Đăng ký
                </button>
              </form>

            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateStaff;
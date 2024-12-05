import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as UserServices from "../services/UserServices";
import { useMutationHooks } from "../hooks/useMutationHooks";
import { useSelector } from 'react-redux';

import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

function CreateStudent() {
  const [formData, setFormData] = useState({
    full_name: "",
    dob: "",
    gender: "",
    ethnicity: "",
    religion: "",
    major: "",
    class: "",
    phone: "",
  });

  const user = useSelector((state) => state.user.user);
  console.log("user", user.user_id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value, // Cập nhật giá trị dựa trên thuộc tính name
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const mutation = useMutationHooks((data) => UserServices.createStudent(user.user_id, data));

  const { data, isPending, isSuccess } = mutation;

  console.log("muta---", data, isPending, isSuccess);


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
              <input
                type="text"
                name="full_name"
                placeholder="Họ và tên"
                className="border border-gray-300 p-2"
                value={formData.full_name}
                onChange={handleChange}
              />
              <input
                type="date"
                name="dob"
                placeholder="Ngày sinh"
                className="border border-gray-300 p-2"
                value={formData.dob}
                onChange={handleChange}
              />
              <input
                type="text"
                name="ethnicity"
                placeholder="Dân tộc"
                className="border border-gray-300 p-2"
                value={formData.ethnicity}
                onChange={handleChange}
              />
              {/* <input
                type="text"
                name="gender"
                placeholder="Giới tính"
                className="border border-gray-300 p-2"
                value={formData.gender}
                onChange={handleChange}
              /> */}
              <select
                name="gender"
                className="border border-gray-300 p-2"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Chọn giới tính</option>
                <option value="Male">Nam</option>
                <option value="Female">Nữ</option>
                <option value="Other">Khác</option>
              </select>
              <input
                type="text"
                // name="student_id"
                placeholder="Mã sinh viên"
                className="border border-gray-300 p-2"
              // value={formData.student_id}
              // onChange={handleChange}
              />
              <input
                type="text"
                // name="cccd"
                placeholder="Số CCCD/CMT"
                className="border border-gray-300 p-2"
              // value={formData.cccd}
              // onChange={handleChange}
              />
              <input
                type="text"
                name="religion"
                placeholder="Tôn giáo"
                className="border border-gray-300 p-2"
                value={formData.religion}
                onChange={handleChange}
              />
              <input
                type="text"
                // name="nationality"
                placeholder="Quốc tịch"
                className="border border-gray-300 p-2"
              // value={formData.nationality}
              // onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Thông tin nhập học</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <input
                type="text"
                // name="faculty"
                placeholder="Khoa"
                className="border border-gray-300 p-2"
              // value={formData.faculty}
              // onChange={handleChange}
              />
              <input
                type="text"
                name="major"
                placeholder="Ngành"
                className="border border-gray-300 p-2"
                value={formData.major}
                onChange={handleChange}
              />
              <input
                type="text"
                // name="course"
                placeholder="Khóa"
                className="border border-gray-300 p-2"
              // value={formData.course}
              // onChange={handleChange}
              />
              <input
                type="text"
                name="class"
                placeholder="Lớp"
                className="border border-gray-300 p-2"
                value={formData.class}
                onChange={handleChange}
              />
              <input
                type="text"
                // name="start_year"
                placeholder="Năm bắt đầu"
                className="border border-gray-300 p-2"
              // value={formData.start_year}
              // onChange={handleChange}
              />
              <input
                type="text"
                // name="end_year"
                placeholder="Năm kết thúc"
                className="border border-gray-300 p-2"
              // value={formData.end_year}
              // onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Thông tin liên hệ</h3>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <input
                type="email"
                // name="email"
                placeholder="Email"
                className="border border-gray-300 p-2"
                value={"huy@gmail.com"}
              // onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                className="border border-gray-300 p-2"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                // name="address"
                placeholder="Địa chỉ liên hệ"
                className="border border-gray-300 p-2"
              // value={formData.address}
              // onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button type="button"
              className="bg-blue-600 text-white py-2 px-6"
              onClick={handleSubmit}
            >Submit</button>
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

export default CreateStudent;

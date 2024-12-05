import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as UserServices from "../services/UserServices";
import { useMutationHooks } from "../hooks/useMutationHooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Email và mật khẩu không được để trống!");
      return;
    }
    console.log(formData.email, formData.password)
    mutation.mutate({
      email: formData.email,
      password: formData.password,
    });
  };
  const mutation = useMutationHooks((data) => UserServices.signInUser(data));
  const { data, isPending, isSuccess } = mutation;
  console.log("muta", data, isPending, isSuccess);
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      localStorage.setItem("access_token", data?.access_token);
    }
  }, [isSuccess]);


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
              Đăng nhập
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
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                    pattern="^(?=.*[A-Z])(?=.*\\d).{6,15}$"
                    title="Mật khẩu phải có độ dài từ 6 - 15 ký tự, bao gồm ít nhất 1 chữ cái in hoa và 1 chữ số."
                  />
                </div>
                {/* <div className="mb-4">
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
                </div> */}
                <div className="flex">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full px-4 py-2 text-white bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
              <div className="flex items-center justify-center text-center">
                              <a href="#" className="text-blue-600">Quên mật khẩu</a>
                              <a href="#" className="text-blue-600">Đăng ký nội trú</a>
              </div>
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

export default Login;

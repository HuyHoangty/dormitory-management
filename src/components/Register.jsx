import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }

    console.log('Form submitted:', formData);
    // Thực hiện logic đăng ký (gửi dữ liệu đến server)
    mutation.mutate(formData);
  };

  const mutation = useMutationHooks((data) => UserServices.signUpUser(data));

  const { data, isPending, isSuccess } = mutation;

  console.log("muta---", data, isPending, isSuccess);

  useEffect(() => {
    if (isSuccess) {
      alert('Bạn đã đăng ký thành công, hãy đăng nhập lại!');
      navigate("/sign-in");
    }
  }, [isSuccess]);

  const handleSignIn = () => {
    navigate("/sign-in");
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
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
            <h1 className="text-3xl font-extrabold text-blue-700 uppercase tracking-wide">
              Hệ thống quản lý ký túc xá
            </h1>
          </div>
          <div className="w-1/3 text-right">
            <img
              src="/src/assets/img/icon_logo/VNU_CSS_LOGO.png"
              alt="VNU CSS Logo"
              className="w-32 inline-block"
            />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-700 shadow-md">
        <div className="container mx-auto flex justify-end items-center px-6 py-2 text-white">
          <a className="mx-4 hover:underline hover:text-gray-200 transition">
            <FontAwesomeIcon icon={faHome} className="mr-1" /> Trang chủ
          </a>
          <a className="mx-4 hover:underline hover:text-gray-200 transition">
            <FontAwesomeIcon icon={faCompass} className="mr-1" /> Trang điều khiển
          </a>
          <button className="flex items-center hover:underline">
            <FontAwesomeIcon icon={faUser} className="mr-1" /> Tài khoản
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="py-8 px-10">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Đăng ký
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Nhập lại mật khẩu"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 focus:outline-none transition duration-200"
              >
                Đăng ký
              </button>
            </form>
            <div className="flex justify-between items-center mt-6 text-sm">
              <span className="text-gray-600">
                Đã có tài khoản?
              </span>
              <a
                onClick={handleSignIn}
                className="text-blue-600 font-medium hover:text-blue-500 hover:underline transition duration-200 cursor-pointer"
              >
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Hệ Thống Quản Lý Ký Túc Xá</p>
        </div>
      </footer>
    </div>

  );
}

export default Register;
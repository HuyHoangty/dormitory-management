import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as UserServices from "../services/UserServices";
import { useMutationHooks } from "../hooks/useMutationHooks";
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../redux/slice/userSlice';
import { jwtDecode } from "jwt-decode";

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
  const dispatch = useDispatch();

  // Hàm xử lý khi người dùng thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Hàm xử lý khi submit form
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
    const fetchDetails = async () => {
      if (isSuccess) {
        if (data?.message === "Email không hợp lệ") {
          alert("Email không hợp lệ!");
        }

        if (data?.message === "Sai mật khẩu") {
          alert("Sai mật khẩu!");
        }


        localStorage.setItem("access_token", data?.access_token);
        if (data?.access_token) {
          const decoded = jwtDecode(data?.access_token);
          if (decoded.role === "student") {
            if (decoded?.id) {
              dispatch(setUser({ access_token: data?.access_token, user_id: decoded?.id, email: formData.email }));
              try {
                const approved = await handleGetDetailsStudent(decoded?.id, data?.access_token);

                console.log("approve", approved)

                if (approved) {
                  navigate("/create-student");
                }

                if (approved[0].approved === 1) {
                  dispatch(setUser({
                    ...approved[0], // Gộp chi tiết sinh viên vào user
                  }));
                  navigate("/");
                } else {
                  navigate("/create-student");
                }
              } catch (error) {
                console.error("Error fetching student details:", error);
              }
            }
          }

          if (decoded.role === "staff") {
            // Xử lý cho staff nếu cần
            if (decoded?.id) {
              dispatch(setUser({ access_token: data?.access_token, user_id: decoded?.id, email: formData.email }));
              try {
                const dataStaff = await handleGetDetailsStaff(decoded?.id, data?.access_token);
                console.log("dataStaff", dataStaff)
                navigate("/staff");
              } catch (error) {
                console.error("Error fetching student details:", error);
              }
            }
          }

          if (decoded.role === "admin") {
            console.log("Logged in as admin");
            // Xử lý cho admin nếu cần
            dispatch(setUser({ admin: true }));
            navigate("/admin");
          }
        }
      }
    };

    fetchDetails(); // Gọi hàm async bên trong useEffect
  }, [isSuccess]);

  const handleGetDetailsStudent = async (id, token) => {
    const res = await UserServices.getDetailStudent(id, token);
    dispatch(setUser({ ...res?.data }));
    return res.data;
  };

  const handleGetDetailsStaff = async (id, token) => {
    const res = await UserServices.getDetailStaff(id, token);
    console.log("Staff", res);
    dispatch(setUser({ ...res?.data }));
    return res.data;
  };

  const handleSignUp = () => {
    navigate("/sign-up");
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
            <h1 className="text-3xl font-extrabold text-blue-700 uppercase">
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
        <div className="container mx-auto flex justify-end items-center px-6 py-2">
          <a className="text-white mx-4 hover:underline hover:text-gray-200 transition">
            <FontAwesomeIcon icon={faHome} className="mr-1" /> Trang chủ
          </a>
          <a className="text-white mx-4 hover:underline hover:text-gray-200 transition">
            <FontAwesomeIcon icon={faCompass} className="mr-1" /> Trang điều khiển
          </a>
          <div className="relative">
            <button className="text-white hover:underline flex items-center">
              <FontAwesomeIcon icon={faUser} className="mr-1" /> Tài khoản
            </button>
            <div className="hidden absolute mt-2 w-40 bg-white shadow-lg rounded-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Đăng xuất
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="py-6 px-8">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Đăng nhập
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-600 font-medium">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-200"
              >
                Đăng nhập
              </button>
            </form>
            <div className="flex justify-between items-center mt-6 text-sm">
              <span className="text-gray-600">
                Chưa có tài khoản?
              </span>
              <a
                onClick={handleSignUp}
                className="text-blue-600 font-medium hover:text-blue-500 hover:underline transition duration-200 cursor-pointer"
              >
                Đăng ký
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

export default Login;

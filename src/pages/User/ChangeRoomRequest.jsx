import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faSave,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function ChangeRoomRequest() {
  const [formData, setFormData] = useState({
    title: '',
    roomTypeId: '',
    roomId: '',
  });

  const [roomTypes, setRoomTypes] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Giả lập dữ liệu loại phòng
    setRoomTypes([
      { id: 55, name: 'N2' },
      { id: 56, name: 'A3a' },
      { id: 57, name: 'A3d' },
      { id: 59, name: 'A2' },
      { id: 63, name: 'A3b' },
      { id: 68, name: 'A3c' },
      { id: 71, name: 'N3' },
      { id: 76, name: 'A2a' },
    ]);
  }, []);

  useEffect(() => {
    if (formData.roomTypeId) {
      // Giả lập dữ liệu phòng dựa trên roomTypeId
      setRooms([
        { id: 1, name: 'Tòa nhà A - Phòng 101' },
        { id: 2, name: 'Tòa nhà A - Phòng 102' },
        { id: 3, name: 'Tòa nhà A - Phòng 103' },
        //................Tên các phòng khác
      ]);
    } else {
      setRooms([]);
    }
  }, [formData.roomTypeId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (status) => (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData, 'Status:', status);
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
      <main className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Yêu cầu đổi phòng
        </h2>

        <form>
          {/* Tiêu đề */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">
              Tiêu đề <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              required
            />
          </div>

          {/* Thông tin phòng hiện tại */}
          <div className="mb-6">
            <h3 className="font-bold border-b pb-2 mb-4">
              Thông tin phòng và cơ sở lưu trú hiện tại
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-gray-700">Cơ sở lưu trú</label>
                <input
                  type="text"
                  value="Ký túc xá A"
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Tòa nhà</label>
                <input
                  type="text"
                  value="A"
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phòng số</label>
                <input
                  type="text"
                  value="205"
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-700">Loại phòng</label>
                <input
                  type="text"
                  value="A8"
                  disabled
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
                />
              </div>
            </div>
          </div>

          {/* Lựa chọn phòng */}
          <div className="mb-6">
            <h3 className="font-bold border-b pb-2 mb-4">Lựa chọn phòng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="roomTypeId" className="block text-gray-700">
                  Loại phòng <span className="text-red-500">*</span>
                </label>
                <select
                  id="roomTypeId"
                  name="roomTypeId"
                  value={formData.roomTypeId}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  required
                >
                  <option value="">.: Lựa chọn :.</option>
                  {roomTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="roomId" className="block text-gray-700">
                  Tòa nhà / Phòng số
                </label>
                <select
                  id="roomId"
                  name="roomId"
                  value={formData.roomId}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value="">.: Lựa chọn :.</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Nút hành động */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleSubmit(1)}
              className="mx-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Lưu nháp
            </button>
            <button
              type="submit"
              onClick={handleSubmit(2)}
              className="mx-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
            >
              Gửi
              <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
            </button>
          </div>
        </form>
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

export default ChangeRoomRequest;

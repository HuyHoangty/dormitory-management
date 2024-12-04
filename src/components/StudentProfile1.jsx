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
  // Lấy tất cả các checkbox đã được chọn
  const checkboxes = document.querySelectorAll('#priorityForm input[type="checkbox"]:checked');

  // Tạo một mảng để lưu trữ giá trị của các checkbox đã chọn
  const selectedPriorities = [];
  checkboxes.forEach(checkbox => {
      selectedPriorities.push(checkbox.value);
  });

  // Chuyển đổi mảng thành một chuỗi JSON
  const data = JSON.stringify(selectedPriorities);

  // Gửi dữ liệu đến backend (thay thế 'your_backend_url' bằng URL thực tế)
  fetch('your_backend_url', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: data
  })
  .then(response => response.json())
  .then(data => {
      console.log('Dữ liệu đã được gửi:', data);
      // Xử lý phản hồi từ backend ở đây
  })
  .catch(error => {
      console.error('Lỗi khi gửi dữ liệu:', error);
  });

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
      <div className="flex flex-col items-center justify-center min-h-screen">
                    <div className="bg-white w-full max-w-6xl p-6 shadow-md">
                    
                        <div className="text-center text-gray-700 font-semibold text-md mb-4">
                            Đối tượng ưu tiên
                        </div>
                        <div className="border border-gray-300 p-6">
                            <div className="text-left font-semibold mb-2">
                                Danh sách đối tượng ưu tiên
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <input type="checkbox" id="option1" className="mr-2" />
                                    <label htmlFor="option1">
                                        Anh hùng lực lượng vũ trang nhân dân, anh hùng lao động, thương binh, bệnh binh, người hưởng chính sách như thương binh, HSSV khuyết tật(Tiên tố file: 0001)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option2" className="mr-2" />
                                    <label htmlFor="option2">
                                        Con liệt sỹ, con thương binh, con bệnh binh, con của người hưởng chính sách như thương binh, con của người có công(Tiên tố file: 0002)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option3" className="mr-2" />
                                    <label htmlFor="option3">
                                        HSSV có hộ khẩu thường trú tại vùng cao, vùng có điều kiện kinh tế - xã hội đặc biệt khó khăn(Tiên tố file: 0003)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option4" className="mr-2" />
                                    <label htmlFor="option4">
                                        Là người dân tộc thiểu số(Tiên tố file: 0004)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option5" className="mr-2" />
                                    <label htmlFor="option5">
                                        Con mồ côi cả cha và mẹ(Tiên tố file: 0005)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option6" className="mr-2" />
                                    <label htmlFor="option6">
                                        HSSV là con hộ nghèo, cận nghèo theo quy định hiện hành của Nhà nước(Tiên tố file: 0006)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option7" className="mr-2" />
                                    <label htmlFor="option7">
                                        HSSV nữ(Tiên tố file: 0007)
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" id="option8" className="mr-2" />
                                    <label htmlFor="option8">
                                        HSSV tích cực tham gia các hoạt động do nhà trường, Đoàn TNCS Hồ Chí Minh, Hội sinh viên, khu nội trú hoặc các tổ chức xã hội tổ chức(Tiên tố file: 0008)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Quay lại
                            </button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded">
                                Tiếp tục
                            </button>
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

export default submitForm;

import React from 'react';

function ChangePassword() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="w-1/3">
            <a href="#">
              <img src="/img/icon_logo/VNU_LOGO.png" alt="VNU Logo" className="w-40" />
            </a>
          </div>
          <div className="w-1/3 text-center">
            <h1 className="text-2xl font-bold text-green-700">TRUNG TÂM HỖ TRỢ SINH VIÊN</h1>
          </div>
          <div className="w-1/3 text-right">
            <img src="/img/icon_logo/VNU_CSS_LOGO.png" alt="VNU CSS Logo" className="w-40 inline-block" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-green-700">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center text-white">
          <a href="#" className="mx-2 hover:underline"><i className="fas fa-home"></i> Trang chủ</a>
          <a href="#" className="mx-2 hover:underline"><i className="fas fa-compass"></i> Trang điều khiển</a>
          <div className="relative inline-block text-left">
            <button className="inline-flex items-center hover:underline focus:outline-none">
              <i className="fas fa-user"></i> <span>Tài khoản</span>
            </button>
            {/* Dropdown menu */}
            <div className="hidden origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i className="fas fa-sign-out-alt"></i> Đăng xuất</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <button onClick={() => window.history.back()} className="mb-4 text-gray-700 hover:text-green-700 focus:outline-none">
            <i className="fas fa-caret-left"></i> Quay lại
          </button>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="py-4 px-6">
              <h2 className="text-2xl font-semibold text-gray-800 text-center">Đổi Mật Khẩu</h2>
              <div className="my-2">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
                  <p className="font-bold">Lưu ý</p>
                  <p>Mật khẩu phải có độ dài từ 6 - 15 ký tự và phải bao gồm 1 chữ cái in hoa và 1 chữ số.</p>
                </div>
              </div>
              <form className="mt-6">
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu hiện tại</label>
                  <input type="password" name="current_password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mật khẩu mới</label>
                  <input type="password" name="new_password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" required pattern="^(?=.*[A-Z])(?=.*\d).{6,15}$" title="Mật khẩu phải có độ dài từ 6 - 15 ký tự, bao gồm ít nhất 1 chữ cái in hoa và 1 chữ số." />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Nhập lại mật khẩu mới</label>
                  <input type="password" name="confirm_new_password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-600" required />
                </div>
                <div className="flex">
                  <button type="submit" className="w-full px-4 py-2 text-white bg-green-700 rounded-md hover:bg-green-600 focus:outline-none">Cập nhật</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Trung Tâm Hỗ Trợ Sinh Viên</p>
        </div>
      </footer>
    </div>
  );
}

export default ChangePassword;

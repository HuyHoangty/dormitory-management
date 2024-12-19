import { useEffect, useState } from "react";
import * as UserServices from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {
  faTasks,
  faList,
  faFileInvoiceDollar,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function InvoiceManagement() {
  const [invoices, setInvoices] = useState(null);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();


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
    navigate('/staff');
  }

  const handleListStudent = () => {
    navigate('/staff/list-student');
  }

  const handleFees = () => {
    navigate('/staff/invoice-management');
  }

  const handleSetting = () => {
    navigate('/staff/profile');
  }

  const handleCreateFees = () => {
    navigate('/staff/invoice-management/create');
  }


  const fetchData = async () => {
    const res = await UserServices.getAllFees();
    if (res?.status === "OK") {
      setInvoices(res?.data);
    }
  };

  console.log('Fetching data11', invoices)

  useEffect(() => {
    fetchData();
  }, []);

  console.log('Fetching data12', invoices)

  const [selectedInvoice, setSelectedInvoice] = useState(null); // Lưu hóa đơn được chọn
  const [showNavbar, setShowNavbar] = useState(false); // Trạng thái hiển thị navbar

  const handleUpdateFee = (item) => {
    setSelectedInvoice(item); // Lưu hóa đơn được chọn
    setShowNavbar(true); // Hiển thị navbar
  };

  console.log('selectedInvoice', selectedInvoice)

  const handleStatusChange = async (status) => {
    if (selectedInvoice) {
      console.log(`Hóa đơn ${selectedInvoice.room_number} đổi trạng thái thành: ${status}`);
      // Thêm logic cập nhật trạng thái, ví dụ gọi API
      const res = await UserServices.updateFees(selectedInvoice?.fee_id, {
        status: status,
      })

      if (res?.status === "OK") {
        fetchData();
        alert("Cập nhật thành công")
      } else {
        alert("Cập nhật thất bại")
      }
    }
    setShowNavbar(false); // Ẩn navbar sau khi chọn
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
        <div className="relative flex flex-col h-full max-h-full">
          <div className="px-6 pt-4">

            <a className="flex">
              <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
              <div>
                <p className="text-gray-500">Ban quản lý</p>
                <p className="font-bold">{user[0]?.full_name}</p>
              </div>
            </a>

          </div>


          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
              <ul className="flex flex-col space-y-1">
                <li>
                  <a onClick={handleListRequest} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className='mx-5' /> Quản lý yêu cầu
                  </a>
                </li>

                <li className="hs-accordion" id="users-accordion">
                  <a onClick={handleListStudent} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300">
                    <FontAwesomeIcon icon={faList} className='mx-5' /> Danh sách sinh viên
                  </a>
                </li>

                <li className="hs-accordion" id="account-accordion">
                  <a
                    onClick={handleFees}
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-100 text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faTasks} className="mx-5" />
                    Quản lý thanh toán
                  </a>
                </li>

                <li><a onClick={handleSetting} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300">
                  <FontAwesomeIcon icon={faUser} className='mx-5' /> Tài khoản
                </a></li>
                <li>
                  <a onClick={handleSignOut} className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300">
                    <FontAwesomeIcon icon={faSignOutAlt} className='mx-5' /> Đăng xuất
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="flex h-full">
            <main className="w-full p-6">
              <h1 className="text-2xl font-bold mb-6">Quản lý thanh toán</h1>

              {/* Thanh tìm kiếm và sắp xếp */}
              <div className="flex mb-4 gap-4">
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên sinh viên, phòng..."
                  className="border p-2 rounded w-1/2"
                />
                <select className="border p-2 rounded w-1/2">
                  <option>Sắp xếp theo: Tên sinh viên</option>
                  <option>Sắp xếp theo: Tổng tiền</option>
                  <option>Sắp xếp theo: Trạng thái</option>
                </select>
              </div>

              {/* Bảng hiển thị */}
              <div className="bg-white rounded-lg shadow p-4">
                {showNavbar && (
                  <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
                    <p className="text-center font-bold">Chọn trạng thái cho hóa đơn phòng {selectedInvoice?.room_number}, tòa nhà {selectedInvoice?.room_number.slice(-1)}, tháng {selectedInvoice?.created_at?.slice(5, 7)}</p>
                    <div className="flex justify-center gap-4 mt-2">
                      <button
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => handleStatusChange('Đã đóng')}
                      >
                        Đã đóng
                      </button>
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleStatusChange('Chưa đóng')}
                      >
                        Chưa đóng
                      </button>
                      <button
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                        onClick={() => handleStatusChange('Quá hạn')}
                      >
                        Quá hạn
                      </button>
                    </div>
                  </div>
                )}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="py-2 px-4">Tòa nhà</th>
                      <th className="py-2 px-4">Phòng</th>
                      <th className="py-2 px-4">Tiền điện</th>
                      <th className="py-2 px-4">Tiền nước</th>
                      <th className="py-2 px-4">Tiền phòng</th>
                      <th className="py-2 px-4">Tháng</th>
                      <th className="py-2 px-4">Tổng tiền</th>
                      <th className="py-2 px-4">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices && invoices.length > 0 ? (
                      invoices.sort((a, b) => {
                        // Lấy tháng từ `created_at` và chuyển sang số
                        const monthA = parseInt(a.created_at?.slice(5, 7), 10) || 0;
                        const monthB = parseInt(b.created_at?.slice(5, 7), 10) || 0;

                        // Sắp xếp tăng dần theo tháng
                        return monthB - monthA;
                      }).map((item, index) => (
                        <tr key={index} className="border-t">
                          <td className="py-4 px-4">Tòa nhà {item?.room_number.slice(-1)}</td>
                          <td className="py-4 px-4">{item?.room_number}</td>
                          <td className="py-4 px-4">{item?.electricity_fee}</td>
                          <td className="py-4 px-4">{item?.water_fee}</td>
                          <td className="py-4 px-4">{item?.ktx_fee}</td>
                          <td className="py-4 px-4">{item?.created_at?.slice(5, 7)}</td>
                          <td className="py-4 px-4">{item?.total_fee}</td>
                          <td className="py-4 px-4">
                            <button
                              className={`px-2 py-1 rounded ${item?.status === 'Đã đóng'
                                ? 'bg-green-200 text-green-800'
                                : item?.status === 'Chưa đóng'
                                  ? 'bg-red-200 text-red-800'
                                  : 'bg-yellow-200 text-yellow-800'
                                }`}
                            >
                              {item?.status}
                            </button>

                          </td>
                          <td className="py-4 px-4 text-center">
                            <button
                              onClick={() => handleUpdateFee(item)}
                              className="text-blue-500 hover:text-blue-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5 inline-block"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M16.862 3.487a2.25 2.25 0 013.182 3.182L8.679 18.034a4.5 4.5 0 01-1.695 1.072l-3.129 1.043a.75.75 0 01-.949-.949l1.043-3.129a4.5 4.5 0 011.072-1.695L16.862 3.487z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="8" className="text-center py-8 text-gray-500">
                          Không có dữ liệu
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Nút tạo hóa đơn */}
              <div className="text-right mt-4">
                <button onClick={handleCreateFees} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition">
                  + Tạo hóa đơn
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
export default InvoiceManagement;
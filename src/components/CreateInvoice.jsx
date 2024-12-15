import { useEffect, useState } from "react";
import * as UserServices from "../services/UserServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/userSlice';
import { useSelector } from 'react-redux';
import {
  faTasks,
  faList,
  faFileInvoiceDollar,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function CreateInvoice() {
  const [formData, setFormData] = useState({
    roomNumber: '',
    electricityFee: '',
    waterFee: '',
    ktxFee: 200000,
    status: 'Chưa thanh toán',
  });

  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [room, setRoom] = useState(null)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Hóa đơn được tạo:', formData);
    // // Xử lý logic gửi dữ liệu lên server


    const res = await UserServices.createFees(formData?.roomNumber, {
      ktx_fee: Number(formData?.ktxFee),
      electricity_fee: Number(formData?.electricityFee),
      water_fee: Number(formData?.waterFee),
    }, user?.access_token);
    if (res?.status === "OK") {
      console.log("resCreateInvoice", res);
      alert('Hóa đơn được tạo thành công!');
    }

  };

  const fetchData = async () => {
    const res = await UserServices.getAllRoom();
    if (res?.status === "OK") {
      setRoom(res?.data);
    }
  };

  console.log('Fetching data11', formData)

  useEffect(() => {
    fetchData();
  }, []);


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
              <h1 className="text-2xl font-bold mb-6">Tạo hóa đơn</h1>

              {/* Form nhập thông tin hóa đơn */}
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-4">
                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Phòng</label>
                  <select
                    name="roomNumber"
                    value={formData.roomNumber}
                    onChange={handleInputChange}
                    // className="border p-2 rounded"
                    required
                  >
                    <option value="">Chọn phòng</option>
                    {room && room.length > 0 ? (
                      room.map((room) => (
                        <option key={room.room_id} value={room.room_id}>
                          Phòng {room.room_number}
                        </option>
                      ))
                    ) : (
                      <option value="">Không có phòng nào</option>
                    )}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Tiền điện</label>
                  <input
                    type="number"
                    name="electricityFee"
                    value={formData.electricityFee}
                    onChange={handleInputChange}
                    placeholder="Nhập tiền điện"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Tiền nước</label>
                  <input
                    type="number"
                    name="waterFee"
                    value={formData.waterFee}
                    onChange={handleInputChange}
                    placeholder="Nhập tiền nước"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 font-semibold">Tiền phòng</label>
                  <input
                    type="number"
                    name="ktxFee"
                    value={formData.ktxFee}
                    onChange={handleInputChange}
                    placeholder="Nhập tiền phòng"
                    className="border p-2 rounded"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition w-full"
                >
                  Tạo hóa đơn
                </button>
              </form>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateInvoice;
import { useEffect, useState } from "react";
import * as UserServices from "../services/UserServices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import {
  faTasks,
  faList,
  faFileInvoiceDollar,
  faUser,
  faCog,
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

  const [room, setRoom] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      <div className="-mt-px">
        <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex items-center py-2">

            <button type="button" className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-application-sidebar" aria-label="Toggle navigation" data-hs-overlay="#hs-application-sidebar">
              <span className="sr-only">Toggle Navigation</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M15 3v18" /><path d="m8 9 3 3-3 3" /></svg>
            </button>

            <ol className="ms-3 flex items-center whitespace-nowrap">
              <li className="flex items-center text-sm text-gray-800 dark:text-neutral-400">
                Application Layout
                <svg className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </li>
              <li className="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400" aria-current="page">
                Dashboard
              </li>
            </ol>

          </div>
        </div>
      </div>
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
                  <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" href="/request-management">
                    <FontAwesomeIcon icon={faTasks} className='mx-5' /> Quản lý yêu cầu
                  </a>
                </li>

                <li className="hs-accordion" id="users-accordion">
                  <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" href="/student-management">
                    <FontAwesomeIcon icon={faList} className='mx-5' /> Danh sách sinh viên
                  </a>
                </li>

                <li className="hs-accordion" id="account-accordion">
                  <a
                    className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg bg-gray-100 text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                  >
                    <FontAwesomeIcon icon={faFileInvoiceDollar} className="mx-5" />
                    Quản lý thanh toán
                  </a>
                </li>

                <li><a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-300" href="#">
                  <FontAwesomeIcon icon={faUser} className='mx-5' /> Tài khoản
                </a></li>
                <li>
                  <a className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-300" href="#">
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
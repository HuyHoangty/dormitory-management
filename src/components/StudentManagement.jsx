import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTasks,
    faList,
    faFileInvoiceDollar,
    faUser,
    faCog,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
function submitForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [students, setStudents] = React.useState([
        { name: 'Nguyễn Văn A', room: '101', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang ở' },
        { name: 'Nguyễn Văn B', room: '102', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ phê duyệt' },
        { name: 'Nguyễn Văn D', room: '103', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ phê duyệt' },
        { name: 'Nguyễn Văn E', room: '104', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang ở' },
        { name: 'Nguyễn Văn F', room: '101', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang ở' },
        { name: 'Nguyễn Văn G', room: '101', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang ở' },
        { name: 'Nguyễn Văn H', room: '103', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang ở' },
        { name: 'Nguyễn Văn I', room: '102', email: 'abc@gmail.com', phone: '0123456789', status: 'Đang chờ phê duyệt' },
    ]);

    const [activeTab, setActiveTab] = React.useState('Tất cả');

    const handleStatusChange = (index) => {
        const newStudents = [...students];
        const currentStatus = newStudents[index].status;
        if (currentStatus === 'Đang ở') {
            newStudents[index].status = 'Đang chờ phê duyệt';
        } else if (currentStatus === 'Đang chờ phê duyệt') {
            newStudents[index].status = 'Đã rời đi';
        } else {
            newStudents[index].status = 'Đang ở';
        }
        setStudents(newStudents);
    };

    const handleStudentClick = (name) => {
        window.location.href = `/student-details?name=${encodeURIComponent(name)}`;
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
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



            {/* Main Content */}
            <div className="flex">
                <aside className="w-1/5 bg-white p-4">
                    <div className="flex items-center m-10">
                        <img src="https://placehold.co/50x50" alt="User avatar" className="rounded-full w-12 h-12 mr-4" />
                        <div>
                            <p className="text-gray-500">Ban quản lý</p>
                            <p className="font-bold">Quản lý A</p>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li className="mb-5">
                                <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faTasks} className='mx-5' /> Quản lý yêu cầu
                                </a>
                            </li>
                            <li className="mb-5">
                                <a href="#" className="flex items-center text-blue-500">
                                    <FontAwesomeIcon icon={faList} className='mx-5' /> Danh sách sinh viên
                                </a>
                            </li>
                            <li className="mb-5">
                                <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faFileInvoiceDollar} className='mx-5' /> Quản lý thanh toán
                                </a>
                            </li>
                            <li className="mb-5">
                                <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faUser} className='mx-5' /> Tài khoản
                                </a>
                            </li>
                            <li className="mb-5">
                                <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faCog} className='mx-5' /> Cài đặt
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center text-gray-700 hover:text-blue-500">
                                    <FontAwesomeIcon icon={faSignOutAlt} className='mx-5' /> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="w-4/5 p-6">
                    <h1 className="text-2xl font-bold mb-6">Danh sách sinh viên</h1>
                    <div className="flex mb-6">
                        {['Tất cả', 'Đang chờ phê duyệt', 'Đang ở', 'Đã rời đi'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`mr-4 ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="flex mb-4">
                        <input type="text" placeholder="Tìm kiếm" className="border p-2 rounded mr-4 w-1/2" />
                        <select className="border p-2 rounded w-1/2">
                            <option>Sắp xếp theo : Tên sinh viên</option>
                        </select>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500">
                                    <th className="py-2 px-4">Tên sinh viên</th>
                                    <th className="py-2 px-4">Phòng</th>
                                    <th className="py-2 px-4">Email</th>
                                    <th className="py-2 px-4">Số điện thoại</th>
                                    <th className="py-2 px-4">Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((item, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="py-8 px-4">
                                            <button onClick={() => handleStudentClick(item.name)} className="text-blue-500 hover:underline">
                                                {item.name}
                                            </button>
                                        </td>
                                        <td className="py-8 px-4">{item.room}</td>
                                        <td className="py-8 px-4">{item.email}</td>
                                        <td className="py-8 px-4">{item.phone}</td>
                                        <td className="py-8 px-4">
                                            <button
                                                onClick={() => handleStatusChange(index)}
                                                className={`px-2 py-1 rounded ${item.status === 'Đang ở' ? 'bg-green-100 text-green-700' : item.status === 'Đang chờ phê duyệt' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}
                                            >
                                                {item.status}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-gray-500">Kết quả từ 1 đến 8 trên 50</p>
                            <div className="flex items-center">
                                <button className="px-3 py-1 border rounded-l">{"<"}</button>
                                <button className="px-3 py-1 border">1</button>
                                <button className="px-3 py-1 border">2</button>
                                <button className="px-3 py-1 border">3</button>
                                <button className="px-3 py-1 border">4</button>
                                <button className="px-3 py-1 border">...</button>
                                <button className="px-3 py-1 border rounded-r">6</button>
                            </div>
                        </div>
                    </div>
                    <button className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">Thêm sinh viên</button>
                </main>
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
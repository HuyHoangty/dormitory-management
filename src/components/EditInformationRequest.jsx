import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faUser,
  faSignOutAlt,
  faKey,
  faSave,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function EditInformationRequest() {
  // Khai báo state cho form
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    ethnicGroup: '',
    religion: '',
    nationality: '',
    studentCode: '',
    idNumber: '',
    idType: '',
    dateOfIssue: '',
    placeOfIssue: '',
    youthUnionDate: '',
    country: '',
    province: '',
    district: '',
    ward: '',
    detailedAddress: '',
    university: '',
    faculty: '',
    major: '',
    course: '',
    className: '',
    yearBegins: '',
    yearEnds: '',
    father: {
      name: '',
      yearOfBirth: '',
      phone: '',
      occupation: '',
      workplace: '',
    },
    mother: {
      name: '',
      yearOfBirth: '',
      phone: '',
      occupation: '',
      workplace: '',
    },
    email: '',
    phoneNumber: '',
    contactAddress: '',
    priorityList: [],
    files: [],
    boardingRegistration: '',
    boardingFacility: '',
    roomType: '',
  });

  // Hàm xử lý thay đổi form
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Xử lý các trường nested (father, mother)
    if (name.startsWith('father.') || name.startsWith('mother.')) {
      const [parent, field] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [field]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Hàm xử lý nộp form
  const handleSubmit = (hasSendApproval) => (e) => {
    e.preventDefault();
    // Xử lý lưu nháp hoặc gửi yêu cầu dựa trên hasSendApproval
    console.log('Form submitted:', formData, 'HasSendApproval:', hasSendApproval);
  };

  // Hàm xử lý tải lên tệp
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      files: files,
    });
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
              TRUNG TÂM HỖ TRỢ SINH VIÊN
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
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FontAwesomeIcon icon={faKey} /> Đổi mật khẩu
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Yêu cầu sửa thông tin
        </h2>

        <form>
          {/* Thông tin cá nhân */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Thông tin cá nhân
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Họ và tên */}
              <div>
                <label htmlFor="fullName" className="block text-gray-700">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Ngày sinh */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-gray-700">
                  Ngày sinh <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Giới tính */}
              <div>
                <label htmlFor="gender" className="block text-gray-700">
                  Giới tính <span className="text-red-500">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              {/* Dân tộc */}
              <div>
                <label htmlFor="ethnicGroup" className="block text-gray-700">
                  Dân tộc <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ethnicGroup"
                  name="ethnicGroup"
                  value={formData.ethnicGroup}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Tôn giáo */}
              <div>
                <label htmlFor="religion" className="block text-gray-700">
                  Tôn giáo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Quốc tịch */}
              <div>
                <label htmlFor="nationality" className="block text-gray-700">
                  Quốc tịch <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
          </section>

          {/* Giấy tờ */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Giấy tờ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Mã sinh viên */}
              <div>
                <label htmlFor="studentCode" className="block text-gray-700">
                  Mã sinh viên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="studentCode"
                  name="studentCode"
                  value={formData.studentCode}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Số CMND/CCCD */}
              <div>
                <label htmlFor="idNumber" className="block text-gray-700">
                  Số CMND/CCCD <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="idNumber"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Loại giấy tờ */}
              <div>
                <label htmlFor="idType" className="block text-gray-700">
                  Loại giấy tờ <span className="text-red-500">*</span>
                </label>
                <select
                  id="idType"
                  name="idType"
                  value={formData.idType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                >
                  <option value="">Chọn loại giấy tờ</option>
                  <option value="CMT">CMT</option>
                  <option value="CCCD">Căn cước công dân</option>
                  <option value="HC">Hộ chiếu</option>
                </select>
              </div>
              {/* Ngày cấp */}
              <div>
                <label htmlFor="dateOfIssue" className="block text-gray-700">
                  Ngày cấp <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfIssue"
                  name="dateOfIssue"
                  value={formData.dateOfIssue}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Nơi cấp */}
              <div>
                <label htmlFor="placeOfIssue" className="block text-gray-700">
                  Nơi cấp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="placeOfIssue"
                  name="placeOfIssue"
                  value={formData.placeOfIssue}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Ngày vào đoàn */}
              <div>
                <label htmlFor="youthUnionDate" className="block text-gray-700">
                  Ngày vào đoàn
                </label>
                <input
                  type="date"
                  id="youthUnionDate"
                  name="youthUnionDate"
                  value={formData.youthUnionDate}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </section>

          {/* Địa chỉ thường trú */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Địa chỉ thường trú
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Quốc gia */}
              <div>
                <label htmlFor="country" className="block text-gray-700">
                  Quốc gia
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Tỉnh/Thành phố */}
              <div>
                <label htmlFor="province" className="block text-gray-700">
                  Tỉnh/Thành phố
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Quận/Huyện */}
              <div>
                <label htmlFor="district" className="block text-gray-700">
                  Quận/Huyện
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Phường/Xã */}
              <div>
                <label htmlFor="ward" className="block text-gray-700">
                  Phường/Xã
                </label>
                <input
                  type="text"
                  id="ward"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Địa chỉ chi tiết */}
              <div className="md:col-span-3">
                <label htmlFor="detailedAddress" className="block text-gray-700">
                  Địa chỉ chi tiết
                </label>
                <input
                  type="text"
                  id="detailedAddress"
                  name="detailedAddress"
                  value={formData.detailedAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </section>

          {/* Thông tin nhập học */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Thông tin nhập học
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Đơn vị đào tạo */}
              <div>
                <label htmlFor="university" className="block text-gray-700">
                  Đơn vị đào tạo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Khoa */}
              <div>
                <label htmlFor="faculty" className="block text-gray-700">
                  Khoa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  value={formData.faculty}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Ngành */}
              <div>
                <label htmlFor="major" className="block text-gray-700">
                  Ngành <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Khóa */}
              <div>
                <label htmlFor="course" className="block text-gray-700">
                  Khóa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Lớp */}
              <div>
                <label htmlFor="className" className="block text-gray-700">
                  Lớp <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Năm bắt đầu */}
              <div>
                <label htmlFor="yearBegins" className="block text-gray-700">
                  Năm bắt đầu
                </label>
                <input
                  type="number"
                  id="yearBegins"
                  name="yearBegins"
                  value={formData.yearBegins}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              {/* Năm kết thúc */}
              <div>
                <label htmlFor="yearEnds" className="block text-gray-700">
                  Năm kết thúc
                </label>
                <input
                  type="number"
                  id="yearEnds"
                  name="yearEnds"
                  value={formData.yearEnds}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          </section>

          {/* Thông tin bố mẹ */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Thông tin bố mẹ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Thông tin bố */}
              <div>
                <h4 className="font-semibold mb-2">Thông tin bố</h4>
                <div className="space-y-4">
                  {/* Họ tên cha */}
                  <div>
                    <label htmlFor="father.name" className="block text-gray-700">
                      Họ tên cha
                    </label>
                    <input
                      type="text"
                      id="father.name"
                      name="father.name"
                      value={formData.father.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Năm sinh */}
                  <div>
                    <label
                      htmlFor="father.yearOfBirth"
                      className="block text-gray-700"
                    >
                      Năm sinh
                    </label>
                    <input
                      type="number"
                      id="father.yearOfBirth"
                      name="father.yearOfBirth"
                      value={formData.father.yearOfBirth}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Số điện thoại */}
                  <div>
                    <label
                      htmlFor="father.phone"
                      className="block text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      id="father.phone"
                      name="father.phone"
                      value={formData.father.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Nghề nghiệp */}
                  <div>
                    <label
                      htmlFor="father.occupation"
                      className="block text-gray-700"
                    >
                      Nghề nghiệp
                    </label>
                    <input
                      type="text"
                      id="father.occupation"
                      name="father.occupation"
                      value={formData.father.occupation}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Nơi làm việc */}
                  <div>
                    <label
                      htmlFor="father.workplace"
                      className="block text-gray-700"
                    >
                      Nơi làm việc
                    </label>
                    <input
                      type="text"
                      id="father.workplace"
                      name="father.workplace"
                      value={formData.father.workplace}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
              {/* Thông tin mẹ */}
              <div>
                <h4 className="font-semibold mb-2">Thông tin mẹ</h4>
                <div className="space-y-4">
                  {/* Họ tên mẹ */}
                  <div>
                    <label htmlFor="mother.name" className="block text-gray-700">
                      Họ tên mẹ
                    </label>
                    <input
                      type="text"
                      id="mother.name"
                      name="mother.name"
                      value={formData.mother.name}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Năm sinh */}
                  <div>
                    <label
                      htmlFor="mother.yearOfBirth"
                      className="block text-gray-700"
                    >
                      Năm sinh
                    </label>
                    <input
                      type="number"
                      id="mother.yearOfBirth"
                      name="mother.yearOfBirth"
                      value={formData.mother.yearOfBirth}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Số điện thoại */}
                  <div>
                    <label
                      htmlFor="mother.phone"
                      className="block text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="text"
                      id="mother.phone"
                      name="mother.phone"
                      value={formData.mother.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Nghề nghiệp */}
                  <div>
                    <label
                      htmlFor="mother.occupation"
                      className="block text-gray-700"
                    >
                      Nghề nghiệp
                    </label>
                    <input
                      type="text"
                      id="mother.occupation"
                      name="mother.occupation"
                      value={formData.mother.occupation}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                  {/* Nơi làm việc */}
                  <div>
                    <label
                      htmlFor="mother.workplace"
                      className="block text-gray-700"
                    >
                      Nơi làm việc
                    </label>
                    <input
                      type="text"
                      id="mother.workplace"
                      name="mother.workplace"
                      value={formData.mother.workplace}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Thông tin liên hệ */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Thông tin liên hệ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Số điện thoại */}
              <div>
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Địa chỉ liên hệ */}
              <div>
                <label htmlFor="contactAddress" className="block text-gray-700">
                  Địa chỉ liên hệ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactAddress"
                  name="contactAddress"
                  value={formData.contactAddress}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
          </section>

          {/* Danh sách đối tượng ưu tiên */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Danh sách đối tượng ưu tiên
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Các checkbox ưu tiên */}
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="priorityList"
                    value="priority1"
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">
                    Ưu tiên 1 (Tiền tố file: 0001)
                  </span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="priorityList"
                    value="priority2"
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">
                    Ưu tiên 2 (Tiền tố file: 0002)
                  </span>
                </label>
              </div>
              {/* Thêm các ưu tiên khác tương tự */}
            </div>
          </section>

          {/* Upload files */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Tải lên tệp
            </h3>
            <div>
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="mt-1 block w-full"
              />
            </div>
          </section>

          {/* Cơ sở lưu trú */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold border-b pb-2 mb-4">
              Cơ sở lưu trú
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Đợt đăng ký lưu trú */}
              <div>
                <label
                  htmlFor="boardingRegistration"
                  className="block text-gray-700"
                >
                  Đợt đăng ký lưu trú <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="boardingRegistration"
                  name="boardingRegistration"
                  value={formData.boardingRegistration}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Trung tâm lưu trú */}
              <div>
                <label
                  htmlFor="boardingFacility"
                  className="block text-gray-700"
                >
                  Trung tâm lưu trú <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="boardingFacility"
                  name="boardingFacility"
                  value={formData.boardingFacility}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
              {/* Loại phòng */}
              <div>
                <label htmlFor="roomType" className="block text-gray-700">
                  Loại phòng <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>
            </div>
          </section>

          {/* Nút hành động */}
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={handleSubmit(false)}
              className="mx-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Lưu nháp
            </button>
            <button
              type="submit"
              onClick={handleSubmit(true)}
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
          <p>&copy; 2024 Trung Tâm Hỗ Trợ Sinh Viên</p>
        </div>
      </footer>
    </div>
  );
}

export default EditInformationRequest;

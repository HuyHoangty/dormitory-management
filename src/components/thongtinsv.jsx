import React from 'react';

const thongtinsv = () => {
    return (

        <div>
            <header className="text-white ">
                <div className="logo"><img src="../../public/image/icon/logo.png" alt /><span className style={{ width: '100%' }}>KÝ TÚC
                    XÁ</span></div>
                <div className="menu ">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                            </a>
                            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav" style={{ fontWeight: 500 }}>
                                    <a className="nav-link active text-white" aria-current="page" href="#"><i className="bi bi-telephone-forward-fill p-1 fs-5" />Điện thoại hỗ trợ: 0333444555</a>
                                    <a className="nav-link text-white" href><img src="../../public/image/bg-login.jfif" alt /></a>
                                    <a className="nav-link text-white" href><i className="fa-solid fa-power-off" /></a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="row">
                <div className="col-lg-3 bg-menu">
                    <nav className="menu">
                        <ul className="list-unstyled">
                            <li className="parent-menu position-relative on">
                                <i className="bi bi-door-open" />
                                Quản lý phòng
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-border-style" />
                                        Sơ đồ phòng
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-patch-plus" />
                                        Thêm phòng
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="bi bi-person-walking" />
                                Quản lý sinh viên
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-border-style" />
                                        Danh sách sinh viên
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-patch-plus" />
                                        Thêm sinh viên
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="fas fa-male" />
                                Quản lý nhân viên
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-border-style" />
                                        Danh sách quản lý
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="fa-solid fa-plus" />
                                        Thêm quản lý
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="bi bi-graph-up-arrow" />
                                Báo cáo thống kê
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-door-closed-fill" />
                                        Thống kê phòng
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-person-walking" />
                                        Thống kê sinh viên
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-calendar-month-fill" />
                                        Thống kê hoá đơn
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="fas fa-user-shield" />
                                Quản trị viên
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-link" />
                                        Liên kết
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="bi bi-person-circle" />
                                Quản lý tài khoản
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-person-lines-fill" />
                                        Danh sách tài khoản
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-person-plus-fill" />
                                        Tạo tài khoản
                                    </li>
                                </a>
                            </ul>
                            <li className="parent-menu position-relative on">
                                <i className="bi bi-receipt" />
                                Quản lý hoá đơn
                                <span className="arrow position-absolute">
                                    <i className="bi bi-chevron-left left d-none" />
                                    <i className="bi bi-chevron-down down" />
                                </span>
                            </li>
                            <ul className="list-unstyled sub-menu">
                                <a href>
                                    <li>
                                        <i className="bi bi-plus-circle-fill" />
                                        Xuất hoá đơn
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-droplet-fill" />
                                        Hoá đơn điện nước
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-house-door-fill" />
                                        Hoá đơn phòng
                                    </li>
                                </a>
                                <a href>
                                    <li>
                                        <i className="bi bi-bicycle" />
                                        Hoá đơn gửi xe
                                    </li>
                                </a>
                            </ul>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-9 info">
                    <div className="box">
                        <div className="row info-student d-flex justify-content-center ">
                            <div className="col-md-4 justify-content-center ">
                                <div className="ttp">
                                    <span>Thông tin phòng ở</span>
                                    <div className>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Mã phòng: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Tầng: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Số người: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder defaultValue />
                                        </div>
                                    </div>
                                    <a href>
                                        <div className="action d-flex">
                                            <div className="icon edit">
                                                <i className="bi bi-pencil-fill" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 ">
                                <div id="add" className=" ">
                                    <video id="video" className="a-d-d d-none" />
                                    <img src alt="add" className="a-d-d" id="anhdaidien" />
                                    <canvas id="canvas" className="d-none a-d-d" />
                                </div>
                                <div className="action d-flex justify-content-center">
                                    <div className="icon edit">
                                        <i className="bi bi-camera-video-fill" />
                                    </div>
                                    <div className="icon render" id="render">
                                        <i className="bi bi-camera-fill" />
                                    </div>
                                    <div className="icon render" id="upload">
                                        <input type="file" className="d-none" id="inp_file" accept="image/*" />
                                        <i className="bi bi-cloud-arrow-up-fill" />
                                    </div>
                                    <div className="icon save">
                                        <i className="bi bi-check-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center ">
                                <form className="ttsv" id="form-info-sv" action method="post">
                                    <span>Thông tin sinh viên</span>
                                    <div className>
                                        <div className="mb-3 object d-none">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Id: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="idsv" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Id sinh viên: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="id" defaultValue readOnly />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Họ tên: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="hoten" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Tình trạng: </label>
                                            <select name="tinhtrang" id="tinhtrangsv">
                                            </select>
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Giới tính: </label>
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Năm sinh: </label>
                                            <input type="date" className id="exampleFormControlInput1" placeholder name="namsinh" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">SĐT: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="sdt" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Quê quán: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="quequan" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">SoCCCD: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="cccd" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Nghề nghiệp: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="nghenghiep" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Trường: </label>
                                            <input type="text" className id="exampleFormControlInput1" placeholder name="truong" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Ngày vào: </label>
                                            <input type="date" className id="exampleFormControlInput1" placeholder name="ngayVao" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Ngày ra: </label>
                                            <input type="date" className id="exampleFormControlInput1" placeholder name="ngayra" defaultValue />
                                        </div>
                                        <div className="mb-3 object">
                                            <div className="input-group mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div className>
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Hợp đồng:
                                                        </label>
                                                        <input type="text" className id="exampleFormControlInput1" placeholder style={{ paddingLeft: 5, width: '50%' }} name="hopdong" defaultValue />
                                                    </div>
                                                    <div className>
                                                        <a className="input-group-text" id="basic-addon2" href style={{ margin: '0 auto', display: 'block' }}>Tới</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="action d-flex">
                                            <div className="icon edit no-write">
                                                <i className="bi bi-pencil-fill" />
                                            </div>
                                            <div className="icon save d-none">
                                                <i className="bi bi-check-lg" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default thongtinsv;
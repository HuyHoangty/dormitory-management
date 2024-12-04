import React from 'react';

const hoadondiennuoc = () => {
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
                <div className="col-lg-9 sdp tp" style={{ minHeight: 1000 }}>
                    <div className="box">
                        <div className="name">
                            <i className="bi bi-droplet-fill" />Thông tin hoá đơn điện nước
                        </div>
                        <div className="form-add row">
                            <div className="col-md-3">
                                <div className="icon">
                                    <img src="../../public/image/icon/electric.png" alt className="object" />
                                </div>
                            </div>
                            <form action method="post" className="col-md-7" id="form">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Hoá đơn:</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="Điện nước" required readOnly />
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Mã HĐ:</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue name="mahd" required readOnly />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Phòng: </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue required readOnly />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Điện cũ:</label>
                                        <input type="number" className="form-control" id="diencu" name="diencu" defaultValue required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Điện mới:</label>
                                        <input type="number" className="form-control" id="dienmoi" name="dienmoi" defaultValue required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Tiền điện:</label>
                                        <input type="text" className="form-control" id="tiendien" defaultValue={0} required readOnly />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nước cũ:</label>
                                        <input type="number" className="form-control" id="nuoccu" name="nuoccu" defaultValue required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Nước mới:</label>
                                        <input type="number" className="form-control" id="nuocmoi" name="nuocmoi" defaultValue required />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Tiền nước:</label>
                                        <input type="text" className="form-control" id="tiennuoc" defaultValue={0} required readOnly />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Tổng tiền:</label>
                                        <input type="text" className="form-control" id="tongtien" defaultValue required readOnly name="tongtien" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Tình trạng:</label>
                                        <select className="form-select" aria-label="Default select example" name="tinhtrang" required>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Ngày chốt:</label>
                                        <input type="date" className="form-control" id="tongtien" defaultValue required readOnly />
                                    </div>
                                </div>
                                <input type="submit" className="btn d-inline-block bgr-ok" onclick="check()" defaultValue="Sửa" name="sua" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default hoadondiennuoc;
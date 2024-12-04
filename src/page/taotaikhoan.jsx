import React from 'react';

const taotaikhoan = () => {
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
                            <i className="bi bi-person-fill-add" />Tạo tài khoản
                        </div>
                        <div className="form-add row">
                            <div className="col-lg-3">
                                <div className="icon">
                                    <img src="../../public/image/icon/account.png" alt className="object" />
                                    <img src="../../public/image/icon/plus.png" alt className="action" />
                                </div>
                            </div>
                            <div className="col-lg-9" style={{ marginTop: 15 }}>
                                <form action method="post">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Tên đăng nhập:</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue name="user" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Mật khẩu:</label>
                                            <div id="password">
                                                <input type="password" className="form-control" id="newpass" defaultValue name="password" required />
                                                <span id="random">RĐ</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Quyền:</label>
                                            <select name="quyen" className="form-select" id require>
                                            </select>
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">Tình trạng:</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" defaultValue="Khoá" readOnly />
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Tạo</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default taotaikhoan;
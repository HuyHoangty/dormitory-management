import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Homepage";
import CreateStudent from "../components/CreateStudent";
import ChangePassword from "../components/ChangePassword";
import Request from "../components/StudentRequest";
import HomeStaff from "../components/HomeStaff"
import DetailRequest from "../components/StudentDetailRequest";
import RoomChangeRequest from "../components/RoomChangeRequest";
import MoveOutRequest from "../components/MoveOutRequest";
import OtherRequest from "../components/OtherRequest";
import ListStudent from "../components/ListStudent";
import InvoiceManagement from "../components/InvoiceManagement";
import CreateInvoice from "../components/CreateInvoice";
import ManagerProfile from "../components/ManagerProfile";

export const router = [
    {
        path: "/sign-in",
        page: Login,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/sign-up",
        page: Register,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/",
        page: Home,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/create-student",
        page: CreateStudent,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/change-password",
        page: ChangePassword,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/request",
        page: Request,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff",
        page: HomeStaff,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/detail-request",
        page: DetailRequest,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/room-change-request",
        page: RoomChangeRequest,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/move-out-request",
        page: MoveOutRequest,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/other-request",
        page: OtherRequest,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/list-student",
        page: ListStudent,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/invoice-management",
        page: InvoiceManagement,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/invoice-management/create",
        page: CreateInvoice,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/staff/profile",
        page: ManagerProfile,
        isShowHeader: true,
        isPrivate: false,
    },
];
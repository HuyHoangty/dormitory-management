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
import HomeAdmin from "../components/HomeAdmin";
import CreateRoom from "../components/CreateRoom";
import ListStaff from "../components/ListStaff";
import CreateStaff from "../components/CreateStaff";

export const router = [
    {
        path: "/sign-in",
        page: Login,
        isPrivate: false,
    },
    {
        path: "/sign-up",
        page: Register,
        isPrivate: false,
    },
    {
        path: "/",
        page: Home,
        isPrivate: true,
    },
    {
        path: "/create-student",
        page: CreateStudent,
        isPrivate: true,
    },
    {
        path: "/change-password",
        page: ChangePassword,
        isPrivate: true,
    },
    {
        path: "/request",
        page: Request,
        isPrivate: true,
    },
    {
        path: "/staff",
        page: HomeStaff,
        isPrivate: true,
    },
    {
        path: "/staff/detail-request",
        page: DetailRequest,
        isPrivate: true,
    },
    {
        path: "/staff/room-change-request",
        page: RoomChangeRequest,
        isPrivate: true,
    },
    {
        path: "/staff/move-out-request",
        page: MoveOutRequest,
        isPrivate: true,
    },
    {
        path: "/staff/other-request",
        page: OtherRequest,
        isPrivate: true,
    },
    {
        path: "/staff/list-student",
        page: ListStudent,
        isPrivate: true,
    },
    {
        path: "/staff/invoice-management",
        page: InvoiceManagement,
        isPrivate: true,
    },
    {
        path: "/staff/invoice-management/create",
        page: CreateInvoice,
        isPrivate: true,
    },
    {
        path: "/staff/profile",
        page: ManagerProfile,
        isPrivate: true,
    },
    {
        path: "/admin",
        page: HomeAdmin,
        isPrivate: true,
    },
    {
        path: "/admin/create-room",
        page: CreateRoom,
        isPrivate: true,
    },
    {
        path: "/admin/list-staff",
        page: ListStaff,
        isPrivate: true,
    },
    {
        path: "/admin/create-staff",
        page: CreateStaff,
        isPrivate: true,
    },
];
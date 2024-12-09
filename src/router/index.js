import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Homepage";
import RequestManagement from "../components/RequestManagement";
import StudentManagement from "../components/StudentManagement";
import InvoiceManagement from "../components/InvoiceManagement";
import ManagerProfile from "../components/ManagerProfile";
import CreateStudent from "../components/CreateStudent";
import ChangePassword from "../components/ChangePassword";
import Request from "../components/StudentRequest";
import RequestDetail_Changeroom from "../components/RequestDetail_Changeroom";
import RequestDetail_Moveout from "../components/RequestDetail_Moveout";
import RequestDetail_Movein from "../components/RequestDetail_Movein";

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
        path: "/request-management",
        page: RequestManagement,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/student-management",
        page: StudentManagement,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/invoice-management",
        page: InvoiceManagement,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/manager-profile",
        page: ManagerProfile,
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
        path: "/student-details",
        page: RequestDetail_Changeroom,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/student-details",
        page: RequestDetail_Moveout,
        isShowHeader: true,
        isPrivate: false,
    },
    {
        path: "/student-details",
        page: RequestDetail_Movein,
        isShowHeader: true,
        isPrivate: false,
    },
    
    // {
    //   path: "/payment",
    //   page: PaymentPage,
    //   isShowHeader: true,
    //   isPrivate: false,
    // },
    // {
    //   path: "/products",
    //   page: ProductPage,
    //   isShowHeader: true,
    //   isPrivate: false,
    // },
    // {
    //   path: "/product/:type",
    //   page: TypeProductPage,
    //   isShowHeader: true,
    //   isPrivate: false,
    // },
    // {
    //   path: "/sign-in",
    //   page: SignInPage,
    //   isShowHeader: false,
    //   isPrivate: false,
    // },
    // {
    //   path: "/sign-up",
    //   page: SignUpPage,
    //   isShowHeader: false,
    //   isPrivate: false,
    // },
    // {
    //   path: "/product-details/:id",
    //   page: ProductDetailsPage,
    //   isShowHeader: true,
    //   isPrivate: false,
    // },
    // {
    //   path: "/profile-user",
    //   page: ProfilePage,
    //   isShowHeader: true,
    //   isPrivate: false,
    // },
    // {
    //   path: "/system/admin",
    //   page: AdminPage,
    //   isShowHeader: true,
    //   isPrivate: true,
    // },
    // {
    //   path: "/*",
    //   page: NotFoundPage,
    //   isShowHeader: false,
    //   isPrivate: false,
    // },
];
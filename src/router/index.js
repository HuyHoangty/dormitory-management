import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Homepage";
import CreateStudent from "../components/CreateStudent";
import ChangePassword from "../components/ChangePassword";
import Request from "../components/StudentRequest";

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
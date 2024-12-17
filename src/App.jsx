import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { router } from "./router/index";

import './index.css';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, isPrivate }) => {
  const isAuthenticated = !!localStorage.getItem("access_token"); // Kiểm tra token đăng nhập
  return isPrivate && !isAuthenticated ? <Navigate to="/sign-in" /> : children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {router.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <PrivateRoute isPrivate={route.isPrivate}>
                <route.page />
              </PrivateRoute>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App

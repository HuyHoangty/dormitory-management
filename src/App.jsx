import React from 'react';
import ChangePassword from './components/ChangePassword.jsx';
import Login from './components/Login.jsx'
import ChangeRoomRequest from './components/ChangeRoomRequest.jsx';
import MoveOutRequest from './components/MoveOutRequest.jsx';
import Register from'./components/Register.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import StudentProfile from './components/StudentProfile.jsx';
import './index.css';

function App() {
  
  return (
    <div>
    <ChangePassword/>
    <Login/>
    <ChangeRoomRequest />
    <MoveOutRequest/>
    <Register/>
    <ForgotPassword/>
    <StudentProfile/>
    </div>
  );
}

export default App

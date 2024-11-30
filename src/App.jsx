import React from 'react';
import ChangePassword from './components/ChangePassword.jsx';
import Login from './components/Login.jsx'
import ChangeRoomRequest from './components/ChangeRoomRequest.jsx';
import './index.css';

function App() {
  
  return (
    <div>
    <ChangePassword/>
    <Login/>
    <ChangeRoomRequest />
    </div>
  );
}

export default App

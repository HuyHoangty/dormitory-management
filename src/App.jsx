import React from 'react';
import ChangePassword from './components/ChangePassword.jsx';
import Login from './components/Login.jsx'
import ChangeRoomRequest from './components/ChangeRoomRequest.jsx';
import MoveOutRequest from './components/MoveOutRequest.jsx';
import './index.css';

function App() {
  
  return (
    <div>
    <ChangePassword/>
    <Login/>
    <ChangeRoomRequest />
    <MoveOutRequest/>
    </div>
  );
}

export default App

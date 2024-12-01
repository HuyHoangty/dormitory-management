import React,  {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCompass,
    faUser,
    faSignOutAlt,
    faSave,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function ChangeRoomRequest() {
    const [formData, setFormData] = useState({
        title: '',
        roomTypeId: '',
        roomId: '',
    });

    const [roomTypes, setRoomTypes] = useState([]);
    const [rooms, setRooms] = useState([]);
    
    //Gia lap du lieu loai phong
    useEffect(() => {
        setRoomTypes([
          { id: 55, name: 'N2' },
          { id: 56, name: 'A3a' },
          { id: 57, name: 'A3d' },
          { id: 59, name: 'A2' },
          { id: 63, name: 'A3b' },
          { id: 68, name: 'A3c' },
          { id: 71, name: 'N3' },
          { id: 76, name: 'A2a' },
        ]);
      }, []);
}
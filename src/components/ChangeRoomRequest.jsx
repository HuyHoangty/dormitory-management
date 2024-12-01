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
    
}
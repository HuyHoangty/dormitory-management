import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faCompass,
  faUser,
  faSignOutAlt,
  faSave,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function MoveOutRequest() {
    const [formData, setFormData] = useState({
      subject: '',
      content: '',
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (hasSendApproval) => (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData, 'HasSendApproval:', hasSendApproval);
      };
}
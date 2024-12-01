import React, { useState } from 'react';
import api from '../services/api';
import './StudentForm.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    district: '',
    country: '',
    universities: [], 
    consultants: [], 
  });
  const [popupMessage, setPopupMessage] = useState('');
  const [university, setUniversity] = useState(''); 
  const [consultant, setConsultant] = useState(''); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUniversityAdd = () => {
    if (university) {
      setFormData((prev) => ({
        ...prev,
        universities: [...prev.universities, university],
      }));
      setUniversity('');
    }
  };

  const handleConsultantAdd = () => {
    if (consultant) {
      setFormData((prev) => ({
        ...prev,
        consultants: [...prev.consultants, consultant],
      }));
      setConsultant('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/students/add', formData);
      setPopupMessage(`Saved Details: ${JSON.stringify(response.data)}`);
      setTimeout(() => setPopupMessage(''), 5000); 
    } catch (error) {
      console.error(error);
      alert('Failed to save student details.');
    }
  };

  return (
    <div id="container">
      <header>STUDENT DETAILS</header>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <br />
          {}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br /><br />

          {}
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <br /><br />

          {}
          <input
            type="text"
            placeholder="Add University"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
          />
          <button type="button" onClick={handleUniversityAdd}>Add University</button>
          <ul>
            {formData.universities.map((uni, index) => (
              <li key={index}>{uni}</li>
            ))}
          </ul>
          <br />

          {}
          <input
            type="text"
            placeholder="Add Consultant"
            value={consultant}
            onChange={(e) => setConsultant(e.target.value)}
          />
          <button type="button" onClick={handleConsultantAdd}>Add Consultant</button>
          <ul>
            {formData.consultants.map((cons, index) => (
              <li key={index}>{cons}</li>
            ))}
          </ul>
          <br /><br />

          {}
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
      {popupMessage && (
        <div style={{ marginTop: '30px', padding: '16px', border: '10px solid green', backgroundColor: '#d4edda' }}>
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default StudentForm;

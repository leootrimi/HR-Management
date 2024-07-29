import React, { useState } from 'react';
import './AddUser.css'; // Import your CSS file for styling

const AddUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [personalNumber, setPersonalNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [birthday, setBirthday] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [certificates, setCertificates] = useState('');
  const [jobPosition, setJobPosition] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePersonalNumberChange = (e) => {
    setPersonalNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleTelephoneNumberChange = (e) => {
    setTelephoneNumber(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleCertificatesChange = (e) => {
    setCertificates(e.target.value);
  };

  const handleJobPositionChange = (e) => {
    setJobPosition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server or update state
    console.log(`Submitting: ${firstName}, ${lastName}, ${personalNumber}, ${country}, ${city}, ${address}, ${telephoneNumber}, ${birthday}, ${profilePicture}, ${certificates}, ${jobPosition}`);
    // Reset form fields if needed
    setFirstName('');
    setLastName('');
    setPersonalNumber('');
    setCountry('');
    setCity('');
    setAddress('');
    setTelephoneNumber('');
    setBirthday('');
    setProfilePicture(null);
    setCertificates('');
    setJobPosition('');
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
        <h2>Add new Employer</h2>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="personalNumber">Personal No:</label>
          <input
            type="text"
            id="personalNumber"
            value={personalNumber}
            onChange={handlePersonalNumberChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="telephoneNumber">Telephone number:</label>
          <input
            type="text"
            id="telephoneNumber"
            value={telephoneNumber}
            onChange={handleTelephoneNumberChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="birthday">Birthday:</label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            onChange={handleProfilePictureChange}
            accept=".jpg, .jpeg, .png"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="certificates">Related Certificates or Diploma:</label>
          <textarea
            id="certificates"
            value={certificates}
            onChange={handleCertificatesChange}
            rows="4"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="jobPosition">Job position:</label>
          <input
            type="text"
            id="jobPosition"
            value={jobPosition}
            onChange={handleJobPositionChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
      <button className='button1' type="submit">Add User</button>
      <button className='button2' type="submit">Save & Add another</button>
      <button className='button3' type="submit">Cancel</button>
      </div>
      </div>
    </form>
  );
};

export default AddUser;

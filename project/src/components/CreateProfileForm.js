import React, { useState } from 'react';

const CreateProfileForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.length < 3 || password.length < 6 || !email.includes('@')) {
      return alert('Invalid profile data');
    }

    const profileData = {
      username,
      password,
      email
    };

    fetch('/api/profiles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        setUsername('');
        setPassword('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error creating profile:', error);
        alert('An error occurred while creating the profile');
      });
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} required />
        </label>
        <br />
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;

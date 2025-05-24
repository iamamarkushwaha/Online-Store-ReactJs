// src/components/Profile.jsx
import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  if (!user || !user.username) {
    return <p className="no-user">No user is logged in.</p>;
  }

  return (
    <section className="profile-section">
      <h2 className="profile-heading">User Profile</h2>
      <p className="profile-info"><strong>Username:</strong> {user.username}</p>
    </section>
  );
};

export default Profile;

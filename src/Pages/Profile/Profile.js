import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <h1 className="title">User Profile</h1>
        <div className="profile-info">
          <img
            src="./user-avatar.jpg"
            alt="User Avatar"
            className="profile-image"
          />
          <div className="profile-details">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-email">john.doe@example.com</p>
            <p className="profile-bio">
              Hi! I'm John, a real estate enthusiast. I love helping people find
              their dream homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

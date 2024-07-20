import React from "react";
import "./TeamPage.css";

const teamMembers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO",
    bio: "Alice is the visionary behind our company with 20 years of experience in real estate.",
    image: "./team-member1.jpg",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Senior Agent",
    bio: "Bob specializes in luxury properties and has a knack for finding the perfect home for clients.",
    image: "./team-member2.jpg",
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <section className="team-page">
      <div className="container">
        <h1 className="title">Meet Our Team</h1>
        <div className="team-list">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.id}>
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
              />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;

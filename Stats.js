import React from "react";
import "./Stats.css";

const stats = [
  { label: "Registered Students", value: "6.7+ Crore" },
  { label: "Student Selections", value: "4+ Lacs" },
  { label: "Tests Attempted", value: "242+ Crore" },
  { label: "Classes Attended", value: "5.5+ Crore" }
];

const Stats = () => {
  return (
    <section className="stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;

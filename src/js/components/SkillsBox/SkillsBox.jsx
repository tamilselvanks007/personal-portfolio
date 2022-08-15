import React from "react";
import "../../../css/components/SkillsBox/SkillsBox.css";

const SkillsBox = () => {
  const Skills = {
    WebSkills: ["React.js", "JavaScript", "SASS", "CSS3", "HTML5"],
    CompetetiveSkills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Mongoose",
    ],
    Extras: ["Git", "Github", "VScode"],
  };

  return (
    <>
      <div className="skills-wrap">
        <div className="skills-colomn-wrap">
          <h3>Frontend</h3>
          <ul>
            {Skills.WebSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Backend</h3>
          <ul>
            {Skills.CompetetiveSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
        <div className="skills-colomn-wrap">
          <h3>Extras</h3>
          <ul>
            {Skills.Extras.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsBox;

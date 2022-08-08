import React from "react";
import "../../../../css/components/SkillsIntro/SkillsIntro.css";

const Marquee = (props) => {
  return (
    <div className="marquee-w">
      <div className="marquee">
        <span>{props.text}</span>
      </div>
      <div className="marquee marquee2">
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default Marquee;

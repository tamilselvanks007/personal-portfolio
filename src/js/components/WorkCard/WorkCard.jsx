import React, { useState } from "react";
// import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "../../../css/components/WorkCard/WorkCard.css";

const WorkCard = (prop) => {
  const { name, description, tags, demo, github, side } = prop.work;
  const [hover] = useState(false);
  const Tags = tags.map((t, id) => {
    return <span key={id}>{`#${t} `}</span>;
  });

  return (
    <>
      <div className={`card-wrap${side ? " reversed" : ""}`}>
        <div className="work-des">
          <p className={`${hover ? " hide" : ""}`}>{description}</p>
        </div>
        <div
          className="width-card"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="work-card">
            <h1 className="work-title">{name}</h1>
            <div className="tags">{Tags}</div>
            <div className="links">
              <motion.a
                href={demo}
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.8 }}
              >
                <h3>Visit</h3>
              </motion.a>

              <motion.a
                href={github}
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.8 }}
              >
                <h3>github</h3>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;

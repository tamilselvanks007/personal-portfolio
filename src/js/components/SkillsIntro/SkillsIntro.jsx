import React from "react";

import Marquee from "./Marquee/Marquee";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "../../../css/components/SkillsIntro/SkillsIntro.css";

const SkillsIntro = () => {
  return (
    <>
      <div className="skill-intro">
        <motion.div
          initial={{ y: -100, x: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            delay: 0.8,
            type: "spring",
            duration: 0.5,
            ease: "easeIn",
            damping: 10,
          }}
        >
          <Icon icon="carbon:arrow-down-right" className="arrow" />
        </motion.div>
        <div>
          <Marquee text="Web-Developement" />
          <Marquee text="Front End Developer" />
          <Marquee text="MERN Stack Developer" />
        </div>
      </div>
    </>
  );
};

export default SkillsIntro;

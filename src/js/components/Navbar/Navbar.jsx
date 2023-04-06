import React from "react";
import "../../../css/components/Navbar/Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.navbar
        className="navbar"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div className="main-menue">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      </motion.navbar>
    </>
  );
};

export default Navbar;

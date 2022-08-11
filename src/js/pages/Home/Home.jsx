import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import SkillsIntro from "../../components/SkillsIntro/SkillsIntro";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import "../../../css/pages/Home/Home.css";

const Home = () => {
  return (
    <>
      <motion.div
        className="page"
        exit={{ x: "-100vw" }}
        transition={{ ease: "easeInOut" }}
      >
        <div className="head-wrap" id="home">
          <Navbar />
          <div className="head">
            <PageHeader />
            <SkillsIntro />
          </div>
        </div>
        <div className="container">
          <section className="intro">
            <ContactBtn />
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

import React from "react";
import "../../../css/pages/Home/Home.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import SkillsIntro from "../../components/SkillsIntro/SkillsIntro";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import Intro from "../../components/IntroText/Intro";
import CTABtn from "../../components/CTABtn/CTABtn";

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
            <Intro />
            <div className="resume-btn-wrap">
              <CTABtn
                text="Resume"
                link=""
                padding="clamp(8px, 2px + 1vh, 10px)"
                width="clamp(120px, 90px + 10vw, 220px)"
              />
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

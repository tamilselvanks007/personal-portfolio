import React from "react";
import "../../../css/pages/Home/Home.css";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import PageHeader from "../../components/PageHeader/PageHeader";
import SkillsIntro from "../../components/SkillsIntro/SkillsIntro";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import Intro from "../../components/IntroText/Intro";
import CTABtn from "../../components/CTABtn/CTABtn";
import WorkCard from "../../components/WorkCard/WorkCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { WorkData } from "../../data/WorkData";
import SkillsBox from "../../components/SkillsBox/SkillsBox";
import SocialConnect from "../../components/SocialConnect/SocialConnect";
import AboutText from "../../components/AboutText/AboutText";

const Home = () => {
  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

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
          <section className="work" id="work">
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section>
          <section className="skills">
            <article>
              <SectionTitle title="My_ Skills" />
            </article>
            <SkillsBox />
          </section>
          <section className="about" id="about">
            <article>
              <SectionTitle title="About Me " />
            </article>
            <div>
              <AboutText />
              <SocialConnect dim="clamp(20px, 18px + 5vw, 55px)" />
            </div>
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;

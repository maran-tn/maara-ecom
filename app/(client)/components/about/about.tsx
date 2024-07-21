import React from "react";
import AboutImg from "@/app/(client)/assests/maran-12.png";
import CV from "../../assests/maran-12.png";
import Info from "./info";
import AnimationWarpper from "@/components/animationwarpper";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const About = () => {
  return (
    <section id="about" className="about section mn-bg-grey dark:text-white dark:bg-black">
      <h2 className="section__title dark:text-white">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container grid">
        <img src="/assets/maran-12.jpg" className="about__img h-full dark:border-white dark:border-4" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I create web pages and graphic designs with UI /
            UX user interface, I have years of experience and many clients are
            happy with the projects carried out.
          </p>
          <Button
            className="btn-dark rounded-lg inline-flex justify-center gap-2 items-center"
          >
            Download CV <i className="fi fi-rr-document text-2xl"></i>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

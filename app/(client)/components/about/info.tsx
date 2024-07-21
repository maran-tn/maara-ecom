import { Award, Briefcase, Headset } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div className="about__info grid dark:text-black">
      <div className="about__box">
        <span className="grid justify-center">
        <Award className="about_icon" />
        </span>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years Working</span>
      </div>
      <div className="about__box">
      <span className="grid justify-center">
        <Briefcase className="about_icon" />
        </span>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>
      <div className="about__box">
      <span className="grid justify-center">
        <Headset className="about_icon" />
        </span>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
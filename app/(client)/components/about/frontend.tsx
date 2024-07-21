import { BadgeCheck } from "lucide-react";
import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <div className="flex flex-col">
        <h3 className="skills__title flex flex-col">
          Web Development
          <span className="text-sm text-center text-gray-400">
            ( Frontend & Backend )
          </span>
        </h3>
      </div>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">React Js</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Angular</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Node JS</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Git & Github</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills_level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

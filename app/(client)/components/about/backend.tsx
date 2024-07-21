import { BadgeCheck } from "lucide-react";
import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Studio</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Logo Design</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Posters</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Photo Frame</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Photo Editing</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">YT Thumbnails</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Invitation Design</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Album Desiging</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Social Media Post</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Advertisement</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BadgeCheck />
            <div>
              <h3 className="skills__name">Cards</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;

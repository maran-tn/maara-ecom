"use client";
import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section mn-bg-grey" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="qualification__container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button bg-white rounded-md pr-2 pl-2 button--flex q-a"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button bg-white rounded-md pr-2 pl-2 button--flex q-a"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSLC</h3>
                <span className="qualification__subtitle">
                  CBHSS - Kadayam, Tenkasi, Tamilnadu
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Year of Passing - 2019
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">HSC</h3>
                <span className="qualification__subtitle">
                  CBHSS - Kadayam, Tenkasi, Tamilnadu
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>Year of Passing - 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Sc.Zoology</h3>
                <span className="qualification__subtitle">
                  Sri Paramakalyani College, Alwarkurichi, Tamilnadu
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Self Learning ( youtube, browser, GUVI - Online Education )
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - 2023
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Photography & Album Designing
                </h3>
                <span className="qualification__subtitle">
                  Dharma Studio - Tirunelveli, Tamilnadu - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2019 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Product Design & Order Management
                </h3>
                <span className="qualification__subtitle">
                  Devi Fashion - Tamilnadu
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2022 - Present
                </div>
              </div>
            </div>
            {/* <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design & Theme Development</h3>
                <span className="qualification__subtitle">
                  Shopify - India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Mara Networks - Tamilnadu
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i>2023 - Present
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

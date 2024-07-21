"use client";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  CircleX,
  Code,
  FileImage,
  PanelsTopLeft,
  PanelTop,
} from "lucide-react";
import React, { useState } from "react";



const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };

  return (
    <section id="services" className="services section mn-bg-grey">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>
      <div className="services__container container mn-s-grid">
        <div className="services__content">
          <div>
            <span>
              <PanelsTopLeft className="services__icon" />
            </span>
            <h3 className="services__title">
              Product <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <span>
              <ArrowRight className="services__button-icon" />
            </span>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <CircleX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Product Designing</h3>
              <p className="services__modal-description">
                Service with more than 2 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">Full branding support.</p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    I create ux designs and 3d models.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <span>
              <Code className="services__icon" />
            </span>
            <h3 className="services__title">
              Web <br /> Development
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <ArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <CircleX
                className=" services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Web Development</h3>
              <p className="services__modal-description">
                Service with more than 1.5 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">Web page development.</p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Using react frameworks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <span>
              <FileImage className="services__icon" />
            </span>
            <h3 className="services__title">
              Graphic <br /> Design
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <ArrowRight className="services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={() => toggleTab(0)}
          >
            <div className="services__modal-content">
              <CircleX
                className="services__modal-close"
                onClick={() => toggleTab(0)}
              />
              <h3 className="services__modal-title">Graphic Designing</h3>
              <p className="services__modal-description">
                Service with more than 4 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">Logo design & Branding</p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Social Media Ads & Posters,banners, ..etc.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Typography & Concept arts.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Photo editing & Photo restoration.
                  </p>
                </li>

                <li className="services__modal-service">
                  <BadgeCheck className="service__modal-icon" />
                  <p className="services__modal-info">
                    Digital Painting & Posters.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

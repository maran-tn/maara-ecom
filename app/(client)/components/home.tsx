import React from "react";
import Social from "./social";
import Data from "./data";
import ScrollDown from "./scrolldown";

const HomePage = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img hover:rotate-6"></div>
          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default HomePage;

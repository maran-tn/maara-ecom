import React from "react";
import About from "../components/about/about";
import Skills from "../components/about/skills";
import Qualification from "../components/qualification/page";
import Certificates from "../components/certificates/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MARAN",
  description: "Graphic Designer and Web Deveopment",
};

const page = () => {
  return (
    <div>
      <About />

      <Skills />
      <Qualification />
      {/* <Certificates /> */}
    </div>
  );
};

export default page;

import React from "react";
import Contact from "../components/contact/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MARAN",
  description: "Graphic Designer and Web Deveopment",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;

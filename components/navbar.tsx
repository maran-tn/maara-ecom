
import Link from "next/link";
import React from "react";
import ThemeSwitch from "./theme-switch";

import { Inter, Jost, Poppins, Recursive } from "next/font/google";

const font = Poppins({ weight: "600", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${font.className} text-2xl uppercase dark:text-amber-50`}>
            Maran
            {/* <span className="text-green-500">picz</span> */}
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;

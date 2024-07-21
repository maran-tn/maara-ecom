import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer dark:bg-black dark:text-white dark:border-t-2">
      <div className="footer__container container dark:text-white">
        <h1 className="footer__title dark:text-white">Maran</h1>
        <ul className="footer__list ">
          <li className="">
            <Link href="/about" className="footer__link dark:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="footer__link dark:text-gray-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/services" className="footer__link dark:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="footer__link dark:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <Link
            href="https://www.facebook.com/blackwalker_mara"
            className="footer__social-link"
            target="_blank"
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/blackwalker_mara"
            className="footer__social-link"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link
            href=" https://x.com/mara_devz"
            className="footer__social-link"
            target="_blank"
          >
             <Twitter />
          </Link>
          <Link
            href="https://github.com/maran-tn"
            className="footer__social-link"
            target="_blank"
          >
             <Github />
          </Link>
        </div>
        <span className="footer__copy dark:text-gray-200">&#169; Maran. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

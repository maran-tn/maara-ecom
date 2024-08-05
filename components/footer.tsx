"use client";
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Slogan } from "./icons";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <footer className="relative bg-black/100 text-gray-300">
      <nav className="w-full mx-auto py-8 lg:py-10 lg:px-10 max-md:px-5 text-neutral-20 space-y-6">
        <div className="w-full mx-auto tw-3asyq7 tw-8iwcw3 flex flex-col lg:flex-row justify-between gap-2">
          <div className="lg:flex-[2]">
            <div>
              <div className="text-xl font-bold uppercase max-md:flex">
                Support
              </div>
              <ul role="menu" className="grid grid-cols-2 gap-x-6 gap-y-1 max-md:text-sm">
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                    href="/in/en/help"
                  >
                    Contact us
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                    href="/in/en/help/how-to-place-an-order-faq"
                  >
                    FAQs
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                    href="/in/en/help/promotions_and_sale"
                  >
                    Promotions &amp; Sale
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/help/my-account"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    My Account
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://puma.clickpost.in/"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Track Order
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                    href="/in/en/help/app-return-policy"
                  >
                    Exchange &amp; Return Policy
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                    href="/in/en/puma-shoe-care"
                  >
                    Shoe Care
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/help/privacy-policy"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/help/glossary"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Tech Glossary
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/help/terms-and-conditions"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/account/login"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Initiate Return / Exchange
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    aria-disabled="false"
                    data-test-id="cookie-settings-link"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white text-base"
                    role="menuitem"
                    href="/in/en#"
                  >
                    Cookie Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex-[1]">
            <div className="w-full gap-1 flex-col tablet:hidden desktop:gap-6 desktop:flex ">
              <div className="text-xl font-bold uppercase max-md:flex">
                About
              </div>
              <ul
                role="menu"
                className="grid grid-cols-1 gap-x-6 gap-y-1 max-md:text-sm max-md:grid-cols-2"
              >
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/this-is-puma"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Company
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/newsroom#newsroom/{search}/9515f0e8-f331-4587-84a5-60a98d1497c5/{tags}/all-years/8"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Corporate News
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/newsroom#newsroom/{search}/9515f0e8-f331-4587-84a5-60a98d1497c5/{tags}/all-years/8"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Press Center
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/investor-relations"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Investors
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/forever-better"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Sustainability
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://about.puma.com/en/careers"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    Careers
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://store-in.puma.com/"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    role="menuitem"
                  >
                    Store Locator
                  </a>
                </li>
                <li role="none" className="flex">
                  <a
                    href="https://in.puma.com/in/en/articles"
                    aria-disabled="false"
                    className="tw-hqslau tw-xbcb1y font-normal hover:text-white"
                    role="menuitem"
                  >
                    PUMA Articles
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex-[1] flex flex-col gap-2 lg:gap-6 max-md:w-full max-md:justify-center max-md:pt-4">
            <div className="tw-1nhlmds flex flex-col tw-1igwn51 tw-dynr3h tw-l8cie8 max-md:justify-center mobile:hidden tablet:hidden desktop:flex">
              <div className="text-xl font-bold uppercase max-md:flex max-md:justify-center">
                Follow us
              </div>
              <div
                data-test-id="social-media-footer-links"
                className="mt-6 max-md:px-10"
              >
                <ul
                  className="flex justify-between xs:justify-start xs:gap-6"
                  role="menu"
                  aria-label="More Inspiration"
                >
                  <li role="none">
                    <a
                      className="group tw-4xsq9o tw-o47a5z"
                      role="menuitem"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.youtube.com/puma"
                      data-uds-child="link-icon"
                      data-test-id="social-youtube-social-link"
                    >
                      <div
                        data-uds-child="action-icon-icon"
                        className="tw-hzl1vp tw-11sn0o2 flex-none transition ease-out-expo duration-300 after::absolute after::hidden after::pointer-events-none after::-left-1 after::-top-1 after::-right-1 after::-bottom-1 after::border-2 after::border-outline after::rounded-full group-focus-visible:after::block tw-10skrdm"
                      >
                        <Youtube />
                      </div>
                      <span
                        data-uds-child="action-icon-label"
                        className="font-bold leading-[1.15] transition hidden ease-out-expo duration-300 tw-7r05il tw-ncxkrm"
                      >
                        YouTube
                      </span>
                    </a>
                  </li>
                  <li role="none">
                    <a
                      className="group tw-4xsq9o tw-o47a5z"
                      role="menuitem"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/PUMA"
                      data-uds-child="link-icon"
                      data-test-id="social-twitter-social-link"
                    >
                      <div
                        data-uds-child="action-icon-icon"
                        className="tw-hzl1vp tw-11sn0o2 flex-none transition ease-out-expo duration-300 after::absolute after::hidden after::pointer-events-none after::-left-1 after::-top-1 after::-right-1 after::-bottom-1 after::border-2 after::border-outline after::rounded-full group-focus-visible:after::block tw-10skrdm"
                      >
                        <Twitter />
                      </div>
                      <span
                        data-uds-child="action-icon-label"
                        className="font-bold leading-[1.15] transition hidden ease-out-expo duration-300 tw-7r05il tw-ncxkrm"
                      >
                        Twitter
                      </span>
                    </a>
                  </li>
                  <li role="none">
                    <a
                      className="group tw-4xsq9o tw-o47a5z"
                      role="menuitem"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.pinterest.com/puma/"
                      data-uds-child="link-icon"
                      data-test-id="social-pinterest-social-link"
                    >
                      <div
                        data-uds-child="action-icon-icon"
                        className="tw-hzl1vp tw-11sn0o2 flex-none transition ease-out-expo duration-300 after::absolute after::hidden after::pointer-events-none after::-left-1 after::-top-1 after::-right-1 after::-bottom-1 after::border-2 after::border-outline after::rounded-full group-focus-visible:after::block tw-10skrdm"
                      >
                        <Linkedin />
                      </div>
                      <span
                        data-uds-child="action-icon-label"
                        className="font-bold leading-[1.15] hidden transition ease-out-expo duration-300 tw-7r05il tw-ncxkrm"
                      >
                        Linkedin
                      </span>
                    </a>
                  </li>
                  <li role="none">
                    <a
                      className="group tw-4xsq9o tw-o47a5z"
                      role="menuitem"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://instagram.com/puma/"
                      data-uds-child="link-icon"
                      data-test-id="social-instagram-social-link"
                    >
                      <div
                        data-uds-child="action-icon-icon"
                        className="tw-hzl1vp tw-11sn0o2 flex-none transition ease-out-expo duration-300 after::absolute after::hidden after::pointer-events-none after::-left-1 after::-top-1 after::-right-1 after::-bottom-1 after::border-2 after::border-outline after::rounded-full group-focus-visible:after::block tw-10skrdm"
                      >
                        <Instagram />
                      </div>
                      <span
                        data-uds-child="action-icon-label"
                        className="font-bold leading-[1.15] hidden transition ease-out-expo duration-300 tw-7r05il tw-ncxkrm"
                      >
                        Instagram
                      </span>
                    </a>
                  </li>
                  <li role="none">
                    <a
                      className="group tw-4xsq9o tw-o47a5z"
                      role="menuitem"
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/PUMA/"
                      data-uds-child="link-icon"
                      data-test-id="social-facebook-social-link"
                    >
                      <div
                        data-uds-child="action-icon-icon"
                        className="tw-hzl1vp tw-11sn0o2 flex-none transition ease-out-expo duration-300 after::absolute after::hidden after::pointer-events-none after::-left-1 after::-top-1 after::-right-1 after::-bottom-1 after::border-2 after::border-outline after::rounded-full group-focus-visible:after::block tw-10skrdm"
                      >
                        <Facebook />
                      </div>
                      <span
                        data-uds-child="action-icon-label"
                        className="font-bold hidden leading-[1.15] transition ease-out-expo duration-300 tw-7r05il tw-ncxkrm"
                      >
                        Facebook
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-300" />

        <div className="w-full justify-center grid">
          <div>
            <h2>Maara All Rights Reserved</h2>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

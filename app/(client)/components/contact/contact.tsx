"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Instagram, Mails, Phone } from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: {
    preventDefault: () => void;
    target: { reset: () => void };
  }) => {
    e.preventDefault();

    emailjs.sendForm(
      "maran_iybdeuq",
      "template_e84o0ie",
      form.current,
      "0RqLxRQD0sTDp_Ndm"
    );
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="contact section mn-bg-grey dark:bg-black dark:text-white"
    >
      <h2 className="section__title dark:text-white">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card dark:text-black">
              <span className="grid justify-center">
                <Mails className="contact_card-icon" />
              </span>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">maranpicz@gmail.com</span>

              <a href="mailto:maranpicz@gmail.com" className="contact__button">
                Write me{" "}
                <i className="fi fi-rr-arrow-small-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card dark:text-black">
              <span className="grid justify-center">
                <Phone className="contact_card-icon" />
              </span>
              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+91 9566830682</span>

              <a
                href="https://api.whatsapp.com/send?phone=9566830682&text=Hello, more information!"
                className="contact__button"
              >
                Send message{" "}
                <i className="fi fi-rr-arrow-small-right contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card dark:text-black">
              <span className="grid justify-center">
                <Instagram className="contact_card-icon dark:text-black" />
              </span>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@blackwalker_mara</span>

              <a href="" className="contact__button">
                Visit now{" "}
                <i className="fi fi-rr-arrow-small-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag dark:bg-transparent">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input dark:text-white"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag dark:bg-transparent">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input dark:text-white"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag dark:bg-transparent">Projects</label>
              <textarea
                name="projects"
                cols="30"
                rows="10"
                className="contact__form-input dark:text-white"
                placeholder="Write your project"
              ></textarea>
            </div>

            <Button className="btn-dark rounded-lg flex justify-center">
              Send Message
              <i className="fi fi-rr-paper-plane text-2xl flex pl-2"></i>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

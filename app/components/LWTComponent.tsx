"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function LWTComponent(props: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;
  const handleScroll = useCallback(() => {
    const st = window.pageYOffset;
    if (st < 10) {
      setIsHeaderShow(false);
    } else if (st > lastScrollTop) {
      setIsHeaderShow(true);
    } else {
      setIsHeaderShow(true);
    }
  }, [lastScrollTop]); // Include lastScrollTop in the dependency array

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const templateParams = {
      fullName: fullName,
      email: email,
      company: company,
      phone: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_cdv4l3k",
        "template_6t80rv4",
        templateParams,
        "IsXKkS1NCYyD6Rhrk"
      )
      .then(
        () => {
          alert("Your email has been sent successfully.");
          setFullName("");
          setEmail("");
          setCompany("");
          setPhone("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          alert("An error occurred while sending the email.");
        }
      );
  };

  return (
    <div className="overflow-x-hidden font-jakarta">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"lwt"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <p
          className="text-3xl xl:text-5xl font-bold text-center"
          data-aos="fade-down"
        >
          Get in touch today!
        </p>
        <p
          className="font-regular text-lg my-5 font-roboto"
          data-aos="fade-down"
        >
          Please fill the form below
        </p>
        <form
          className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12"
          onSubmit={(e) => sendEmail(e)}
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Full name *</p>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Your email *</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Phone *</p>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Company *</p>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Enter Company Name"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full">
              <p className="text-lg font-medium mb-2">Subject *</p>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="How can we Help"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg font-medium mb-2">Message *</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello there,I would like to talk about how to..."
              className="h-60 p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={
                !fullName ||
                !email ||
                !phone ||
                !company ||
                !subject ||
                !message
              }
              className="bg-[#2AABE1] rounded-full p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8 text-white"
              style={{
                opacity:
                  !fullName ||
                  !email ||
                  !phone ||
                  !company ||
                  !subject ||
                  !message
                    ? "0.5"
                    : "1",
                cursor:
                  !fullName ||
                  !email ||
                  !phone ||
                  !company ||
                  !subject ||
                  !message
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

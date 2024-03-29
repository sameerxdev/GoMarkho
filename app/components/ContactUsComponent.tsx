"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function ContactUsComponent(props: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
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

  const faqsArray = [
    {
      question: "How can GoMarkho enhance my business communication?",
      answer:
        "GoMarkho specializes in providing tailored VoIP solutions, software development, and intelligent automation. We empower businesses with cost-efficient communication systems, cutting-edge software, and streamlined workflows to enhance connectivity, operational efficiency, and overall growth.",
    },
    {
      question:
        "What sets GoMarkho apart from other communication solution providers?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
    {
      question: "How does the implementation process work for your solutions?",
      answer:
        "Our implementation process is designed for simplicity and efficiency. We start with a thorough assessment of your requirements, followed by a seamless integration plan. Our team ensures a smooth transition, providing training and support to guarantee a successful implementation and optimal utilization of our solutions.",
    },
    {
      question: "Can GoMarkho assist with ongoing support and maintenance?",
      answer:
        "Absolutely. GoMarkho is committed to providing continuous support. Our team is available to address any queries, troubleshoot issues, and ensure that your systems are always running at their best. We offer ongoing maintenance to keep your communication infrastructure reliable and up-to-date.",
    },
    {
      question: "What industries does GoMarkho cater to?",
      answer:
        "GoMarkho caters to a diverse range of industries, including but not limited to [list of specific industries]. Our customizable solutions are designed to meet the unique communication needs of businesses across various sectors, ensuring versatility and adaptability to specific industry requirements.",
    },
  ];

  return (
    <div className="overflow-x-hidden font-jakarta">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"conatctUs"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <p
          className="text-3xl lg:text-4xl xl:text-5xl font-bold"
          data-aos="fade-down"
        >
          Get in Touch Today!
        </p>
        <div
          className="flex flex-col lg:flex-row w-full lg:w-[80%] items-center gap-5 mt-6 mb-10 font-roboto"
          data-aos="fade-down"
        >
          <div className="w-full lg:w-[50%] flex items-center justify-between p-3 md:p-4 border border-[#e8e8e8] shadow-xl rounded-xl">
            <div className="flex gap-2 justify-start items-center">
              <div className="bg-[#146C94] flex justify-center items-center p-3 rounded-xl">
                <Image
                  src="/mailIcon.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="h-10 w-auto min-w-5"
                />
              </div>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-black">
                Mail Us
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg text-[#797979]">
                hr@gomar kho.com
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex items-center justify-between p-3 md:p-4 border border-[#e8e8e8] shadow-xl rounded-xl">
            <div className="flex gap-2 justify-start items-center">
              <div className="bg-[#146C94] flex justify-center items-center p-3 rounded-xl">
                <Image
                  src="/callIcon.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="h-10 w-12 lg:w-auto min-w-5"
                />
              </div>
              <p className="text-sm md:text-base lg:text-lg font-semibold text-black">
                Call Us
              </p>
            </div>
            <div>
              <p className="text-sm md:text-base lg:text-lg text-[#797979]">
                051 8895778
              </p>
            </div>
          </div>
        </div>
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

      <div className="py-[8%] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <div className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12 bg-[#020332] text-white flex flex-col items-center">
          <p
            className="text-white font-extrabold text-xl lg:text-3xl py-4"
            data-aos="fade-down"
          >
            Frequently Asked Questions
          </p>
          <ul
            className="w-full lg:w-[70%] space-y-4 font-roboto"
            data-aos="fade-up"
          >
            {faqsArray.map((faq: any, index: any) => (
              <li
                key={index}
                className="bg-white rounded-xl p-7 w-full"
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
              >
                <p className="text-black font-extrabold text-lg lg:text-xl py-2">
                  {index + 1}
                  {". "}
                  {faq.question}
                </p>
                <div
                  className="py-2 md:pl-5"
                  style={{ display: selectedIndex === index ? "flex" : "none" }}
                >
                  <p className="text-black text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="py-[6%] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <h2
          className="text-black font-bold text-xl lg:text-3xl xl:text-4xl py-5"
          data-aos="fade-down"
        >
          Find us here
        </h2>
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26564.417938139624!2d73.05693788253866!3d33.668762011132124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf9b9a26d10f%3A0x4673dd03bcb7dd01!2sGoMarkho!5e0!3m2!1sen!2s!4v1706017592671!5m2!1sen!2s"
            title="GoMarkho location"
            loading="lazy"
            className="w-full h-[calc(70vh)] lg:h-[calc(50vh)] rounded-xl"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

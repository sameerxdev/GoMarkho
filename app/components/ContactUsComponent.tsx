"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import CountUp from "react-countup";
import "../styles/style.css";
import Footer from "../sharedComponents/Footer";
import Map from "../sharedComponents/Map";

interface Props {}

export default function ContactUsComponent(props: Props) {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const faqsArray = [
    {
      question: "How can GoMarkho enhance business communication?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
    {
      question: "How can GoMarkho enhance business communication?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
    {
      question: "How can GoMarkho enhance business communication?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
    {
      question: "How can GoMarkho enhance business communication?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
    {
      question: "How can GoMarkho enhance business communication?",
      answer:
        "What distinguishes GoMarkho is our commitment to innovation, customization, and seamless integration. We offer a comprehensive suite of services, combining expertise in VoIP, software development, and intelligent automation, ensuring that your business receives a unique, end-to-end solution tailored to your specific needs.",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"conatctUs"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <p className="text-3xl lg:text-4xl xl:text-5xl font-bold">
          Get in Touch Today!
        </p>
        <div className="flex flex-col lg:flex-row w-full lg:w-[80%] items-center gap-5 mt-6 mb-10">
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
        <div className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Full name *</p>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Your email *</p>
              <input
                type="text"
                placeholder="Enter Email"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Company *</p>
              <input
                type="text"
                placeholder="your company name here"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Subject *</p>
              <input
                type="text"
                placeholder="How can we Help"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg font-medium mb-2">Message *</p>
            <textarea
              placeholder="Hello there,I would like to talk about how to..."
              className="h-60 p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-[#2AABE1] rounded-full p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8 text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="py-[8%] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <div className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12 bg-[#020332] text-white flex flex-col items-center">
          <p className="text-white font-extrabold text-xl lg:text-3xl py-4">
            Frequently Asked Questions
          </p>
          <ul className="w-full lg:w-[70%] space-y-4">
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
        <p className="text-black font-bold text-xl lg:text-3xl xl:text-4xl py-5">
          Find us here
        </p>
        <Map />
      </div>

      <Footer />
    </div>
  );
}

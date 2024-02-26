"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function LWTComponent(props: Props) {
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  const [counterOn, setCounterOn] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset;
      if (st < 10) {
        setIsHeaderShow(false);
      } else if (st > lastScrollTop) {
        setIsHeaderShow(true);
      } else {
        setIsHeaderShow(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar isHeaderShow={isHeaderShow} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold text-center">
          Get in touch today!
        </p>
        <p className="font-regular text-lg my-5">Please fill the form below</p>
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
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Phone No *</p>
              <input
                type="text"
                placeholder="enter your phone number"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Job title *</p>
              <input
                type="text"
                placeholder="your job title/role"
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
              Get in touch
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

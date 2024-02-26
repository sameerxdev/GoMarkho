"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function JobPostComponent(props: Props) {
  const [isHeaderShow, setIsHeaderShow] = useState(false);
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
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-300px] lg:right-[-250px] top-[70px] h-[25%] w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold text-center">
          Quality Assurance Engineer
        </p>
        <p className="font-regular text-lg my-5">
          Islamabad, Pakistan |{" "}
          <span className="text-[#2AABE1]">Full Time</span>
        </p>
        <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-60 my-5 text-white">
          Apply Now
        </button>
        <div className="my-8 w-full bg-[#F9F9F9] px-4 lg:px-8 py-8 lg:py-12 rounded-xl">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center my-2 lg:px-4">
            <p className="font-black text-xl lg:text-3xl">About the role</p>
            <p className="text-sm lg:text-base text-[#797979]">
              <span className="font-semibold">Posted</span> : 25 November, 2021
            </p>
          </div>
          <ul className="text-[#797979] list-disc space-y-3 my-2 px-4 py-5">
            <li>
              Review, analyse and evaluate product code according to system
              specifications.
            </li>
            <li>
              Create and execute detailed and well-structured test plans and
              test cases (manual or automated) and analyse results.
            </li>
            <li>Plan and coordinate testing activities.</li>
            <li>
              Create logs to identify, track and document testing phases and
              defects.
            </li>
            <li>
              Design, develop and execute automation scripts using open-source
              tools (Jira, Selenium, JMeter).
            </li>
            <li>Perform thorough regression testing when bugs are resolved.</li>
            <li>
              Develop and apply testing processes for new and existing products
              to meet client needs.
            </li>
            <li>
              Work with cross-functional teams to ensure quality throughout the
              software development lifecycle.
            </li>
          </ul>
          <p className="font-black text-xl lg:text-3xl px-4">Requirements</p>
          <ul className="text-[#797979] list-disc space-y-3 px-4 py-5">
            <li>
              BS/MS degree in Computer Science, Engineering, or a related field.
            </li>
            <li>
              Proven experience of 3 – 5 years as a quality assurance tester.
            </li>
            <li>
              Strong knowledge of software QA methodologies, tools, and
              processes.
            </li>
            <li>
              Experience in writing concise, and comprehensive test plans and
              test cases.
            </li>
            <li>
              Hands-on experience with both white box and black box testing.
            </li>
            <li>Perform thorough regression testing when bugs are resolved.</li>
            <li>
              Experience in GUI test automation by using Selenium Web Driver
              (Web application)
            </li>
          </ul>
          <p className="font-black text-xl lg:text-3xl my-2 px-4">
            Contact us!
          </p>
          <p className="text-[#797979] px-4 py-5">
            Reach out to discuss the opportunity & send your answers to:
          </p>
          <div className="px-4 py-5 text-[#797979]">
            <p className="font-bold">Aman Khan</p>
            <p>hr@gomarkho.com</p>
            <p>+342 343 34676</p>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[8%] flex flex-col items-center justify-center">
        <div className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12 bg-[#020332] text-white">
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
              <p className="text-lg font-medium mb-2">Resume *</p>
              <input
                type="file"
                placeholder="upload your resume"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Phone *</p>
              <input
                type="text"
                placeholder="Enter Phone"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg font-medium mb-2">Cover Letter *</p>
            <textarea
              placeholder="tell about yourself a bit"
              className="h-60 p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-[#2AABE1] rounded-full p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8 text-white">
              Sumbit
            </button>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[10%] flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold">How can we help you?</p>
        <p className="font-regular text-lg my-5 text-center">
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <Link href={"/lwt"}>
          <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-56 mt-5 xl:mt-8 text-white">
            Let's work Together
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

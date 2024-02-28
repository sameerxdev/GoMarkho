"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";

const OpenPositionsSection = () => {
  return (
    <div
      id="open-positions"
      className="w-[calc(100vw)] px-[5%] xl:px-[8%] py-[8%] flex flex-col gap-8 xl:gap-12 items-center justify-center"
    >
      <p
        className="text-3xl xl:text-5xl font-bold text-center"
        data-aos="fade-down"
      >
        Current Job Open Positions
      </p>
      <div
        className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">Web Designer & Developer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan | Part Time
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">Front-end developer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan | Part Time
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">Quality Assurance Engineer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan |{" "}
              <span className="text-[#2AABE1]">Full Time</span>
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">UI / UX Designer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan |{" "}
              <span className="text-[#2AABE1]">Full Time</span>
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">Backend Developer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan |{" "}
              <span className="text-[#2AABE1]">Full Time</span>
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[50%] border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
          <div>
            <p className="text-lg font-bold">Devops Engineer</p>
            <p className="text-base font-semibold font-roboto">
              {" "}
              Islamabad, Pakistan |{" "}
              <span className="text-[#2AABE1]">Full Time</span>
            </p>
          </div>
          <div>
            <p className="text-base font-roboto">
              It is a long established fact that a reader will be distracted by
              the readable. Lorem Ipsum looking at it layout.
            </p>
          </div>
          <div>
            <Link href={"/jobPost"}>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full border-2 border-[#cccccc] bg-white text-black hover:text-white hover:bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col items-center gap-6 xl:gap-8"
        data-aos="fade-up"
      >
        <div className="lg:w-[60%]">
          <p className="text-lg font-bold text-center">
            Can&apos;t find the position you are looking for?
          </p>
          <p className="text-base font-semibold text-center font-roboto">
            Don&apos;t worry, get in touch with us anyways, we are always
            looking for great team members to join us.
          </p>
        </div>
        <div>
          <Link href={"/lwt"}>
            <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white hover:bg-white hover:text-black font-semibold transition duration-500 hover:scale-105 px-8 py-2 rounded-full flex justify-center items-center">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpenPositionsSection;

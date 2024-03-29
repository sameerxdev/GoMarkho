"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import OpenPositionsSection from "../sharedComponents/OpenPositions";

interface Props {}

export default function CareersComponent(props: Props) {
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

  return (
    <div className="overflow-x-hidden font-jakarta">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"careers"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-100px] h-[25%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold" data-aos="fade-down">
          Careers
        </p>
        <p
          className="font-regular text-lg text-[#797979] my-5 font-roboto"
          data-aos="fade-down"
        >
          Take your career to the next level
        </p>
        <Link href="#open-positions">
          <button
            className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-60 my-5 text-white"
            data-aos="fade-down"
          >
            Browse Open Positions
          </button>
        </Link>
        <div className="flex gap-5 lg:gap-10 my-8 w-full lg:w-[80%]">
          <div className="basis-1/2">
            <Image
              src="/careerImage1.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-full h-auto"
              data-aos="fade-right"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/careerImage2.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-full h-auto"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] flex flex-col md:flex-row items-center justify-center relative py-[8%]">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-100px] h-[30%] w-auto -z-10"
          style={{ rotate: "-20deg" }}
        />
        <div
          className="w-full md:w-[50%] flex flex-col px-[5%] lg:px-[8%] xl:px-[10%] justify-center mb-4 md:mb-0"
          data-aos="fade-right"
        >
          <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-4">
            We are from the people
          </p>
          <p className="font-regular text-base lg:text-lg xl:text-xl text-[#797979] w-[60%] md:w-full font-roboto">
            We are a team of 50+ people – with a purpose to thrive in our
            value-driven culture and make a real and lasting difference to the
            organization and their careers.
          </p>
        </div>
        <div className="w-full md:w-[50%] flex flex-col">
          <Image
            src="/careerImage3.webp"
            alt="Image"
            height={1000}
            width={1000}
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="w-[calc(100vw)] px-[5%] xl:px-[8%] py-[8%] flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold" data-aos="fade-down">
          Career Trackers
        </p>
        <p
          className="font-regular text-lg my-5 text-center lg:w-[60%] text-[#797979] font-roboto"
          data-aos="fade-down"
        >
          Techies, innovators, developers, and free-thinkers… you’ve come to the
          right place. Whether you’re an experienced professional or a recent
          graduate, working with GoMarkho will give you opportunities to excel
          and achieve the global recognition that you deserve!
        </p>
        <div
          className="flex flex-col lg:flex-row gap-8 xl:gap-12"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-[33%] flex flex-col items-center">
            <Image
              src="/careerImage4.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-[80%] h-auto mb-2"
            />
            <p className="font-regular text-lg">Experienced Professionals</p>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col items-center">
            <Image
              src="/careerImage5.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-[80%] h-auto mb-2"
            />
            <p className="font-regular text-lg">Graduates</p>
          </div>
          <div className="w-full lg:w-[33%] flex flex-col items-center">
            <Image
              src="/careerImage6.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-[80%] h-auto mb-2"
            />
            <p className="font-regular text-lg">Internship/MTO</p>
          </div>
        </div>
      </div>

      <OpenPositionsSection />

      <div className="w-[calc(100vw)] flex flex-col px-[5%] lg:px-[8%] py-[8%] justify-center relative">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-300px] md:right-[-250px] lg:right-[-100px] top-0 h-[30%] w-auto -z-10"
          style={{ rotate: "-160deg" }}
        />
        <p
          className="font-regular text-base text-[#797979]"
          data-aos="fade-right"
        >
          OUR HIRING PROCESS
        </p>
        <p
          className="text-2xl xl:text-5xl font-bold mb-8"
          data-aos="fade-right"
        >
          As simple as it could be
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-evenly gap-8 text-black">
          <div
            className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5"
            data-aos="zoom-in"
          >
            <Image
              src="/hiring_process1_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">01</p>
            <p className="text-sm font-bold">APPLY</p>
            <p className="font-regular text-xs lg:text-sm text-center font-roboto">
              Please browse through the job openings and submit your application
              for positions that match your skillset.
            </p>
          </div>
          <div
            className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5"
            data-aos="zoom-in"
          >
            <Image
              src="/hiring_process2_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">02</p>
            <p className="text-sm font-bold">Review</p>
            <p className="font-regular text-xs lg:text-sm text-center font-roboto">
              Our recruiters will review your application and match you with the
              best-fit opportunity.
            </p>
          </div>
          <div
            className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5"
            data-aos="zoom-in"
          >
            <Image
              src="/hiring_process3_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">03</p>
            <p className="text-sm font-bold">Interviews</p>
            <p className="font-regular text-xs lg:text-sm text-center font-roboto">
              Our interviewing process is competency-based, designed to identify
              individuals thrive.
            </p>
          </div>
          <div
            className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5"
            data-aos="zoom-in"
          >
            <Image
              src="/hiring_process4_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">04</p>
            <p className="text-sm font-bold">Onboarding</p>
            <p className="font-regular text-xs lg:text-sm text-center font-roboto">
              Our onboarding process will refine and prepare you for your
              professional journey with GoMarkho.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import { FaRegLightbulb } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { GrCopy } from "react-icons/gr";
import CountUp from "react-countup";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function AboutUsComponent(props: Props) {
  const [counterOn, setCounterOn] = useState(false);

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
      <Navbar isHeaderShow={isHeaderShow} activeTab={"aboutUs"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-230px] md:left-[-200px] h-[20%] w-auto -z-10"
          style={{ rotate: "-20deg" }}
        />
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-240px] md:right-[-200px] h-[20%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold" data-aos="fade-down">
          About Our Company
        </p>
        <p
          className="font-regular text-lg text-[#797979] my-5 font-roboto"
          data-aos="fade-down"
        >
          Enabling a digital tomorrow
        </p>
        <div className="flex gap-2 md:gap-4 lg:gap-10 my-8 xl:w-[80%]">
          <div className="basis-3/5">
            <Image
              src="/aboutUsImage1.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-full h-48 md:h-72 lg:h-96"
              data-aos="fade-right"
            />
          </div>
          <div className="basis-2/5">
            <Image
              src="/aboutUsImage2.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-auto h-48 md:h-72 lg:h-96"
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 my-8 lg:w-[90%] xl:w-[80%]">
          <div className="w-full lg:w-[30%] flex justify-start">
            <p className="text-2xl xl:text-3xl font-bold" data-aos="fade-right">
              What we do
            </p>
          </div>
          <div className="w-full lg:w-[70%] flex justify-start">
            <p
              className="font-regular text-base text-[#797979] font-roboto"
              data-aos="fade-left"
            >
              At GoMarkho, we specialize in offering a comprehensive suite of
              solutions designed to meet the diverse communication needs of
              businesses. With a profound focus on Voice over Internet Protocol
              (VoIP), our expertise extends to encompass software development
              and intelligent automation. As a dynamic provider, we take pride
              in being the singular destination for businesses seeking to
              optimize their communication infrastructure. Whether it&apos;s
              establishing robust VoIP systems for seamless and cost-effective
              voice communication, developing cutting-edge software solutions
              tailored to specific business objectives, or integrating
              intelligent automation to streamline workflows, our team of
              experts is committed to delivering high-quality, innovative, and
              customized services. We strive to empower businesses with the
              tools and technologies necessary to thrive in today&apos;s dynamic
              market landscape.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center gap-8 lg:gap-0 my-8 bg-[#F9F9F9] p-3 md:p-5 rounded-xl">
          <div className="w-full lg:w-[50%] flex justify-between md:justify-evenly">
            <div
              className="flex flex-col items-center gap-2"
              data-aos="zoom-in"
            >
              <div className="flex">
                <CountUp
                  className="text-black text-5xl font-semibold"
                  start={0}
                  end={100}
                  duration={3}
                  delay={0}
                />
                <p className="text-[#146c94] text-5xl font-semibold">M</p>
              </div>
              <p className="text-sm text-black font-bold">
                Client Satisfaction
              </p>
            </div>
            <div
              className="flex flex-col items-center gap-2"
              data-aos="zoom-in"
            >
              <div className="flex">
                <CountUp
                  className="text-black text-5xl font-semibold"
                  start={0}
                  end={24}
                  duration={3}
                  delay={0}
                />
                <p className="text-[#146c94] text-5xl font-semibold">h</p>
              </div>
              <p className="text-sm text-black font-bold">
                Expert Support Team
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-between md:justify-evenly">
            <div
              className="flex flex-col items-center gap-2"
              data-aos="zoom-in"
            >
              <div className="flex">
                <CountUp
                  className="text-black text-5xl font-semibold"
                  start={0}
                  end={98}
                  duration={3}
                  delay={0}
                />
                <p className="text-[#146c94] text-5xl font-semibold">k+</p>
              </div>
              <p className="text-sm text-black font-bold">Sales Count</p>
            </div>
            <div
              className="flex flex-col items-center gap-2"
              data-aos="zoom-in"
            >
              <div className="flex">
                <CountUp
                  className="text-black text-5xl font-semibold"
                  start={0}
                  end={208}
                  duration={3}
                  delay={0}
                />
                <p className="text-[#146c94] text-5xl font-semibold">+</p>
              </div>
              <p className="text-sm text-black font-bold">Client Worldwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row py-[5%] w-[calc(100vw)] lg:h-[calc(90vh)]">
        <div className="h-full w-full lg:w-[70%] bg-[#020332] flex flex-col gap-8 justify-center lg:items-start items-center px-[5%] xl:px-[10%] py-[10%]">
          <p
            className="text-3xl xl:text-5xl font-bold text-white"
            data-aos="fade-right"
          >
            Our Mission
          </p>
          <p
            className="text-lg xl:text-xl text-white w-full lg:w-[80%] text-center lg:text-left font-roboto"
            data-aos="fade-right"
          >
            Enabling seamless, innovative communication solutions and
            transformative technologies, our mission is to empower businesses
            with tailored VoIP systems, cutting-edge software solutions, and
            intelligent automation. We strive to be the catalyst for enhanced
            connectivity, operational efficiency, and growth, ensuring our
            clients thrive in an ever-evolving business landscape.
          </p>
        </div>
        <div className="h-full w-full lg:w-[30%] flex items-center justify-center relative py-[5%]">
          <Image
            src="/aboutUsImage3.webp"
            alt="Image"
            height={1000}
            width={1000}
            className="w-[90%] md:w-[70%] h-auto lg:h-[80%] xl:h-[90%] lg:w-auto lg:absolute left-[-80px]"
            data-aos="fade-left"
          />
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[8%] flex flex-col items-center justify-center">
        <p
          className="text-3xl xl:text-5xl font-bold text-center"
          data-aos="fade-down"
        >
          The Story and Values behind our Company
        </p>
        <div
          className="flex flex-col lg:flex-row w-full items-center gap-8 mt-8"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-[50%] flex bg-[#F9F9F9] rounded-xl p-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex justify-center items-center bg-[#146c94] px-5 md:px-8 py-8 rounded-xl">
                <FaRegLightbulb
                  style={{ color: "white", height: 50, width: "auto" }}
                />
              </div>
              <div>
                <p className="text-lg text-black font-bold mb-1">Innovation</p>
                <p className="text-sm font-regular text-[#797979] font-roboto">
                  Innovation threads through our DNA, sparking creativity and
                  progress in every venture we undertake.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex bg-[#F9F9F9] rounded-xl p-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex justify-center items-center bg-[#146c94] px-5 md:px-8 py-8 rounded-xl">
                <FaUserFriends
                  style={{ color: "white", height: 50, width: "auto" }}
                />
              </div>
              <div>
                <p className="text-lg text-black font-bold mb-1">Team work</p>
                <p className="text-sm text-[#797979] font-regular font-roboto">
                  Teamwork is our driving force, weaving diverse skills into a
                  tapestry of shared success and collective achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row w-full items-center gap-8 my-8"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-[50%] flex bg-[#F9F9F9] rounded-xl p-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex justify-center items-center bg-[#146c94] px-5 md:px-8 py-8 rounded-xl">
                <FaAward
                  style={{ color: "white", height: 50, width: "auto" }}
                />
              </div>
              <div>
                <p className="text-lg text-black font-bold mb-1">Integrity</p>
                <p className="text-sm text-[#797979] font-regular font-roboto">
                  In the spirit of true partnership, we want to do right by you
                  and that means we will advise and provide you with the
                  solutions we think are best for you.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex bg-[#F9F9F9] rounded-xl p-4">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="flex justify-center items-center bg-[#146c94] px-5 md:px-8 py-8 rounded-xl">
                <GrCopy style={{ color: "white", height: 50, width: "auto" }} />
              </div>
              <div>
                <p className="text-lg text-black font-bold mb-1">
                  Responsibility
                </p>
                <p className="text-sm text-[#797979] font-regular font-roboto">
                  For us it is not about a one time sale, we will be your
                  technology partners and thus our approach to work in
                  action-oriented and result driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(60vh)] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold" data-aos="fade-down">
          How can we help you?
        </p>
        <p
          className="font-regular text-lg my-3 text-center font-roboto"
          data-aos="fade-down"
        >
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <Link href={"/lwt"}>
          <button
            className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-56 mt-5 text-white"
            data-aos="fade-up"
          >
            Let&apos;s work Together
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

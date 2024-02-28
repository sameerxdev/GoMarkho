"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/style.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function LandingPageComponent(props: Props) {
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
      <Navbar isHeaderShow={isHeaderShow} activeTab={"home"} />
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="h-[calc(100vh)] w-[calc(100vw)] relative">
            <video
              src="/heroBg1.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="w-full h-full flex flex-col gap-2 xl:gap-5 justify-center px-[5%] xl:px-[8%] absolute z-20 text-white"
              data-aos="fade-right"
            >
              <p className="text-5xl font-black">Elevate</p>
              <p className="text-4xl font-medium">Your Voice.</p>
              <p className="text-lg xl:text-xl font-normal font-roboto">
                One-stop provider for all communication.
              </p>
              <Link href={"/contactUs"}>
                <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[calc(100vh)] w-[calc(100vw)] relative">
            <video
              src="/heroBg2.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="w-full h-full flex flex-col gap-2 xl:gap-5 justify-center px-[5%] xl:px-[8%] absolute z-20 text-white"
              data-aos="fade-right"
            >
              <p className="text-5xl font-black">Transforming </p>
              <p className="text-4xl font-medium">Communication Excellence</p>
              <p className="text-lg xl:text-xl font-normal font-roboto">
                Revolutionize the way you connect and collaborate.
              </p>
              <Link href={"/contactUs"}>
                <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8">
                  Get in touch
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="w-full flex flex-col lg:flex-row gap-8 px-[5%] xl:px-[8%] py-[5%] h-[calc(140vh)] lg:h-[calc(90vh)]">
        <div className="w-full lg:w-[55%] h-[50%] lg:h-full relative">
          <div
            className="absolute w-full h-[90%] flex justify-center items-center top-0 left-0"
            data-aos="fade-right"
          >
            <Image
              src="/homeImage1.webp"
              alt="Image"
              height={500}
              width={500}
              className="h-[60%] md:h-[50%] lg:h-[40%] xl:h-[50%] w-auto mt-5 md:mt-20 lg:mt-10"
            />
          </div>
          <div className="absolute w-full h-full flex flex-col gap-2 justify-center items-start top-0 left-0">
            <p className="font-medium text-2xl text-[#146C94]">Services</p>
            <p className="gradient-background text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold">
              Experience tailored excellence, designed to elevate your
              connectivity, deliver personalized solutions, and streamline
              operations.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:w-[45%] flex flex-col font-roboto"
          data-aos="fade-left"
        >
          <div className="w-full flex justify-center items-center border-b border-[#f3f3f3] relative">
            <div className="flex justify-center items-center absolute top-0 left-0 z-0">
              <p className="text-outline text-4xl font-jakarta">01.</p>
            </div>
            <div className="flex flex-col gap-[6px] px-8 pt-10 pb-4 z-10">
              <p className="font-regular text-xl text-black">
                Communication Solutions
              </p>
              <p className="font-thin text-sm">
                Effective & reliable communication is the secret that lies at
                the heart of every successful business.
              </p>
              <Link href={"/communicationSolutions"}>
                <p className="text-[#2AABE1] text-base font-bold flex items-center gap-2">
                  Learn More{" "}
                  <Image
                    src="/arrowBlue.webp"
                    alt="Icon"
                    height={100}
                    width={100}
                    className="h-5 w-auto"
                  />
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center items-center border-b border-[#f3f3f3] relative">
            <div className="flex justify-center items-center absolute top-0 left-0 z-0">
              <p className="text-outline text-4xl font-jakarta">02.</p>
            </div>
            <div className="flex flex-col gap-[6px] px-8 pt-10 pb-4 z-10">
              <p className="font-regular text-xl text-black">
                Software Development
              </p>
              <p className="font-thin text-sm">
                Any business that aims to offer a personalized service needs to
                cater to its own specific needs first.
              </p>
              <Link href={"/softwareDevelopment"}>
                <p className="text-[#2AABE1] text-base font-bold flex items-center gap-2">
                  Learn More{" "}
                  <Image
                    src="/arrowBlue.webp"
                    alt="Icon"
                    height={100}
                    width={100}
                    className="h-5 w-auto"
                  />
                </p>
              </Link>
            </div>
          </div>
          <div className="w-full flex justify-center items-center relative">
            <div className="flex justify-center items-center absolute top-0 left-0 z-0">
              <p className="text-outline text-4xl font-jakarta">03.</p>
            </div>
            <div className="flex flex-col gap-[6px] px-8 pt-10 pb-4 z-10">
              <p className="font-regular text-xl text-black">
                Process Automation
              </p>
              <p className="font-thin text-sm">
                You need to free your teams from drudgery of routine tasks to
                enhance customers’ experience.
              </p>
              <Link href={"/processAutomation"}>
                <p className="text-[#2AABE1] text-base font-bold flex items-center gap-2">
                  Learn More{" "}
                  <Image
                    src="/arrowBlue.webp"
                    alt="Icon"
                    height={100}
                    width={100}
                    className="h-5 w-auto"
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row py-[5%] h-[calc(160vh)] md:h-[calc(210vh)] lg:h-[calc(100vh)]">
        <div
          className="h-full w-full lg:w-[30%] flex items-center justify-center relative py-[5%]"
          data-aos="fade-right"
        >
          <Image
            src="/homeImage2.webp"
            alt="Image"
            height={1000}
            width={1000}
            className="w-[90%] md:w-[70%] h-auto lg:h-[80%] xl:h-[90%] lg:w-auto lg:absolute right-[-80px]"
          />
        </div>
        <div className="w-full lg:w-[70%] h-full bg-[#020332] flex flex-col gap-8 justify-center lg:items-end items-center px-[5%] xl:px-[10%] py-[10%]">
          <p
            className="text-lg xl:text-xl text-white w-full lg:w-[80%]"
            data-aos="fade-left"
          >
            Specializing in VoIP, software development, and intelligent
            automation, we offer tailored solutions that resonate with your
            unique needs. Elevate your communication experience with us – your
            trusted one-stop provider for all your business needs.
          </p>
          <div
            className="flex flex-col lg:flex-row gap-8 lg:gap-14"
            data-aos="fade-left"
          >
            <div className="text-center project_counter">
              <CountUp
                className="text-sky-500 text-5xl font-semibold"
                start={0}
                end={150}
                duration={3}
                delay={0}
                suffix="+"
              />
              <p className="text-sm text-white font-light font-roboto">
                Project Completed
              </p>
            </div>
            <div className="text-center">
              <CountUp
                start={0}
                end={200}
                duration={3}
                delay={0}
                suffix="+"
                className="text-sky-500 text-5xl font-semibold"
              />
              <p className="text-sm text-white font-light font-roboto">
                Clients Satisfied
              </p>
            </div>
            <div className="text-center project_counter">
              <CountUp
                start={0}
                end={10}
                duration={3}
                delay={0}
                suffix="+"
                className="text-sky-500 text-5xl font-semibold"
              />
              <p className="text-sm text-white font-light font-roboto">
                Years of Experience
              </p>
            </div>
          </div>
          <div data-aos="fade-left">
            <Link href={"/aboutUs"}>
              <p className="text-base font-roboto 2xl:text-lg bg-[#2AABE1] font-semibold transition duration-500 hover:scale-105 text-white px-8 py-3 rounded-full flex gap-5 items-center">
                About Us{" "}
                <Image
                  src="/arrowWhite.webp"
                  alt="Icon"
                  height={100}
                  width={100}
                  className="h-auto w-4"
                  style={{ rotate: "180deg" }}
                />
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center px-[5%] xl:px-[8%] w-[calc(100vw)] h-[calc(60vh)] md:h-[calc(50vh)]  relative">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-120px] md:left-[-80px] h-[40%] w-auto"
          style={{ rotate: "-20deg" }}
        />
        <p
          className="text-black font-semibold text-xl xl:text-3xl text-center z-10"
          data-aos="zoom-in"
        >
          Discover the difference as you join a community of businesses that
          have experienced the transformative power of our services.
        </p>
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-120px] md:right-[-80px] h-[40%] w-auto"
          style={{ rotate: "160deg" }}
        />
      </div>

      <div className="flex flex-col justify-center gap-8 py-[10%] px-[5%] xl:px-[8%]">
        <div
          className="flex justify-between items-center w-full"
          data-aos="fade-down"
        >
          <p className="text-3xl lg:text-4xl font-bold">Client Testimonials</p>
          <div className="flex gap-2">
            <div className="bg-[#2AABE1] flex justify-center items-center h-10 w-10 rounded">
              <Image
                src="/arrowWhite.webp"
                alt="Icon"
                height={100}
                width={100}
                className="h-auto w-6"
              />
            </div>
            <div className="bg-[#2AABE1] flex justify-center items-center h-10 w-10 rounded">
              <Image
                src="/arrowWhite.webp"
                alt="Icon"
                height={100}
                width={100}
                className="h-auto w-6"
                style={{ rotate: "180deg" }}
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row gap-8 xl:gap-12 relative font-roboto"
          data-aos="fade-up"
        >
          <Image
            src="/comas.webp"
            alt="Image"
            height={100}
            width={100}
            className="absolute top-[-10px] left-[-10px] z-20 h-12 w-12"
          />
          <Image
            src="/comas.webp"
            alt="Image"
            height={100}
            width={100}
            className="absolute bottom-[-10px] right-[-10px] z-20 h-12 w-12"
            style={{ rotate: "180deg" }}
          />
          <div className="w-full lg:w-[33%] px-8 py-12 shadow-2xl rounded-xl">
            <div className="flex flex-col h-full justify-between gap-8">
              <p className="font-regular text-base xl:text-lg">
                GoMarkho builds highly stable applications. There support is
                exceptional.They have a vast majority of experts that helped us
                scale our infrastructure in minimum time.
              </p>
              <div className="flex gap-4 items-center">
                <Image
                  src="/test1.webp"
                  alt="Image"
                  height={100}
                  width={100}
                  className="h-20 w-20"
                />
                <div>
                  <p className="text-base font-medium">Brian Colombiana</p>
                  <p className="text-sm font-light">Smart Automation Systems</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[33%] px-8 py-12 shadow-2xl rounded-xl">
            <div className="flex flex-col h-full justify-between gap-8">
              <p className="font-regular text-base xl:text-lg">
                GoMarkho IT services and solutions are recommended to you. One
                of the best feature is their turnaround time. Whenever any
                assistance is needed it’s pretty much 24/7.
              </p>
              <div className="flex gap-2 xl:gap-4 items-center">
                <Image
                  src="/test2.webp"
                  alt="Image"
                  height={100}
                  width={100}
                  className="h-20 w-20"
                />
                <div>
                  <p className="text-base font-medium">Marcos Manzi</p>
                  <p className="text-sm font-light">
                    Global Health and Life LLC
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[33%] px-8 py-12 shadow-2xl rounded-xl">
            <div className="flex flex-col h-full justify-between gap-8">
              <p className="font-regular text-base xl:text-lg">
                Choosing GoMarkho was a gamechanger for our business. Their
                expertise in VoIP, software development, and automation has
                streamlined our communication processes, delivering unmatched
                efficiency.
              </p>
              <div className="flex gap-4 items-center">
                <Image
                  src="/test3.webp"
                  alt="Image"
                  height={100}
                  width={100}
                  className="h-20 w-20"
                />
                <div>
                  <p className="text-base font-medium">Emily Thompson</p>
                  <p className="text-sm font-light">
                    CEO at Thompson Innovations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

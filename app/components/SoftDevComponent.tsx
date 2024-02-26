"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function SoftDevComponent(props: Props) {
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
      <Navbar isHeaderShow={isHeaderShow} activeTab={"softDev"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-130px] lg:right-[-100px] top-[100px] h-[15%] lg:h-[25%] w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p
          className="text-3xl xl:text-5xl font-bold text-center"
          data-aos="fade-down"
        >
          Software Development
        </p>
        <p
          className="font-regular text-lg text-[#797979] text-center my-5 font-roboto"
          data-aos="fade-down"
        >
          Any business that aims to offer a personalized services needs to cater
          to its own specific needs first.
        </p>
        <p
          className="text-2xl xl:text-3xl font-bold mt-12 mb-8 text-center"
          data-aos="fade-up"
        >
          Benefits of Custom Software Solutions
        </p>
        <div
          className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12 items-center lg:justify-center relative"
          data-aos="fade-up"
        >
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/comSolIcon1.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2 text-center">
                Cost Effective
              </p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Custom solutions are a smart investment. They save you from the
                hassle of investing in multiple partially suitable software
                purchases.
              </p>
            </div>
          </div>
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/softDevIcon2.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2 text-center">
                Scalability
              </p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Businesses grow and their processes become more complex. This
                can be too much to handle for off-the-shelf solutions.
              </p>
            </div>
          </div>
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/comSolIcon3.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col justify-start items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2 text-center">
                Security
              </p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                A public software is available to everyone and is an easy target
                for hackers, while a custom-developed software is harder for
                hackers.
              </p>
            </div>
          </div>
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/softDevIcon1.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2 text-center">
                Efficiency
              </p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Using a software that is designed to cater to your needs will
                enable your team to perform tasks faster and more efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(160vh)] md:h-[calc(110vh)] lg:h-[calc(100vh)] xl:h-[calc(90vh)] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-120px] md:left-[-80px] lg:left-[-100px] top-0 h-[20%] lg:h-[25%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-2xl xl:text-3xl font-bold mb-8" data-aos="fade-down">
          Our Software Solutions
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 font-roboto">
          <div
            className="w-full lg:w-[20%] flex flex-col gap-5"
            data-aos="fade-right"
          >
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/softDevIcon3.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base">
                  Business Interaction
                </p>
              </div>
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/softDevIcon4.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  B2C Interactions
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/softDevIcon5.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  B2B Dealings
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] h-full flex justify-center items-center p-8 xl:p-12 bg-[#020332] rounded-xl">
            <p
              className="text-white text-lg xl:text-xl font-regular py-10"
              data-aos="fade-left"
            >
              In a successful business, streamlined coordination of
              organizational functions is vital for efficiency. Recognizing
              this, GoMarkho offers custom software solutions tailored to
              address the unique complexities of internal operations. From
              talent acquisition to quality assurance, our services optimize
              various facets, ensuring precision and effectiveness. Elevate your
              business operations with GoMarkho&apos;s personalized software
              solutions, designed for seamless efficiency and tailored
              effectiveness.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[8%] flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-100px] lg:right-[-100px] top-[100px] h-[10%] lg:h-[25%]  w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p className="text-2xl xl:text-3xl font-bold mb-8" data-aos="fade-down">
          Key Features
        </p>
        <div
          className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12 items-center lg:justify-center relative"
          data-aos="fade-up"
        >
          <div className="w-full h-full lg:w-[33%] px-6 py-4 lg:py-8 flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/softDevIcon6.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">Task Management</p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Effortlessly organize and track tasks with our intuitive task
                management feature, streamlining project workflows.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[33%] px-6 py-4 lg:py-8 bg-[#f9f9f9] flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/softDevIcon7.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">
                Financial Management
              </p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Empower financial control and transparency with our
                comprehensive financial management tools, ensuring precision in
                financial operations.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[33%] px-6 py-8 flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/softDevIcon8.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">ERP Systems</p>
              <p className="font-regular text-[#666666] text-sm text-center font-roboto">
                Experience seamless integration and optimization of your
                business processes through our robust ERP systems, enhancing
                overall efficiency and coordination.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[10%] flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold" data-aos="fade-down">
          How can we help you?
        </p>
        <p
          className="font-regular text-lg my-5 text-center font-roboto"
          data-aos="fade-down"
        >
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <Link href={"/lwt"}>
          <button
            className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-56 mt-5 xl:mt-8 text-white"
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

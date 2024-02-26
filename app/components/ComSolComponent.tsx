"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function ComSolComponent(props: Props) {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="overflow-x-hidden">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"comSol"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-230px] md:right-[-200px] lg:right-[-100px] top-[100px] h-[25%] w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold text-center">
          Communication Solution
        </p>
        <p className="font-regular text-lg text-[#797979] text-center my-5">
          Effective communication is the secret that lies at the heart of every
          successful business.
        </p>
        <p className="text-2xl xl:text-3xl font-bold mt-12 mb-8">
          Benefits of VoIP
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12 items-center lg:justify-center relative">
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
              <p className="font-semibold text-lg xl:text-xl mb-2">
                Cost Effective
              </p>
              <p className="font-regular text-[#666666] text-sm text-center">
                VoIP is a cost-effective option because it lets you leverage the
                internet service you are already using.
              </p>
            </div>
          </div>
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/comSolIcon2.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2">Flexible</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                VoIP solutions allow you to integrate critical communications
                tools, such as video conferencing.
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
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2">Reliable</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                VoIP solutions help maintain business continuity by forwarding
                calls to preset numbers in case of any untoward incident.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(170vh)] md:h-[calc(100vh)] lg:h-[calc(120vh)] xl:h-[calc(110vh)] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-120px] md:left-[-80px] lg:left-[-100px] top-0 h-[20%] lg:h-[25%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-2xl xl:text-3xl font-bold mb-8">Benefits of VoIP</p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="w-full lg:w-[20%] flex flex-col gap-5">
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/comSolIcon4.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base">Hosted PBX</p>
              </div>
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/comSolIcon5.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  Voice Broadcasting
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/comSolIcon6.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  Interactive Voice Response
                </p>
              </div>
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/comSolIcon7.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  Ringless Voicemail
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] h-full flex justify-center items-center p-8 xl:p-12 bg-[#020332] rounded-xl">
            <p className="text-white text-lg xl:text-xl font-regular py-10">
              Say goodbye to traditional PBX hassles. Our hosted PBX, a
              cloud-based system accessible via an IP network, eliminates hefty
              upfront investments and ongoing maintenance. With no IT or
              installation costs, businesses can seamlessly manage their phone
              systems through a user-friendly control panel. Experience the
              ease, cost-effectiveness, and popularity of our hosted PBX
              solutions for modern businesses.
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
        <p className="text-2xl xl:text-3xl font-bold mb-8">Key Features</p>
        <div className="w-full flex flex-col lg:flex-row gap-6 xl:gap-12 items-center lg:justify-center relative">
          <div className="w-full h-full lg:w-[33%] px-6 py-4 lg:py-8 flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/comSolIcon8.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">Secured Platform</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                We make sure every system we make stay safe for users as well as
                customers, as security is our key component.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[33%] px-6 py-4 lg:py-8 bg-[#f9f9f9] flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/comSolIcon9.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">
                Unlimited Scalability
              </p>
              <p className="font-regular text-[#666666] text-sm text-center">
                We provide multiple iterations and leave space for scalability
                in future maintenance phases.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[33%] px-6 py-8 flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/comSolIcon10.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">Automated calls</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                It involves auto attendant, calling in business hours, block
                calls, voicemails, call transfer, call recording and monitoring,
                etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(60vh)] lg:h-[calc(80vh)] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold">How can we help you?</p>
        <p className="font-regular text-lg my-5 text-center">
          Are you ready to push boundaries and explore new frontiers of
          innovation?
        </p>
        <Link href={"/lwt"}>
          <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-56 mt-5 xl:mt-8 text-white">
            Let&apos;s work Together
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

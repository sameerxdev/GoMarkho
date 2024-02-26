"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function ProcAutComponent(props: Props) {
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
          className="absolute right-[-230px] md:right-[-200px] lg:right-[-100px] top-[100px] h-[25%] w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold text-center">
          Process Automation
        </p>
        <p className="font-regular text-lg text-[#797979] text-center my-5">
          You need to free your teams from the drudgery of routine tasks to
          enhance your customers’ experience.
        </p>
        <p className="text-2xl xl:text-3xl font-bold mt-12 mb-8 text-center">
          Benefits of Custom Software Solutions
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
                Automation may seems like an expensive project but in reality it
                frees up employees for higher value work.
              </p>
            </div>
          </div>
          <div className="w-full h-72 lg:w-[25%] px-5 py-8 bg-[#f9f9f9] border border-[#cbcbcb] flex flex-col items-center gap-4 rounded-xl">
            <div className="flex justify-center items-center h-[33%]">
              <Image
                src="/procAutIcon1.webp"
                alt="Image"
                height={100}
                width={100}
                className="h-12 w-auto"
              />
            </div>
            <div className="flex flex-col items-center h-[67%]">
              <p className="font-semibold text-lg xl:text-xl mb-2 text-center">
                Better User Experience
              </p>
              <p className="font-regular text-[#666666] text-sm text-center">
                Greater insight into your target audience allows you to offer
                your consumers a more personalized experience.
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
                Improved Efficiency
              </p>
              <p className="font-regular text-[#666666] text-sm text-center">
                It is a cost-effective option because it lets you leverage the
                internet service you are already using.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(140vh)] md:h-[calc(100vh)] lg:h-[calc(90vh)] xl:h-[calc(80vh)] w-[calc(100vw)] relative px-[5%] xl:px-[8%] flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute left-[-120px] md:left-[-80px] lg:left-[-100px] top-0 h-[25%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-2xl xl:text-3xl font-bold mb-8">
          Our Automation Solutions
        </p>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          <div className="w-full lg:w-[20%] flex flex-col gap-5">
            <div className="flex flex-col md:flex-row lg:flex-col gap-5">
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/procAutIcon2.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  Workflow Optimization
                </p>
              </div>
              <div className="w-full md:w-[50%] lg:w-full flex flex-col justify-center items-center rounded-xl bg-[#F9F9F9] border-[#CBCBCB] border py-6 px-2">
                <Image
                  src="/procAutIcon3.webp"
                  alt="Icon"
                  height={1000}
                  width={1000}
                  className="w-10 h-auto mb-4"
                />
                <p className="text-black font-semibold text-base text-center">
                  Marketing Automation
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] h-full flex justify-center items-center p-8 xl:p-12 bg-[#020332] rounded-xl">
            <p className="text-white text-lg xl:text-xl font-regular py-10">
              Unlock the potential of automation with GoMarkho, empowering your
              organization to leverage digital labor for enhanced business
              continuity. Our technologists collaborate with clients globally,
              seamlessly transforming industry-specific functions into efficient
              automated workflows aligned with operational goals. Utilizing
              real-world data, GoMarkho optimizes your workflow through
              automation, ensuring higher-quality results, reduced costs, and
              minimized risks.
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
                src="/softDevIcon6.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">Consultation</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                Expert consultations tailor process automation solutions to your
                unique business needs, ensuring optimal efficiency.
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
              <p className="font-bold text-lg xl:text-xl">Plan, Pilot, Scale</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                Strategically plan and pilot-scale your automation initiatives
                for seamless integration and maximum impact.
              </p>
            </div>
          </div>
          <div className="w-full h-full lg:w-[33%] px-6 py-8 flex flex-col items-center gap-2 rounded-xl">
            <div className="flex justify-center items-center h-[60%]">
              <Image
                src="/procAutIcon4.webp"
                alt="Image"
                height={1000}
                width={1000}
                className="h-full w-auto"
              />
            </div>
            <div className="h-[40%] flex flex-col gap-1 justify-center items-center">
              <p className="font-bold text-lg xl:text-xl">Data Capture</p>
              <p className="font-regular text-[#666666] text-sm text-center">
                Efficiently capture and utilize crucial data with our advanced
                automation processes, driving informed decision-making.
              </p>
            </div>
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

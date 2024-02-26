"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="overflow-x-hidden">
      <Navbar isHeaderShow={isHeaderShow} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-100px] h-[25%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold">Careers</p>
        <p className="font-regular text-lg text-[#797979] my-5">
          Take your career to the next level
        </p>
        <button className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-60 my-5 text-white">
          Browse Open Positions
        </button>
        <div className="flex gap-5 lg:gap-10 my-8 w-full lg:w-[80%]">
          <div className="basis-1/2">
            <Image
              src="/careerImage1.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-full h-auto"
            />
          </div>
          <div className="basis-1/2">
            <Image
              src="/careerImage2.webp"
              alt="Image"
              height={1000}
              width={1000}
              className="w-full h-auto"
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
        <div className="w-full md:w-[50%] flex flex-col px-[5%] lg:px-[8%] xl:px-[10%] justify-center mb-4 md:mb-0">
          <p className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-4">
            We are from the people
          </p>
          <p className="font-regular text-base lg:text-lg xl:text-xl text-[#797979] w-[60%] md:w-full">
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
        <p className="text-3xl xl:text-5xl font-bold">Career Trackers</p>
        <p className="font-regular text-lg my-5 text-center lg:w-[60%] text-[#797979]">
          Techies, innovators, developers, and free-thinkers… you’ve come to the
          right place. Whether you’re an experienced professional or a recent
          graduate, working with GoMarkho will give you opportunities to excel
          and achieve the global recognition that you deserve!
        </p>
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
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

      <div className="w-[calc(100vw)] px-[5%] xl:px-[8%] py-[8%] flex flex-col gap-8 xl:gap-12 items-center justify-center">
        <p className="text-3xl xl:text-5xl font-bold text-center">
          Current Job Open Positions
        </p>
        <div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="w-full lg:w-[50%] text-white bg-[#020332] rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">Web Designer & Developer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan | Part Time
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <Link href={"/jobPost"}>
                <button className="text-base 2xl:text-lg bg-white text-black font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[50%] border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">Front-end developer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan | Part Time
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <Link href={"/jobPost"}>
                <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="w-full lg:w-[50%] border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">Quality Assurance Engineer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan |{" "}
                <span className="text-[#2AABE1]">Full Time</span>
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">UI / UX Designer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan |{" "}
                <span className="text-[#2AABE1]">Full Time</span>
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-12">
          <div className="w-full lg:w-[50%] border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">Backend Developer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan |{" "}
                <span className="text-[#2AABE1]">Full Time</span>
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[50%] border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col gap-6 xl:gap-8">
            <div>
              <p className="text-lg font-bold">Devops Engineer</p>
              <p className="text-base font-semibold">
                {" "}
                Islamabad, Pakistan |{" "}
                <span className="text-[#2AABE1]">Full Time</span>
              </p>
            </div>
            <div>
              <p className="text-base">
                It is a long established fact that a reader will be distracted
                by the readable. Lorem Ipsum looking at it layout.
              </p>
            </div>
            <div>
              <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-6 py-2 rounded-full flex justify-center items-center">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-[#cccccc] text-black bg-white rounded-xl p-5 xl:p-8 flex flex-col items-center gap-6 xl:gap-8">
          <div className="lg:w-[60%]">
            <p className="text-lg font-bold text-center">
              Can&apos;t find the position you are looking for?
            </p>
            <p className="text-base font-semibold text-center">
              Don&apos;t worry, get in touch with us anyways, we are always
              looking for great team members to join us.
            </p>
          </div>
          <div>
            <button className="text-base 2xl:text-lg bg-[#2AABE1] text-white font-semibold transition duration-500 hover:scale-105 px-8 py-2 rounded-full flex justify-center items-center">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] flex flex-col px-[5%] lg:px-[8%] py-[8%] justify-center relative">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-300px] md:right-[-250px] lg:right-[-100px] top-0 h-[30%] w-auto -z-10"
          style={{ rotate: "-160deg" }}
        />
        <p className="font-regular text-base text-[#797979]">
          OUR HIRING PROCESS
        </p>
        <p className="text-2xl xl:text-5xl font-bold mb-8">
          As simple as it could be
        </p>
        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-evenly gap-8 text-black">
          <div className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5">
            <Image
              src="/hiring_process1_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">01</p>
            <p className="text-sm font-bold">APPLY</p>
            <p className="font-regular text-xs lg:text-sm text-center">
              Please browse through the job openings and submit your application
              for positions that match your skillset.
            </p>
          </div>
          <div className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5">
            <Image
              src="/hiring_process2_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">02</p>
            <p className="text-sm font-bold">Review</p>
            <p className="font-regular text-xs lg:text-sm text-center">
              Our recruiters will review your application and match you with the
              best-fit opportunity.
            </p>
          </div>
          <div className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5">
            <Image
              src="/hiring_process3_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">03</p>
            <p className="text-sm font-bold">Interviews</p>
            <p className="font-regular text-xs lg:text-sm text-center">
              Our interviewing process is competency-based, designed to identify
              individuals thrive.
            </p>
          </div>
          <div className="w-[70%] md:w-[35%] lg:w-[25%] xl:w-[20%] h-80 rounded-full border border-[#cccccc] flex flex-col items-center justify-center gap-4 py-16 px-5">
            <Image
              src="/hiring_process4_svg.webp"
              alt="Icon"
              height={1000}
              width={1000}
              className="h-12 w-auto"
            />
            <p className="text-2xl font-medium">04</p>
            <p className="text-sm font-bold">Onboarding</p>
            <p className="font-regular text-xs lg:text-sm text-center">
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

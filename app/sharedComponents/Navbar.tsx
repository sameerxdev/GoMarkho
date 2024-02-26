"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

interface NavbarComponentInterface {
  isHeaderShow: any;
}

export default function Navbar(props: NavbarComponentInterface) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceMobOpen, setIsServiceMobOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setStartAnimation(true);
  }, []);
  return (
    <>
      {isSidebarOpen ? (
        <div className="w-[calc(75vw)] md:w-[calc(50vw)] h-[calc(100vh)] bg-white fixed left-0 top-0 z-50 px-[5%] pt-[5%] overflow-y-scroll">
          <div className="flex justify-between items-center">
            <Link href={"/landingPage"}>
              <Image
                src="/logo.webp"
                alt="Logo"
                height={300}
                width={300}
                className="h-auto w-[120px]"
              />
            </Link>
            <RxCross2
              style={{ fontSize: "24px" }}
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            />
          </div>
          <div
            className="flex justify-between items-center pr-3 py-3 mt-4 border-b-2"
            onClick={() => {
              setIsServiceMobOpen(!isServiceMobOpen);
            }}
          >
            <p className="text-black text-lg">Services</p>
            <Image
              src="/dropdownBlack.webp"
              alt="Logo"
              height={300}
              width={300}
              className="w-[25px] h-[25px]"
              style={
                isServiceMobOpen
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0deg)" }
              }
            />
          </div>
          {isServiceMobOpen ? (
            <div className="bg-white px-[5%]">
              <Link href={"/communicationSolutions"}>
                <p className="text-base text-black py-3 border-b-2">
                  Communication Solutions
                </p>
              </Link>
              <Link href={"/softwareDevelopment"}>
                <p className="text-base text-black py-3 border-b-2">
                  Software Development
                </p>
              </Link>
              <Link href={"/processAutomation"}>
                <p className="text-base text-black py-3 border-b-2">
                  Process Automation
                </p>
              </Link>
            </div>
          ) : null}
          <Link href={"/aboutUs"}>
            <p className="text-black text-lg py-3 border-b-2 flex items-center">
              About Us
            </p>
          </Link>
          <Link href={"/careers"}>
            <p className="text-black text-lg py-3 border-b-2 flex items-center">
              Careers
            </p>
          </Link>
          <Link href={"/blogs"}>
            <p className="text-black text-lg py-3 border-b-2 flex items-center">
              Blogs
            </p>
          </Link>
          <Link href={"/contactUs"}>
            <p className="text-lg py-3 bg-[#2AABE1] w-[80%] font-semibold transition duration-500 hover:scale-105 text-white rounded-full text-center my-3">
              Contact Us
            </p>
          </Link>
        </div>
      ) : null}
      <>
        <div
          className={`fixed flex justify-between items-center border-b border-white h-16 2xl:h-20 top-0 w-full z-40 px-[5%] xl:px-[8%] transition-all duration-1000 ease-in-out transform ${
            startAnimation ? "translate-y-0" : "-translate-y-full"
          }`}
          style={
            props.isHeaderShow
              ? {
                  backgroundColor: "white",
                  boxShadow: "0px 6px 4px 0px rgba(0, 0, 0, 0.25)",
                  color: "black",
                }
              : { background: "transparent" }
          }
        >
          <Link href={"/landingPage"} className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Logo"
              className="w-auto h-8 lg:h-10"
              height={500}
              width={500}
            />
          </Link>

          <div
            className="flex lg:hidden h-full items-center"
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <GiHamburgerMenu style={{ fontSize: "28px" }} />
          </div>

          <div className="gap-6 items-center lg:flex hidden">
            <p
              className="text-base 2xl:text-lg pr-4 font-semibold transition duration-500 hover:text-sky-500 flex items-center gap-[2px] relative"
              onMouseEnter={() => {
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                setIsServicesOpen(false);
              }}
            >
              Services
              <span>
                <Image
                  src="/dropdownBlack.webp"
                  alt="Icon"
                  height={50}
                  width={50}
                  style={{
                    transform: `rotate(${isServicesOpen ? "180deg" : "0deg"})`,
                  }}
                  className="h-5 w-auto"
                />
              </span>
              {isServicesOpen && (
                <div
                  className="absolute top-[28px] shadow rounded-lg bg-white w-56 p-3 flex flex-col gap-2 font-normal"
                  onMouseEnter={() => {
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                  }}
                >
                  <Link href={"/communicationSolutions"}>
                    <p className="text-[16px] text-black hover:text-[#2AABE1]">
                      Communication Solutions
                    </p>
                  </Link>
                  <Link href={"/softwareDevelopment"}>
                    <p className="text-[16px] text-black hover:text-[#2AABE1]">
                      Software Development
                    </p>
                  </Link>
                  <Link href={"/processAutomation"}>
                    <p className="text-[16px] text-black hover:text-[#2AABE1]">
                      Process Automation
                    </p>
                  </Link>
                </div>
              )}
            </p>
            <Link href={"/aboutUs"}>
              <p className="text-base 2xl:text-lg font-semibold transition duration-500 hover:text-sky-500">
                About Us
              </p>
            </Link>
            <Link href={"/careers"}>
              <p className="text-base 2xl:text-lg font-semibold transition duration-500 hover:text-sky-500">
                Careers
              </p>
            </Link>
            <Link href={"/blogs"}>
              <p className="text-base 2xl:text-lg font-semibold transition duration-500 hover:text-sky-500">
                Blogs
              </p>
            </Link>
            <Link href={"/contactUs"}>
              <p className="text-base 2xl:text-lg bg-[#2AABE1] font-semibold transition duration-500 hover:scale-105 text-white px-3 py-1 rounded-full">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </>
    </>
  );
}

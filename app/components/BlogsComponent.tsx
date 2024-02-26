"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function BlogsComponent(props: Props) {
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
          className="absolute right-[-250px] lg:right-[-100px] top-[100px] h-[15%] w-auto -z-10"
          style={{ rotate: "160deg" }}
        />
        <p className="text-3xl xl:text-5xl font-bold">News & Articles</p>
        <p className="font-regular text-lg text-[#797979] my-5">
          Stay tuned for more updates!
        </p>
        <div className="flex flex-col gap-8 xl:gap-12">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            <div className="w-full lg:w-[50%] text-white bg-[#020332] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]  text-black bg-[#f9f9f9] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            <div className="w-full lg:w-[50%]  text-black bg-[#f9f9f9] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]  text-black bg-[#f9f9f9] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            <div className="w-full lg:w-[50%]  text-black bg-[#f9f9f9] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
            <div className="w-full lg:w-[50%]  text-black bg-[#f9f9f9] rounded-xl py-8 xl:py-10 px-5 xl:px-8 flex flex-col gap-6 xl:gap-8">
              <div>
                <p className="text-sm">November 15, 2022</p>
              </div>
              <div>
                <p className="text-xl xl:text-2xl font-black">
                  10 Top tips for making automation less time consuming
                </p>
              </div>
              <div>
                <p className="text-base">
                  here we show an overview of our main topic. like what top 10
                  tips do in return of which is most easiest one, anything.
                </p>
              </div>
              <div>
                <p className="text-[#2AABE1]">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

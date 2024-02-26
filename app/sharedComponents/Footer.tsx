"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

interface FooterComponentInterface {}

export default function Footer(props: FooterComponentInterface) {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full bg-[#020332] h-[calc(80vh)] lg:h-[calc(40vh)] px-[5%] xl:px-[8%] font-roboto">
      <div className="w-full lg:w-[33%] flex justify-between items-center h-full lg:mr-4 mt-4 lg:mt-0">
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm">Home</p>
          <p className="text-white font-regular text-sm">Services</p>
          <p className="text-white font-regular text-sm">About Us</p>
          <p className="text-white font-regular text-sm">Careers</p>
          <p className="text-white font-regular text-sm">Contact Us</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold text-sm">Get in touch</p>
          <div>
            <p className="text-[#146C94] font-regular text-sm">Email</p>
            <p className="text-white font-regular text-sm">+92 51 8895778</p>
          </div>
          <div>
            <p className="text-[#146C94] font-regular text-sm">Phone</p>
            <p className="text-white font-regular text-sm">hr@gomarkho.com</p>
          </div>
          <div>
            <p className="text-[#146C94] font-regular text-sm">
              Business Hours:
            </p>
            <p className="text-white font-regular text-sm">
              Monday to Friday: 9am to 6pm.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[33%] flex justify-start items-center h-full relative">
        <Image
          src="/footerImage.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute -right-5 h-full w-auto hidden lg:flex lg:justify-start"
        />
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-[#146C94] font-regular text-sm">Address</p>
            <p className="text-white font-regular text-sm lg:w-[70%]">
              City Centre, Office No. 17, Second Floor, PakLand, I-8 Markaz
              Islamabad, 44000, Pakistan.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="border border-[#146C94] rounded-full p-2 flex justify-center items-center">
              <Image
                src="/linkedinBlue.webp"
                alt="Icon"
                height={1000}
                width={1000}
                className="h-7 w-auto"
              />
            </div>
            <div className="border border-[#146C94] rounded-full p-2 flex justify-center items-center">
              <Image
                src="/mailBlue.webp"
                alt="Icon"
                height={1000}
                width={1000}
                className="h-auto w-7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[33%] flex justify-start items-start lg:items-center relative h-full">
        <div className="flex flex-col gap-3">
          <p className="text-white font-semibold text-sm font-roboto">
            Have any Questions
          </p>
          <button className="text-base 2xl:text-lg border border-[#2AABE1] font-semibold transition duration-500 hover:scale-105 text-[#2AABE1] px-3 py-1 rounded-full font-roboto">
            Get in Touch
          </button>
        </div>
        <div className="absolute bottom-0 p-4 w-full flex justify-center lg:justify-end">
          <p className="text-white font-light text-xs lg:text-[10px] xl:text-xs">
            Copyright © 2024 GoMarkho. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

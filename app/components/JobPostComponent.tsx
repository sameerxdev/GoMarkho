"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";

interface Props {}

export default function JobPostComponent(props: Props) {
  const { register, handleSubmit, reset } = useForm();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isHeaderShow, setIsHeaderShow] = useState(false);
  let lastScrollTop = 0;

  const formRef = useRef<HTMLFormElement>(null);

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

  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  //   const templateParams = {
  //     fullName: fullName,
  //     email: email,
  //     phone: phone,
  //     coverLetter: coverLetter,
  //     file: file ? file.name : "No file selected",
  //   };

  //   emailjs
  //     .send(
  //       "service_cdv4l3k",
  //       "template_zjs0x6j",
  //       templateParams,
  //       "IsXKkS1NCYyD6Rhrk"
  //     )
  //     .then(
  //       () => {
  //         alert("Your email has been sent successfully.");
  //         if (formRef.current) {
  //           formRef.current.reset();
  //         }
  //         setFullName("");
  //         setEmail("");
  //         setPhone("");
  //         setCoverLetter("");
  //         setFile(null);
  //       },
  //       (error) => {
  //         alert("An error occurred while sending the email.");
  //       }
  //     );
  // };

  const handleSendEmail = async (data: any) => {
    console.log(data);
    try {
      console.log("Sending email");
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", response);

      if (response.ok) {
        console.log(data, "Email sent successfully");
        reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error: any) {
      console.error("Email sending error:", error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className="overflow-x-hidden font-jakarta">
      <Navbar isHeaderShow={isHeaderShow} activeTab={"jobPost"} />
      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] pt-32 pb-16 flex flex-col items-center justify-center">
        <Image
          src="/homeImage3.webp"
          alt="Image"
          height={1000}
          width={1000}
          className="absolute right-[-300px] lg:right-[-250px] top-[70px] h-[25%] w-auto -z-10"
          style={{ rotate: "20deg" }}
        />
        <p
          className="text-3xl xl:text-5xl font-bold text-center"
          data-aos="fade-down"
        >
          Quality Assurance Engineer
        </p>
        <p
          className="font-regular text-lg my-5 font-roboto"
          data-aos="fade-down"
        >
          Islamabad, Pakistan |{" "}
          <span className="text-[#2AABE1]">Full Time</span>
        </p>
        <button
          className="bg-[#2AABE1] rounded p-4 font-bold text-base xl:text-lg w-60 my-5 text-white"
          data-aos="fade-down"
        >
          Apply Now
        </button>
        <div
          className="my-8 w-full bg-[#F9F9F9] px-4 lg:px-8 py-8 lg:py-12 rounded-xl"
          data-aos="fade-up"
        >
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center my-2 lg:px-4">
            <p className="font-black text-xl lg:text-3xl">About the role</p>
            <p className="text-sm lg:text-base text-[#797979]">
              <span className="font-semibold font-roboto">Posted</span> : 25
              November, 2021
            </p>
          </div>
          <ul className="text-[#797979] list-disc space-y-3 my-2 px-4 py-5 font-roboto">
            <li>
              Review, analyse and evaluate product code according to system
              specifications.
            </li>
            <li>
              Create and execute detailed and well-structured test plans and
              test cases (manual or automated) and analyse results.
            </li>
            <li>Plan and coordinate testing activities.</li>
            <li>
              Create logs to identify, track and document testing phases and
              defects.
            </li>
            <li>
              Design, develop and execute automation scripts using open-source
              tools (Jira, Selenium, JMeter).
            </li>
            <li>Perform thorough regression testing when bugs are resolved.</li>
            <li>
              Develop and apply testing processes for new and existing products
              to meet client needs.
            </li>
            <li>
              Work with cross-functional teams to ensure quality throughout the
              software development lifecycle.
            </li>
          </ul>
          <p className="font-black text-xl lg:text-3xl px-4">Requirements</p>
          <ul className="text-[#797979] list-disc space-y-3 px-4 py-5 font-roboto">
            <li>
              BS/MS degree in Computer Science, Engineering, or a related field.
            </li>
            <li>
              Proven experience of 3 – 5 years as a quality assurance tester.
            </li>
            <li>
              Strong knowledge of software QA methodologies, tools, and
              processes.
            </li>
            <li>
              Experience in writing concise, and comprehensive test plans and
              test cases.
            </li>
            <li>
              Hands-on experience with both white box and black box testing.
            </li>
            <li>Perform thorough regression testing when bugs are resolved.</li>
            <li>
              Experience in GUI test automation by using Selenium Web Driver
              (Web application)
            </li>
          </ul>
          <p className="font-black text-xl lg:text-3xl my-2 px-4">
            Contact us!
          </p>
          <p className="text-[#797979] px-4 py-5 font-roboto">
            Reach out to discuss the opportunity & send your answers to:
          </p>
          <div className="px-4 py-5 text-[#797979]">
            <p className="font-bold">Aman Khan</p>
            <p className="font-roboto">hr@gomarkho.com</p>
            <p className="font-roboto">+342 343 34676</p>
          </div>
        </div>
      </div>

      <div className="w-[calc(100vw)] relative px-[5%] xl:px-[8%] py-[8%] flex flex-col items-center justify-center">
        <form
          ref={formRef}
          className="w-full shadow-2xl rounded-2xl px-5 lg:px-8 py-12 bg-[#020332] text-white"
          // onSubmit={(e) => sendEmail(e)}
          onSubmit={handleSubmit(handleSendEmail)}
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Full name *</p>
              <input
                type="text"
                {...register("fullName")}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full text-black"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Your email *</p>
              <input
                type="email"
                {...register("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full text-black"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mb-4 lg:mb-8">
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Resume *</p>
              <input
                type="file"
                // {...register("resume")}
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                placeholder="upload your resume"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full"
              />
            </div>
            <div className="w-full lg:w-[50%]">
              <p className="text-lg font-medium mb-2">Phone *</p>
              <input
                type="text"
                {...register("phone")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
                className="p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full text-black"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-lg font-medium mb-2">Cover Letter *</p>
            <textarea
              value={coverLetter}
              {...register("coverLetter")}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Tell about yourself a bit"
              className="h-60 p-3 outline-none border-2 border-[#f3f3f3] rounded-lg w-full text-black"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              disabled={
                fullName === "" ||
                email === "" ||
                phone === "" ||
                coverLetter === "" ||
                file === null
              }
              className="bg-[#2AABE1] rounded-full p-4 font-bold text-base xl:text-lg w-44 mt-5 xl:mt-8 text-white"
              style={{
                opacity:
                  fullName === "" ||
                  email === "" ||
                  phone === "" ||
                  coverLetter === "" ||
                  file === null
                    ? "0.5"
                    : "1",
                cursor:
                  fullName === "" ||
                  email === "" ||
                  phone === "" ||
                  coverLetter === "" ||
                  file === null
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Sumbit
            </button>
          </div>
        </form>
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

import Navbar from "@/components/Navbar";
import React from "react";
import { motion, useIsPresent } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import AnimatedTitle from "@/components/AnimatedText";

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
`;

const subTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  font-family: "Gilroy", sans-serif;
`;

const expTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
`;

const expPoints = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
`;

const expData = [
  {
    title: "Lead Frontend Developer",
    company: "Ishaare.com",
    url: "https://www.ishaare.com",
    date: "Jul 2023 - Jan 2024",
    desc: [
      "Optimized frontend performance by Image Optimization and Caching, resulting in a 20% reduction in Page load times and an improved overall user experience.",
      "Developed a feature to allow user to upload images from another device in realtime using Socket.IO."
    ],
  },
  {
    title: "Backend Developer",
    company: "Eveez Pvt. Ltd.",
    url: "https://www.eveez.in/",
    date: "May 2023 - Jul 2023",
    desc: [
      "Improved invoicing procedures by leveraging Zoho CRM automation, leading to heightened accuracy and efficiency and a 7% rise in engagement and conversions.",
      "Integrated AI analytics into the loyalty program, scrutinizing customer behaviors for targeted voucher Allocation and driving a 15% rise in retention over 7 months."
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Strall Pvt. Ltd.",
    url: "#",
    date: "Jun 2022 - Feb 2023",
    desc: [
      "Assisted the development team in bug fixing, testing, and maintaining full-stack e-commerce platform. ",
      "Managed the smooth integration of external services like Razorpay SDK, resulting in a significant 15% increase in sales performance."
    ],
  },
];

const About = () => {
  const isPresent = useIsPresent();
  return (
    <div className="">
      <Navbar activeProp={"About"} />
      <div className="w-full mt-20 px-[20rem]">
        <div className="w-full">
          <div className="w-full">
            <div className="flex">
              <div className="h-full mr-5">
                <Image
                  src="/profile.jpeg"
                  alt="about"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <AnimatedTitle text="Sameer Gupta" Title={Title} />
                <AnimatedTitle
                  text="Full-Stack Developer. Based in Mumbai, IN"
                  Title={subTitle}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full gilroy">
          {expData.map((exp, index) => {
            return (
              <div key={index} className="w-full mb-14">
                <div className="flex justify-between">
                  <AnimatedTitle
                    text={exp.title + ", " + exp.company}
                    Title={expTitle}
                  />
                  <AnimatedTitle text={exp.date} Title={expTitle} />
                </div>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="mt-3 ml-[13px]"
                >
                  {exp.desc.map((desc, index) => {
                    return (
                      <li key={index} className="opacity-65 mb-2">
                        {desc}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.75, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default About;

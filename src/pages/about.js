import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { motion, useIsPresent } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import AnimatedTitle from "@/components/AnimatedText";

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const subTitle = styled.h2`
  font-size: 1rem;
  font-weight: 300;
  font-family: "Gilroy", sans-serif;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const expTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const expPoints = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-family: "Gilroy", sans-serif;
`;

const About = () => {
  const isPresent = useIsPresent();
  const [expData, setExpData] = useState([]);

  const getExp = async () => {
    const res = await fetch("https://gist.githubusercontent.com/sameergupta4873/933ed865b8e33b6c983cdce43a7a565d/raw/da4063eecbd566f5d1fd27e935abdc896e3599f8/experience.json");
    const result = await res.json();
    console.log(result);
    setExpData(result)
  }

  useEffect(() => {
    getExp();
  }, []);

  return (
    <div className="min-w-[100vw]">
      <Navbar activeProp={"About"} />
      <div className="w-full mt-20 px-[20rem] max-md:px-[1.5rem] max-md:mt-10">
        <div className="w-full">
          <div className="w-full">
            <div className="flex">
              <div className="h-full mr-5">
                <Image
                  src="/profile.jpeg"
                  alt="about"
                  width={60}
                  height={60}
                  className="rounded-full object-cover max-md:w-[45px] max-md:h-[45px]"
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
                      <li key={index} className="opacity-65 mb-2 max-md:text-[0.75rem]">
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

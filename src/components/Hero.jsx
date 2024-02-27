import Image from "next/image";
import React from "react";
import AnimatedTitle from "./AnimatedText";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  font-family: "Gilroy", sans-serif;
`;

const Hero = () => {
  return (
    <div className="w-full h-[80vh] mt-[4rem] relative bg-[#070707]">
      <Image
        src="/hero1.png"
        alt="alt text"
        className="absolute bottom-0 left-0"
        width={500}
        height={500}
      />
      <Image
        src="/hero2.png"
        alt="alt text"
        className="absolute bottom-0 right-0"
        width={500}
        height={500}
      />
      <div className="absolute top-10 left-0 w-[100vw] flex justify-center">
        <div className="text-center w-[12.5vw]">
          <a href="#" className="go-down-btn" title="Scroll down">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="100px"
              height="100px"
              viewBox="0 0 100 100"
              enableBackground="new 0 0 100 100"
              xmlSpace="preserve"
            >
              <polygon fill="#FFFFFF" points="55.334,46 49.333,58 43.333,46" />
              <path
                id="textPath"
                fill="none"
                d="M89.322,50.197c0,22.09-17.91,40-40,40c-22.089,0-40-17.91-40-40 c0-22.089,17.911-40,40-40C71.412,10.197,89.322,28.108,89.322,50.197z"
              />
              <text className="text-white">
                <textPath className="text-white" xlinkHref="#textPath">
                  <tspan fill="#FFF" x="10">
                    MUMBAI,
                  </tspan>
                  <tspan fill="#FFF" x="47" dx="30">
                    INDIA
                  </tspan>
                  <tspan fill="#FFF" x="77" dx="45">
                    GMT(+5:30)
                  </tspan>
                  <tspan fill="#FFF" x="100" dx="100">
                    REMOTE
                  </tspan>
                </textPath>
              </text>
            </svg>
          </a>
        </div>
        <div className="text-center flex flex-col items-center w-[60vw] transition-all ease-in-out duration-300">
          <AnimatedTitle text="<Full-stack Developer>" Title={Title} />
          <AnimatedTitle text="<Freelancer>" Title={Title} />
          <AnimatedTitle text="<Sameer Gupta />" Title={Title} />
          <AnimatedTitle text="<Freelancer/>" Title={Title} />
          <AnimatedTitle text="<Full-stack Developer/>" Title={Title} />
          <button className="border border-[#323240] rounded-full flex justify-between min-h-[4rem] mt-10 transition-all ease-in-out duration-300 group">
            <h2 className="gilroy text-[1rem] py-[1.15rem] pl-[2.5rem] pr-[3.5rem] opacity-65">
              Explore
            </h2>
            <div className="rounded-full border border-[#323240] h-[4rem] w-[4rem] flex justify-center items-center">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-0 group-hover:rotate-45 transition-all ease-in-out duration-300"
              >
                <path
                  d="M0.880859 15.6191L16.119 0.380981M16.119 0.380981H5.72934M16.119 0.380981V10.078"
                  stroke="currentColor"
                //   style="stroke:white;stroke-opacity:1;"
                  stroke-width="0.761905"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="text-center w-[12.5vw]">
          {/* <AnimatedTitle text="<Full-stack Developer>" Title={Title} /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

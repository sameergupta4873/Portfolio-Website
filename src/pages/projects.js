"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { motion, useIsPresent } from "framer-motion";

const data = [
  {
    title: "Ishaare.com",
    desc: "A platform for South Asian matchmaking",
    cover: "/projects/ishaare/cover.png",
    type: "web",
  },
  {
    title: "OTT Platform",
    desc: "Online streaming platform for movies and web series",
    cover: "/projects/ott/cover.png",
    type: "web",
  },
  {
    title: "Solana Faucet",
    desc: "DApp on Solana Blockchain to airdrop crypto",
    cover: "/projects/faucet/cover.png",
    type: "web",
  },
  {
    title: "No Code Deep Learning",
    desc: "A platform to create deep learning models without code",
    cover: "/projects/nocode/cover.png",
    type: "web",
  },
  {
    title: "NFT Marketplace",
    desc: "frontend for a marketplace to buy and sell NFTs",
    cover: "/projects/nft/cover.png",
    type: "web",
  },
  {
    title: "Perceptron",
    desc: "A platform to analyze sentiment of a social media post",
    cover: "/projects/perceptron/cover.png",
    type: "web",
  },
];

const Projects = () => {
  const [projectId, setProjectId] = useState(-1);

  const isPresent = useIsPresent();
  const handleProjectSelect = (index) => {
    if (index === projectId) {
      setProjectId(-1);
    } else {
      setProjectId(index);
    }
  };
  return (
    <div>
      <Navbar activeProp={"Projects"} />
      {projectId !== -1 && (
        <button
          onClick={() => handleProjectSelect(projectId)}
          className="flex justify-end z-10 fixed top-[15vh] left-[50vw] translate-x-[-50%] bg-[#232323] p-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <div className="w-full mt-20 h-full max-md:px-[1.75rem] max-md:mt-[5rem]">
        <div className="w-full h-full flex flex-wrap justify-center gap-x-20 max-md:flex-col max-md:flex-nowrap">
          {data.map((project, index) => {
            return (
              <button
                key={index}
                disabled={projectId !== -1}
                onClick={() => handleProjectSelect(index)}
              >
                <CardContainer
                  enable={projectId === -1}
                  key={index}
                  className={
                    index === projectId
                      ? `inter-var flex flex-col items-center w-[98vw]`
                      : `inter-var mt-[-3.5rem] max-md:mt-[-7rem]`
                  }
                >
                  <CardBody
                    className={`bg-white relative group/card border-black/[0.1] rounded-xl border max-md:p-4 transition-all duration-1000 ease-in-out ${
                      index === projectId
                        ? "w-[90rem] h-auto pt-6 pl-6"
                        : projectId === -1
                        ? "w-auto sm:w-[30rem] h-auto p-6"
                        : "hidden"
                    }`}
                  >
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-black max-md:text-[1rem]"
                    >
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 max-md:text-xs max-md:mt-1"
                    >
                      {project.desc}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      className={`w-full relative mt-4 flex ${
                        projectId === -1 ? "justify-center" : "space-between"
                      }`}
                    >
                      {project.type === "web" ? (
                        projectId === -1 ? (
                          <Image
                            src={project.cover}
                            height="1000"
                            width="1000"
                            className="h-[16rem] w-auto object-fill rounded-xl group-hover/card:shadow-xl max-md:h-[10.5rem] max-md:rounded-md shadow-2xl"
                            alt="thumbnail"
                          />
                        ) : (
                          <div className="flex flex-row justify-center items-center scale-[80%] ml-[-10rem] mt-[-3rem] w-[165rem]">
                            <div className="absolute h-[88%] w-[71%] bg-black rounded-t-xl py-4">
                              <Image
                                src={project.cover}
                                height="500"
                                width="1000"
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <Image
                              src={"/mac.png"}
                              height="1000"
                              width="1000"
                              className="scale-[89%] my-[-4rem] h-auto w-full object-cover rounded-xl max-md:h-[10.5rem] max-md:rounded-md"
                              alt="thumbnail"
                            />
                          </div>
                        )
                      ) : (
                        <Image
                          src={project.cover}
                          height="500"
                          width="250"
                          className="h-60 max-w-[7rem] object-cover rounded-2xl group-hover/card:shadow-xl max-md:mx-[6rem]"
                          alt="thumbnail"
                        />
                      )}
                      {projectId !== -1 && (
                        <div className="h-[72vh] w-full ml-[-10rem] p-6 text-black overflow-y-auto">
                          <p class="mb-4">
                            I am pleased to present my recent project involving
                            the development of an OTT (Over-the-Top) platform,
                            which I completed on Upwork. This project aimed to
                            create a comprehensive and user-friendly streaming
                            platform to deliver digital content directly to
                            consumers.
                          </p>

                          <h2 class="text-2xl font-semibold mt-6">My Role</h2>
                          <p class="mb-4">
                            As the project owner, my role was to oversee the
                            end-to-end development process, from
                            conceptualization to deployment. Leveraging my
                            expertise in web development and streaming
                            technologies, I successfully designed and
                            implemented a cutting-edge OTT platform that
                            provided an immersive and seamless streaming
                            experience.
                          </p>

                          <h2 class="text-2xl font-semibold mt-6">
                            Key Features
                          </h2>
                          <ul class="list-disc ml-6 space-y-2">
                            <li>
                              <strong>Content Management:</strong> Implemented a
                              robust CMS to organize and manage a vast library
                              of videos, audios, and digital content
                              efficiently.
                            </li>
                            <li>
                              <strong>
                                User Registration and Authentication:
                              </strong>{" "}
                              Integrated a secure system for users to create
                              accounts, login, and manage profiles.
                            </li>
                            <li>
                              <strong>
                                Content Discovery and Recommendation:
                              </strong>{" "}
                              Incorporated advanced algorithms to personalize
                              recommendations based on user preferences and
                              viewing history.
                            </li>
                            <li>
                              <strong>Streaming Infrastructure:</strong>{" "}
                              Developed a scalable and reliable streaming
                              infrastructure for smooth playback across multiple
                              devices.
                            </li>
                            <li>
                              <strong>Monetization Options:</strong> Integrated
                              subscription-based models, pay-per-view, and
                              advertising for flexible revenue generation.
                            </li>
                          </ul>

                          <h2 class="text-2xl font-semibold mt-6">
                            Project Execution
                          </h2>
                          <p class="mb-4">
                            Throughout the project, I maintained open
                            communication with the client, regularly providing
                            updates, incorporating feedback, and addressing any
                            concerns. I followed agile methodologies to ensure
                            timely delivery and adaptability to evolving
                            requirements.
                          </p>

                          <h2 class="text-2xl font-semibold mt-6">
                            Conclusion
                          </h2>
                          <p class="mb-4">
                            The completed OTT platform has empowered the client
                            to reach a wider audience, monetize their content
                            effectively, and establish a strong brand presence
                            in the digital streaming industry.
                          </p>
                        </div>
                      )}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </button>
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

export default Projects;

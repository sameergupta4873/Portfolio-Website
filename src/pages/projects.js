"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { motion, useIsPresent } from "framer-motion";
import { MarkdownViewer } from 'react-github-markdown';

const data = [
  {
    title: "Ishaare.com",
    desc: "A platform for South Asian matchmaking",
    cover: "/projects/ishaare/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/Portfolio-Website/refs/heads/master/README.md",
  },
  {
    title: "OTT Platform",
    desc: "Online streaming platform for movies and web series",
    cover: "/projects/ott/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/ott-frontend/refs/heads/master/README.md",
  },
  {
    title: "Solana Faucet",
    desc: "DApp on Solana Blockchain to airdrop crypto",
    cover: "/projects/faucet/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/Solana-Faucet/refs/heads/main/README.md",
  },
  {
    title: "No Code Deep Learning",
    desc: "A platform to create deep learning models without code",
    cover: "/projects/nocode/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/no-code-DL/refs/heads/master/Readme.md",
  },
  {
    title: "NFT Marketplace",
    desc: "frontend for a marketplace to buy and sell NFTs",
    cover: "/projects/nft/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/NP_NFT/refs/heads/master/README.md",
  },
  {
    title: "Perceptron",
    desc: "A platform to analyze sentiment of a social media post",
    cover: "/projects/perceptron/cover.png",
    type: "web",
    readme:
      "https://raw.githubusercontent.com/sameergupta4873/perceptron/refs/heads/main/README.md?token=GHSAT0AAAAAAC67V7T6TVI6W45URI3NOLKMZ5QLJ3Q",
  },
];

const Projects = () => {
  const [projectId, setProjectId] = useState(-1);
  const [readme, setReadme] = useState("");

  const isPresent = useIsPresent();
  const handleProjectSelect = (index) => {
    if (index === projectId) {
      setProjectId(-1);
    } else {
      setProjectId(index);
    }
  };

  const getReadme = async (projectId) => {
    const res = await fetch(data?.[projectId]?.readme);
    const result = await res.text();
    console.log(result);
    setReadme(result);
  };

  useEffect(() => {
    if (projectId !== -1) {
      getReadme(projectId);
    }
  }, [projectId]);

  return (
    <div className="relative">
      <Navbar activeProp={"Projects"} />
      {projectId !== -1 && (
        <button
          onClick={() => handleProjectSelect(projectId)}
          className="flex justify-end z-10 fixed top-[2rem] right-[0vw] translate-x-[-50%] bg-[#232323] p-4 rounded-full scale-90"
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
                    className={`bg-white group/card border-black/[0.1] rounded-xl border max-md:p-4 transition-all duration-1000 ease-in-out ${
                      index === projectId
                        ? `w-[99vw] h-[99vh] absolute ${
                            index === 0 ? "top-[-15rem]" : "top-[-25rem]"
                          } pt-6 pl-6`
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
                      className={`w-full mt-4 flex ${
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
                            <div className="absolute h-[80%] w-[71%] bg-black rounded-t-xl py-4">
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
                          width="500"
                          className="h-[17rem] max-w-[7rem] object-cover rounded-2xl group-hover/card:shadow-xl max-md:mx-[6rem]"
                          alt="thumbnail"
                        />
                      )}
                      {projectId !== -1 && (
                        <div className="h-[85vh] w-full ml-[-10rem] p-6 text-black overflow-y-auto text-left">
                           <MarkdownViewer value={readme}/>
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

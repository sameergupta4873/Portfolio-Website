"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { motion, useIsPresent } from "framer-motion";

const data = [
  {
    title: "Ishaare.com",
    desc: "Landing page for a South Asian matchmaking platform",
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
    title: "NFC Buisness Card App",
    desc: "A digital business card app with NFC capabilities",
    cover: "/projects/nfc/cover.png",
    type: "app",
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
  }
];

const Projects = () => {
    const isPresent = useIsPresent();
  return (
    <div>
      <Navbar activeProp={"Projects"} />
      <div className="w-full mt-20 px-[17rem] h-[100vh]">
        <div className="w-full h-full flex flex-wrap justify-between">
          {data.map((project, index) => {
            return (
              <CardContainer key={index} className="inter-var mt-[-3.5rem]">
                <CardBody className="bg-white relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-black"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2"
                  >
                    {project.desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                    {
                        project.type === "web" ? (
                            <Image
                            src={project.cover}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        ) : (
                            <Image
                            src={project.cover}
                            height="500"
                            width="250"
                            className="h-60 max-w-[7rem] object-cover rounded-2xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                            />
                        )
                    }
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      View Project
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
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

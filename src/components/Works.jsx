import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { FcLink } from "react-icons/fc";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <FcLink />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const technologies = [
    { name: "React", color: "pink-text-gradient" },
    { name: "JavaScript", color: "green-text-gradient" },
    { name: "Canvas", color: "blue-text-gradient" },
    { name: "ThreeJs", color: "pink-text-gradient" },
    { name: "3D Model Rendering", color: "green-text-gradient" },
    { name: "Tailwind CSS", color: "blue-text-gradient" },
    { name: "Framer Motion", color: "pink-text-gradient" },
    { name: "AOS ", color: "green-text-gradient" },
    { name: "GSAP ", color: "blue-text-gradient" },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>



      <div className="w-full flex justify-center mt-12">
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl w-[400px] md:w-[650px] lg:w-[1000px]"
          >
            <div className="relative w-full flex justify-center">
              <ReactVideoPlayer
                width="950px"
                url="/video/Empyryal.webm"
                type="video/webm"
                poster="/video/Empyryal.webm"
              />
            </div>

            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="text-white font-bold text-[24px]">
                  Empyryal Exchange
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  The UI of Empyreal Exchange is dynamic and animation-rich, featuring 3D models and interactive elements. It utilizes advanced web technologies including React, JavaScript, and ThreeJs for rendering 3D models on a canvas. The site also employs Tailwind CSS for styling, Framer Motion for smooth animations, AOS (Animate On Scroll) for scroll-triggered animations, and GSAP (GreenSock Animation Platform) for robust, high-performance animations. The result is a visually engaging and interactive user experience, making the app both functional and aesthetically pleasing.
                </p>
              </div>
              <div className="flex justify-end m-3 card-img_hover">
                <div
                  onClick={() =>
                    window.open(
                      "https://empyreal-exchange.vercel.app/",
                      "_blank"
                    )
                  }
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <FcLink />
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((tag) => (
                <p
                  key={tag.name}
                  className={`text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </div>

      <div className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");

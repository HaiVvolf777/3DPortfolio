import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { github } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const formRef = useRef();

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-col gap-y-20 items-center mt-20 h-full">
          <a
            href="https://www.linkedin.com/in/Haider---Ali/"
            target="_blank"
          >
            <BsLinkedin size={100} className="text-blue-500" />
          </a>

          <a href="mailTo:haiwolf777@gmail.com">
            <SiGmail size={100} className="text-red-500" />
          </a>

          <a href="https://github.com/HaiVvolf777">
          <BsGithub size={100} />
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

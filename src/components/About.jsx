import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Cards = ({ index, title, icon, link }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col group cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <img src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center group-hover:underline underline-offset-8">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[34px] break-keep"
      >
        node js, socket io, canvas 를 이용한 실시간 데이터 시각화 프로젝트
        경력이 있으며 java&spring 기반의 교육과정과 React.js 중심의 교육과정을
        수료했습니다. 새롭고 다양한 기술에도 두려움없이 함께 배우고 성장하는
        개발자로서 함께하고 싶습니다. 자세한 내용은 하단 내용과 링크 등을 통해
        확인해주세요. 감사합니다
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-20 ">
        {services.map((service, index) => (
          <Cards key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ ex }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={ex.date}
    iconStyle={{ background: ex.iconBg }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ex.icon}
          alt={ex.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]">{ex.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {ex.company_name}
      </p>
    </div>
    <ul className="mt-5 ml-5 space-y-2 list-disc">
      {ex.points.map((point, id) => (
        <li
          key={`experience-point-${id}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {experiences.map((ex, id) => (
            <ExperienceCard key={id} ex={ex} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");

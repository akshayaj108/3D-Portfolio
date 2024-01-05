import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Skills</p>
        <p className={`${styles.sectionHeadText} text-center mb-10`}>
          Technologies
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <div className="w-28 h-28 flex flex-col" key={tech.name}>
            {/* icon={tech.icon} */}
            <img src={tech.icon} alt="Loading failed" />
            <p className="text-center mt-1 font-bold">{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");

import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { LoopRepeat } from "three";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* below code for design arrow */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* below div for hero heading */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#ff5823]">Akshay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2  text-white-100`}>
            I build scalable, component-based user  <br className="sm:block hidden" />
            interfaces and robust server-side web applications.
          </p>
          <a href="#about">
            <button className=" bg-[#ff5823] hover:bg-white hover:text-black hover:transition-shadow text-sm font-semibold mt-2 text-white-100 py-2 px-4 rounded-lg">
              About me
            </button>
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-5">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: LoopRepeat,
              }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

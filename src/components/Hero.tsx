import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <div
      id="home"
      className=" text-white py-24 pt-28 lg:w-[80%] px-4 md:px-12 lg:mx-auto"
    >
      <div className=" w-full relative">
        <div className="py-10">
          <p className=" text-main-text-color text-xs md:text-sm">
            &gt; whoami
          </p>
          <div>
            <TypeAnimation
              sequence={[
                "creative_developer.exe",
                2000,
                "fullstack_engineer.sh",
                2000,
                "ai_architect.py",
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              style={{
                display: "inline-block",
                color: "#F5008B",
              }}
              deletionSpeed={70}
              className="text-xs md:text-sm"
            />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-start gap-5">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-mono font-black leading-tight tracking-tighter">
            Crafting <span className="text-gradient glitch">digital</span>{" "}
            <br />
            experiences <br />
            that <span className=" text-crimson-main-text">defy</span>{" "}
            expectations.
          </h1>
          <p className=" text-[#94A3B8] text-sm md:text-[15px] lg:text-[18px] max-w-xl leading-8">
            Full-stack developer specializing in AI-powered applications, modern
            web experiences, and scalable architecture.
          </p>
          <div className=" flex flex-col w-full md:max-w-fit items-center sm:flex-row justify-between gap-4 md:gap-8 text-[14px]">
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              type="button"
              className=" bg-main-text-color cursor-pointer text-main-background neon-glow px-8 py-2 rounded-xl"
            >
              View Work
            </motion.button>
            <button
              type="button"
              className=" border border-main-text-color/30 px-8 py-2 rounded-xl hover:bg-main-text-color/10 transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className=" absolute left-145 bottom-2 flex flex-col-reverse text-xs items-center gap-2"
        >
          <Zap className=" text-main-text-color"></Zap>
          <p className="text-[#94A3B8]">Scroll to explore</p>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute right-0 bottom-2 hidden md:block"
        >
          <div className="code-block text-xs opacity-70 hover:opacity-100 transition-opacity">
            <div>{"// build something great"}</div>
            <div className=" text-crimson-main-text">
              const impact = await createMagic()
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

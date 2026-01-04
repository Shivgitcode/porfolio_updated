import { motion, useScroll } from "motion/react";
export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="absolute h-1 bg-linear-to-r from-main-text-color to-crimson-main-text w-full"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: "#ff0088",
      }}
      transition={{ duration: 1 }}
    >
      {" "}
    </motion.div>
  );
}

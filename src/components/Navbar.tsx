import { motion } from "motion/react";
import { navItems } from "@/utils/utils";
import { useState } from "react";
import ScrollBar from "./ScrollBar";

export default function Navbar() {
  const [selectedTab, setSelectedTab] = useState(navItems[0].tab);
  console.log(selectedTab);
  return (
    <motion.div className="w-full fixed top-0 z-50 rounded-sm">
      <div className="py-4 w-full flex justify-between items-center backdrop-blur-xl bg-main-background/50">
        <motion.div
          className="text-white pl-4 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <span className=" text-xl">&lt;</span>
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="uppercase"
          >
            shiv
          </motion.span>
          <span className="text-sm">.</span>
          <motion.span
            animate={{ color: ["#00ffff", "#ff006e", "#00ffff"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            DEV
          </motion.span>
          <span>/&gt;</span>
        </motion.div>
        <ul className="flex justify-end items-center gap-10 pr-6">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              className="relative text-gray-main-text text-md"
              whileHover={{ color: "#00ffff" }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedTab(item.tab)}
            >
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
      <ScrollBar></ScrollBar>
    </motion.div>
  );
}

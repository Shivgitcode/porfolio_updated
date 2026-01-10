import { motion } from "motion/react";
import { navItems } from "@/utils/utils";
import { useState } from "react";
import ScrollBar from "./ScrollBar";
import { AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuView, setMenuView] = useState(false);
  return (
    <>
      <motion.div className="w-full fixed top-0 z-50 rounded-sm">
        <div className="py-4  w-full flex justify-between items-center backdrop-blur-xl bg-main-background/50">
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
          <ul className="hidden sm:flex justify-end items-center gap-10 pr-6 ">
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                className="relative text-gray-main-text text-md"
                whileHover={{ color: "#00ffff" }}
                transition={{ duration: 0.3 }}
              >
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
          <button
            type="button"
            className="md:hidden p-2 text-main-text-color"
            onClick={() => setMenuView(!menuView)}
          >
            {menuView ? <X size={30}></X> : <Menu size={30}></Menu>}
          </button>
        </div>
        <ScrollBar></ScrollBar>
      </motion.div>
      <AnimatePresence>
        {menuView && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-mono font-bold text-main-text-color hover:text-crimson-main-text transition-colors"
                  onClick={() => setMenuView(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

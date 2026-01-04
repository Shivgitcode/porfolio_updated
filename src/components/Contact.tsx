import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className=" py-24 w-full" id="contact">
      <div className=" w-[60%] mx-auto">
        <div className=" mb-12 text-white text-center">
          <h1 className="font-bold text-4xl mb-5">
            <span className="mr-5 text-main-text-color">&gt;</span>Let's Build
            Something
          </h1>
          <p className=" text-gray-main-text text-lg">
            Have a project in mind? Looking for a technical partner? I'd love to
            collaborate.
          </p>
        </div>
        <Card className="text-white mx-auto text-left glass-card max-w-md p-8 border-main-text-color/20 border">
          <form className="space-y-4" action="">
            <div className="space-y-2">
              <label
                htmlFor=""
                className="text-sm font-mono font-semibold text-main-text-color"
              >
                name
              </label>
              <Input
                placeholder="John Doe"
                className="bg-background/50 border-main-text-color/20 font-mono"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor=""
                className="text-sm font-mono font-semibold text-main-text-color"
              >
                email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="bg-background/50 border-main-text-color/20 font-mono"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor=""
                className="text-sm font-mono font-semibold text-main-text-color"
              >
                message
              </label>
              <Textarea
                placeholder="Tell me about your project..."
                className="bg-background/50 border-main-text-color/20 min-h-30 font-mono"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-main-text-color hover:bg-main-text-color/90 text-background font-semibold"
            >
              message
            </Button>
          </form>
        </Card>
        <div className="mt-16 flex justify-center gap-8">
          <motion.a
            href="#"
            className="p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Github className="w-6 h-6 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className="p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Twitter className="w-6 h-6 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className="p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Linkedin className="w-6 h-6 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className="p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Mail className="w-6 h-6 text-main-text-color" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

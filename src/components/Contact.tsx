import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { api } from "@/utils/axios";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");
  const sendMail = async (e: FormEvent, body: string) => {
    e.preventDefault();
    const response = await api.post("/api/send", { body });
    if (response.status === 200) {
      const res = await response.data;
      console.log(res);
    } else {
      const res = await response.data;
      console.log(res);
    }
  };

  const watchMessage = (input: FormEvent) => {
    const val = input.target as HTMLInputElement;
    setMessage(val.value);
  };

  return (
    <div className=" py-16 md:py-24 w-full" id="contact">
      <div className=" px-4 md:w-[60%] md:mx-auto">
        <div className=" mb-12 text-white text-center">
          <h1 className="font-bold text-3xl md:text-4xl mb-4 md:mb-5">
            <span className="mr-5 text-main-text-color">&gt;</span>Let's Build
            Something
          </h1>
          <p className=" text-gray-main-text text-sm md:text-base">
            Have a project in mind? Looking for a technical partner? I'd love to
            collaborate.
          </p>
        </div>
        <Card className="text-white mx-auto text-left glass-card max-w-md p-8 border-main-text-color/20 border">
          <form
            className="flex flex-col gap-6 md:gap-8"
            onSubmit={(e) => sendMail(e, message)}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xs md:text-sm font-mono font-semibold text-main-text-color"
              >
                name
              </label>
              <Input
                placeholder="John Doe"
                className="bg-background/50 border-main-text-color/20 font-mono"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-sm md:text-sm font-mono font-semibold text-main-text-color"
              >
                email
              </label>
              <Input
                type="email"
                placeholder="john@example.com"
                className="bg-background/50 border-main-text-color/20 font-mono"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-xs md:text-sm font-mono font-semibold text-main-text-color"
              >
                message
              </label>
              <Textarea
                placeholder="Tell me about your project..."
                className="bg-background/50 border-main-text-color/20 min-h-30 font-mono"
                value={message}
                onChange={(e) => watchMessage(e)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-main-text-color hover:bg-main-text-color/90 text-[#120C1A] font-semibold"
            >
              message
            </Button>
          </form>
        </Card>
        <div className="mt-12 md:mt-16 flex justify-center gap-4 md:gap-8">
          <motion.a
            href="#"
            className="p-2.5 md:p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className="p-2.5 md:p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Twitter className="md:w-6 md:h-6 w-5 h-5 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className=" p-2.5 md:p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Linkedin className="md:w-6 md:h-6 h-5 w-5 text-main-text-color" />
          </motion.a>
          <motion.a
            href="#"
            className=" p-2.5 md:p-3 rounded-lg bg-main-text-color/10 border border-main-text-color/20 hover:bg-main-text-color/20 hover:text-crimson-main-text transition-all"
            whileHover={{
              scale: 1.2,
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
            }}
          >
            <Mail className="md:w-6 md:h-6 w-5 h-5 text-main-text-color" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

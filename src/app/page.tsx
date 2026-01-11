"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MorphingBlob from "@/components/MorphBlob";
import Navbar from "@/components/Navbar";
import SkillMatrix from "@/components/SkillMatrix";
import StarField from "@/components/Starfields";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-main-text-color/30 main-container">
      <StarField></StarField>
      <MorphingBlob></MorphingBlob>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeaturedProject></FeaturedProject>
      <Experience></Experience>
      <SkillMatrix></SkillMatrix>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

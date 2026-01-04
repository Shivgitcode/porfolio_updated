"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
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
      <Education></Education>
      <SkillMatrix></SkillMatrix>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

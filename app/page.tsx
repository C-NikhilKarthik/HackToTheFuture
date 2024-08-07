import About from "@/components/About";
import CarouselIndex from "@/components/Carousel";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import React from "react";

export default function Home() {
  return (
    <main className="w-full relative flex overflow-x-hidden flex-col items-center">
      <Navbar />
      <Landing />
      <About />
      <CarouselIndex />
      <Timeline />
      <Footer />
    </main>
  );
}

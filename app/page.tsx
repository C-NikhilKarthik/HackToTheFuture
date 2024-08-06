import About from "@/components/About";
import CarouselIndex from "@/components/Carousel";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-full z-[5] flex flex-col items-center">
        <Navbar />
        <Landing />
        <About />
        <CarouselIndex />
      </div>
      <Footer />
    </main>
  );
}

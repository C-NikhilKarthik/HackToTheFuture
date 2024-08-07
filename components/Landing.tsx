import Image from "next/image";
import React from "react";
import stars from "@/public/Stars Animate.svg";

export default function Landing() {
  return (
    <section className="h-[100dvh] relative overflow-hidden bg-[url('/Main.png')] bg-right bg-cover font-roboto w-full pt-[180px] flex">
      <Image
        src={stars}
        alt={""}
        className="absolute w-full h-full top-0 left-0 object-cover object-center animate-spin z-[2]"
      />
      <div className="absolute h-full w-full top-0 bg-black/20 z-[1]"></div>
      <div className="pl-[40px] z-[3] md:pl-20">
        <div className="text-[5rem] md:text-[11rem] font-anton uppercase leading-[1] tracking-[0.01em]">
          hack 2
        </div>
        <div className="text-[5rem] md:text-[11rem] font-anton uppercase leading-[1] tracking-[0.01em]">
          {/* the{" "} */}
          <span className="outlined-text transition-all duration-500">
            future
          </span>
        </div>
        <div className="mt-20 flex flex-col sm:flex-row gap-8">
          <button className="bg-[#3770ff] px-8 uppercase h-12 gap-2 flex items-center justify-center">
            <Image
              src={"/Devfolio.png"}
              height={20}
              width={20}
              alt={"Devfolio logo"}
              sizes="100%"
            />
            Register
          </button>
          <button className="bg-black px-8 uppercase border border-slate-600 h-12 flex items-center justify-center">
            Brochure
          </button>
        </div>
      </div>
    </section>
  );
}

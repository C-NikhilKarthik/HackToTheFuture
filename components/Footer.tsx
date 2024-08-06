"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import CollegeLogo from "@/public/college-logo.png";

export default function Footer() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  return (
    <motion.div
      style={{ y }}
      ref={container}
      className="relative bg-[#000000] z-[2] text-white w-full flex flex-col items-center justify-center"
    >
      <div className="pt-[200px] px-16 py-10 w-full max-w-[1800px] bg-[#000000]">
        <div className="">
          <Image
            className="max-w-[80vw] aspect-[445/119]"
            alt="Logo"
            src={CollegeLogo}
            height={120}
          />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-xl">Explore</div>
              <div className="">Rule Book</div>
            </div>
            <div className="">
              <div className="text-xl">Contact</div>
              <div className="">hacktofuture@iiitdwd.ac.in</div>
              <div>+91 9391716215</div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="max-w-xl">
              <div className="text-lg">Address</div>
              <div className="">
                Indian Institute of Information Technology (IIIT) Dharwad,
                Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
                Yellapur, Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

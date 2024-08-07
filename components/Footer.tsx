"use client";
import Image from "next/image";
import CollegeLogo from "@/public/college-logo.png";

export default function Footer() {
  return (
    <div className="px-8 sm:px-16 py-10 w-full bg-[#000000]">
      <div className="">
        <Image
          className="max-w-[24rem] w-full aspect-[445/119]"
          alt="Logo"
          src={CollegeLogo}
          height={120}
        />
      </div>
      <div className="flex mt-4 flex-col sm:flex-row gap-8 sm:gap-0 w-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="">
            <div className="text-xl text-slate-400 mb-3">Explore</div>
            <div className="text-sm">Rule Book</div>
          </div>
          <div className="">
            <div className="text-xl text-slate-400 mb-3">Contact</div>
            <div className="text-sm mb-1">hacktofuture@iiitdwd.ac.in</div>
            <div className="text-sm">+91 9391716215</div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="max-w-xl">
            <div className="text-lg text-slate-400 mb-3">Address</div>
            <div className="text-sm">
              Indian Institute of Information Technology (IIIT) Dharwad,
              Ittigatti Rd, near Sattur Colony, Karnataka 580009 92VG+24 Joga
              Yellapur, Karnataka
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

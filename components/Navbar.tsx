"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [option, setOption] = useState(0);
  return (
    <nav className="fixed w-fit p-4 px-2 top-10 z-10 bg-black/40 backdrop-blur text-center items-center rounded-full flex">
      <div
        style={{ transform: `translateX(${100 * option}%)` }}
        className="w-28 bg-[#639cb6] z-[-1] rounded-full absolute h-10"
      ></div>
      <div
        className={`w-28 ${option === 0 && "font-semibold"}`}
        onClick={() => setOption(0)}
      >
        Home
      </div>
      <div
        className={`w-28 ${option === 1 && "font-semibold"}`}
        onClick={() => setOption(1)}
      >
        About
      </div>
      <div
        className={`w-28 ${option === 2 && "font-semibold"}`}
        onClick={() => setOption(2)}
      >
        Timeline
      </div>
      <div
        className={`w-28 ${option === 3 && "font-semibold"}`}
        onClick={() => setOption(3)}
      >
        Sponsors
      </div>
      <div
        className={`w-28 ${option === 4 && "font-semibold"}`}
        onClick={() => setOption(4)}
      >
        Team
      </div>
    </nav>
  );
}

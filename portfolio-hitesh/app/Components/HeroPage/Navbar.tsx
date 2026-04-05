"use client";

import Image from "next/image";
import { GitHubStars } from "@/components/github-stars";
import DP from "@/public/L-DAY.svg";
import Link from "next/link";
import { useState } from "react";
import { MoonIcon, Sun } from "lucide-react";
const Navbar = () => {
  const [isDay, setisDay] = useState<boolean>(false);
  return (
    <div className="flex flex-1 w-full  flex-col items-center  border-t border-b  border-neutral-100 dark:bg-black sm:items-start">
      {/* Container */}
      <div className="mx-auto relative w-xl border-neutral-200    border-r border-l">
        {" "}
        <div className="w-2 h-2 bg-white border-neutral-200 -top-1 -left-1 absolute border"></div>
        <div className="w-2 h-2 bg-white border-neutral-200 -top-1 -right-1 absolute border"></div>
        <div className="flex realtive items-center w-full  px-3 justify-between">
          {" "}
          <Image
            src={DP}
            alt="Dp"
            height={40}
            className="rounded-full "
            width={40}
          />
          {/* Links */}
          <div className="font-mono flex gap-2 items-center text-neutral-600  text-[12px]">
            <Link
              className="hover:text-neutral-800 text-neutral-500 transtion  hover:underline underline-offset-3"
              href={"/components-page"}
            >
              {" "}
              <p>Components</p>
            </Link>
            <Link
              className="hover:text-neutral-800 text-neutral-500 transtion hover:underline underline-offset-3 "
              href={"/blogs-page"}
            >
              {" "}
              <p>Blogs</p>
            </Link>
            <GitHubStars repo="senorhitesh/hiteshsuthar.portfolio" />|
            <button
              onClick={() => {
                setisDay(!isDay);
              }}
            >
              {isDay ? <Sun size={14} /> : <MoonIcon size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MdArrowOutward, MdDarkMode } from "react-icons/md";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import image1 from "../../assets/header-bg-color.png";
import Contextfirst from "../Theme";

interface header {
  title: string;
  href: string;
}

const Header: header[] = [
  { title: "Home", href: "#home" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Achievements", href: "#achievements" },
  { title: "Education", href: "#education" },
];

const Navbar = () => {
  const { mode, Setmode } = useContext(Contextfirst)!;
  const [side, Setside] = useState<boolean>(false);
  const [scroll, Setscroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 10) {
        Setscroll(true);
      } else {
        Setscroll(false);
      }
    });
  }, []);

  return (
    <nav>
      {mode == "dark" ? (
        <div className="h-[10vh] bg-[#111210]"></div>
      ) : (
        <Image
          src={image1}
          alt="bg-color"
          className="fixed -z-20 h-[40vh] -translate-y-[250px]"
        />
      )}
      <div
        className={`fixed w-full z-50 top-0 ${
          scroll && "bg-opacity-40"
          } left-0 h-[10vh] flex justify-between md:justify-around items-center border-b border-black/10 bg-[#f4f1ea]/90 py-4 backdrop-blur-lg dark:border-white/10 dark:bg-[#111210]/90 z-60`}
      >
       <div className="relative w-[25%] text-center text-3xl font-medium">
  Dev
  <span className="absolute bottom-0 text-5xl text-[#d9ff52]">.</span>
</div>

        <ul
          className={`hidden ${
            mode === "dark" ? "text-white bg-[#20221d]" : "text-black bg-white/80"
          } sm:flex justify-between items-center shadow-md rounded-3xl dark:shadow-sm dark:shadow-gray-700`}
        >
          {Header.map((e, i) => (
            <a
              href={e.href}
              key={i}
              className={`px-4 py-2 text-lg ${i == 0 ? "pl-6" : ""}`}
            >
              <li className="text-nowrap">{e.title}</li>
            </a>
          ))}
        </ul>

        <div className="flex justify-end sm:justify-center items-center gap-5 sm:gap-1 md:gap-5 w-[25%]">
          <div
            className="cursor-pointer"
            onClick={() =>
              Setmode((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            {mode == "light" ? (
              <MdDarkMode size={30} />
            ) : (
              <MdDarkMode className="text-white" size={30} />
            )}
          </div>
          <RxHamburgerMenu
            onClick={() => Setside((prev) => !prev)}
            size={30}
            className="sm:hidden cursor-pointer"
          />
          <a href="#contact">
            <div
              className={`${
                mode === "dark" ? "bg-[#20221d] text-white" : "bg-white/80 text-black"
              } hidden sm:flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 `}
            >
              Contact
              <MdArrowOutward />
            </div>
          </a>
        </div>
      </div>

      <ul
        className={`fixed ${side ? "right-0" : "-right-[100%]"} ${
          mode === "dark" ? "text-white bg-[#111210]" : "text-black bg-[#f4f1ea]"
        } top-0 w-[75vw] h-[100vh] sm:hidden z-50 py-[80px] flex flex-col gap-6 pr-9 shadow-lg transition-all duration-300`}
      >
        <RxCross2
          onClick={() => Setside((prev) => !prev)}
          className="absolute top-8 right-4 cursor-pointer"
          size={40}
        />
        {Header.map((e, i) => (
          <li
            key={i}
            onClick={() => Setside(false)}
            className=" cursor-pointer text-center"
          >
            <a href={e.href} className="text-xl text-nowrap underline-hover">
              {e.title}
            </a>
          </li>
        ))}

        <li
          onClick={() => Setside(false)}
          className="cursor-pointer text-center"
        >
          <a href="#contact" className="text-xl text-nowrap underline-hover">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

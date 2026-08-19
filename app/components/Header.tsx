import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Image1 from "../../assets/dp.jpg";
import { HiDownload } from "react-icons/hi";
import Image2 from "../../assets/dp.jpg";
import { useContext, useState } from "react"; 
import Contextfirst from "../Theme";

const Header = () => {
  const { image, setImage } = useContext(Contextfirst)!; 
  const [hovered, setHovered] =useState<boolean>(false);

  return ( 
    <section className="hero-section">
      <div
        id="home"
        className={`z-20 flex flex-col-reverse justify-center gap-6 py-12 items-center text-center lg:flex-row lg:justify-between lg:gap-10 lg:py-20 lg:text-left mt-[15vh] dark:mt-0`}
      >
        <div className="max-w-[600px]">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
            Full-stack developer
          </p>
          <p className="text-3xl sm:text-5xl mb-2 font-light">
            Hi, I&apos;m Dev Verma
          </p>
          <p id="about" className="font-extralight text-lg sm:text-xl">
            22 | Building dynamic web apps with AI-powered features.
          </p>
        </div>
        <Image
          src={hovered ? (image ? Image2 : Image1) : image ? Image1 : Image2}
          alt="profile"
          onClick={() => setImage((prev: boolean) => !prev)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="rounded-full w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] border-2 border-gray-200 object-cover cursor-pointer shadow-xl dark:border-gray-700"
        />
      </div>

   <div className="border-y border-gray-200 py-6 dark:border-gray-800">
  <div className="max-w-5xl mx-auto">
    <h1 className="font-normal text-xl mb-2">About</h1>
    <p className="font-extralight text-lg leading-relaxed">
      I&apos;m a software developer focused on{" "}
      <span className="font-medium">full-stack development</span>,{" "}
      <span className="font-medium">backend engineering</span>, and{" "}
      <span className="font-medium">AI-powered applications</span>.I enjoy
      solving real-world problems, building scalable applications.
    </p>
  </div>
</div>

      <div className="flex justify-center p-7 gap-6">
        <a href="#contact">
          <span
            className={`dark:bg-black dark:text-white dark:shadow-gray-600 shadow-md flex items-center justify-center  rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap`}
          >
            connect with me
            <MdArrowOutward />
          </span>
        </a>
        <a
  href="https://drive.google.com/file/d/1jV4wyIPsHGbnwTIgFNgYxz2ae0CLje2W/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="bg-black text-white dark:text-black dark:bg-white flex items-center justify-center shadow-md rounded-3xl px-4 cursor-pointer text-lg py-2 text-nowrap">
    my resume
    <HiDownload />
  </span>
</a>
      </div>
    </section>
  );
};

export default Header;

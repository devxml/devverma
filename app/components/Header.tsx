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
    <section className="hero-section rise-in">
      <div
        id="home"
        className="z-20 flex min-h-[680px] flex-col-reverse justify-center gap-12 py-16 pt-32 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20 lg:pt-32 lg:text-left"
      >
        <div className="max-w-[730px]">
          <p className="section-label mb-4">Full-stack developer</p>
          <h1 className="max-w-3xl text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[6.5rem]">
            Hi, I&apos;m <span className="bg-[#d9ff52] px-2 text-black">Dev Verma.</span>
          </h1>
          <p id="about" className="mt-7 max-w-xl text-lg font-light leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            22 | Building dynamic web apps with AI-powered features.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a href="#contact" className="inline-flex items-center gap-2 bg-black px-5 py-3 text-base text-white transition-transform hover:-translate-y-1 dark:bg-white dark:text-black">
              Connect with me <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="relative shrink-0">
          <div className="absolute -inset-5 -z-10 rotate-6 border border-black/15 dark:border-white/15" />
          <Image
            src={hovered ? (image ? Image2 : Image1) : image ? Image1 : Image2}
            alt="Portrait of Dev Verma"
            onClick={() => setImage((prev: boolean) => !prev)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="h-[260px] w-[220px] cursor-pointer object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-[360px] sm:w-[300px]"
          />
        </div>
      </div>

      <div className="border-y border-black/15 py-8 dark:border-white/15">
        <div className="max-w-5xl">
          <p className="section-label mb-3">About</p>
          <p className="max-w-4xl text-lg font-light leading-relaxed text-gray-600 dark:text-gray-300">
            I&apos;m a software developer focused on <span className="font-medium text-black dark:text-white">full-stack development</span>, <span className="font-medium text-black dark:text-white">backend engineering</span>, and <span className="font-medium text-black dark:text-white">AI-powered applications</span>. I enjoy solving real-world problems and building scalable applications.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 py-10">
        <a
  href="https://drive.google.com/file/d/1jV4wyIPsHGbnwTIgFNgYxz2ae0CLje2W/view"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="inline-flex items-center justify-center gap-2 border border-black/20 px-5 py-3 text-base transition-colors hover:bg-black hover:text-white dark:border-white/20 dark:hover:bg-white dark:hover:text-black">
    Download resume
    <HiDownload />
  </span>
</a>
      </div>
    </section>
  );
};

export default Header;

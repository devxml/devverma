import Image from "next/image";
import { useEffect, useState } from "react";

import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";

const images = [Image1, Image2, Image3];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="border-y border-black/15 py-16 dark:border-white/15"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Photos */}
        <div className="relative mx-auto w-full max-w-[520px] overflow-hidden">
          <div className="relative aspect-[4/3] w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Dev Verma - photo ${index + 1}`}
                fill
                priority={index === 0}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out ${
                  currentImage === index
                    ? "translate-x-0 opacity-100"
                    : index < currentImage
                      ? "-translate-x-full opacity-0"
                      : "translate-x-full opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-xl">
          <p className="section-label mb-4">About</p>

          <p className="text-xl font-light leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
            I am a software developer focused on{" "}
            <span className="font-medium text-black dark:text-white">
              full-stack development
            </span>
            ,{" "}
            <span className="font-medium text-black dark:text-white">
              backend systems
            </span>
            , and{" "}
            <span className="font-medium text-black dark:text-white">
              AI-powered applications
            </span>
            . I enjoy solving real-world problems, building scalable
            applications, and turning ideas into reliable solutions.
          </p>

          <p className="mt-5 text-xl font-light leading-8 text-gray-600 dark:text-gray-300 sm:text-2xl">
            I&apos;m passionate about{" "}
            <span className="font-medium text-black dark:text-white">
              DSA
            </span>
            ,{" "}
            <span className="font-medium text-black dark:text-white">
              backend engineering
            </span>
            , and continuously learning new technologies to grow as a
            developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
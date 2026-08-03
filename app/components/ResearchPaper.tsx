import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import ieee from "../../assets/ieee.jpg";
import Image from "next/image";
import Contextfirst from "../Theme";

interface Publication {
  image: typeof ieee;
  alt: string;
  title: string;
  venue: string;
  link: string;
  points: string[];
}

const ResearchPaper = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { setImage } = useContext(Contextfirst)!;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const publications: Publication[] = [
    {
      image: ieee,
      alt: "",
      title:
        "",
      venue: "Research Paper",
      link: "",
      points: [
        "",
      ],
    },
  ];

  return (
    <div id="publications" className="mb-6">
      <h1 className="text-[22px] py-3">Publications</h1>
      <div className="flex flex-col gap-6">
        {publications.map((paper, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-300 dark:border-gray-700 shadow-sm"
          >
            <button
              onClick={() => {
                setImage((prev) => !prev);
                toggle(index);
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100"
            >
              <div className="flex items-center gap-3">
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    alt={paper.alt}
                    src={paper.image}
                    className="h-9 w-9 contain"
                  />
                </a>
                <div>
                  <div>{paper.title}</div>
                  <div className="font-normal">{paper.venue}</div>
                </div>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-4 text-md pl-[60px] transition-all duration-300 overflow-hidden font-extralight ${
                openIndex === index ? "pb-4" : "max-h-0"
              }`}
            >
              {paper.points.map((point, i) => (
                <div key={i} className="flex gap-2 items-center justify-start">
                  <p className="self-start">-</p>
                  <p>{point}</p>
                </div>
              ))}
              <div className="flex justify-end mt-2 mr-5">
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:opacity-70 transition-opacity"
                >
                  <MdArrowOutward size={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;

import React, { useContext, useState } from "react";
import { ChevronDown } from "lucide-react";
import sanskriti from "../../assets/sanskritiuniversity.png";
import Image from "next/image";
import Contextfirst from "../Theme";
import trackon from "../../assets/trackon.png"

const Experience = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { setImage } = useContext(Contextfirst)!;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const educationDetails = [
    {
      img: trackon,
      alt: "Trackon-Couriers",
      duration: "Feb 2026 - May 2026",
      institution: "Trackon Couriers",
      description: "Software Development Intern",
      
      additional: [
        "Built a MERN-stack courier management platform from scratch, delivering 7+ production modules across logistics operations and admin workflows.",
        "Designed and implemented a JWT-based authentication and role-based access system for Admin, Operator, and Delivery Staff.",
        "Engineered the Shipment and Customer modules with advanced search, filtering, pagination, and CSV export, improving operational efficiency by 70%+.",
        "Engineered RESTful APIs using Node.js, Express.js, MongoDB aggregation pipelines, and Zod schema validation, reducing runtime validation errors by 50%+."
      ]
    },
    {
      img: sanskriti,
      alt: "sanskriti",
      duration: "Dec 2024 - Jan 2026",
      institution: "Technical Club, Sanskriti University",
      description: "AI/ML Lead | Volunteer",
      additional: [
        "Led AI/ML initiatives, mentoring 20+ students in Python, ML algorithms, and data visualization.",
        "Conducted workshops on LLMs, RAG Systems, Vector Databases, and Modern AI Applications, enhancing technical knowledge and practical skills.",
      ],
    },
  ];

  return (
    <div id="experience" className="mb-6">
      <h1 className="text-[22px] py-3">Experience</h1>
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
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
               <Image
  alt={edu.alt}
  src={edu.img}
  className="h-9 w-9 object-cover"
/>
              <div>
  <div className="font-semibold">{edu.institution}</div>
  <div className="font-normal">{edu.description}</div>
  <div className="text-sm text-gray-500 dark:text-gray-400">
    {edu.duration}
  </div>
</div>
              </div>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Animated content */}
            <div
              className={`px-4 text-md pl-[60px] transition-all duration-300 overflow-hidden font-extralight ${openIndex === index ? " pb-2" : "max-h-0"
                }`}
            >
              {edu.additional.map((e, i) => (
                <div key={i} className="flex gap-2 items-center justify-start">
                  <p className="self-start">-</p>
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

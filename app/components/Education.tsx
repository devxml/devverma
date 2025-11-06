import React from "react";
import Image from "next/image";
import sanskriti from "../../assets/sanskritiuniversity.png";
import madanmohan from "../../assets/madanmohankalavati.png";
 
const Education = () => {
  const educationDetails = [
    {
      img: sanskriti,
      alt: "Sanskriti-University", 
      duration: "2022-2026",
      institution: "Sanskriti University", 
      description: "Bachelor of Technology in Computer Science Engineering ",
      additional: "", 
    }, 
    {
      img: madanmohan,
      alt: "Madan-mohan-Kalavati",
      duration: "2007-2021",
      institution: "Madan Mohan Kalavati Sarraf Saraswati Vidya Mandir",
      description: "Senior Secondary (CBSE) ",
      additional: "",
    },
  ];

  return (
    <div id="education" className="mt-5" >
      <h1 className="text-[22px] py-3">Education</h1>
      <div className="flex flex-col gap-6">
        {educationDetails.map((edu, index) => (
          <div key={index} className="flex items-center gap-3">
            <Image
              src={edu.img}
              className="h-[45px] w-[37px]"
              alt={edu.alt}
            />
            <div className="relative w-full">
              <p className="absolute top-0 right-0 font-extralight">{edu.duration}</p>
              <p className="text-lg">{edu.institution}</p>
              <span className="font-extralight">{edu.description} </span>
              <span className="font-extralight">{edu.additional}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

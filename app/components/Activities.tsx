import Image from "next/image";
import { Award, BadgeCheck, UsersRound } from "lucide-react";

import pythonCertificate from "../../assets/pythoncertificate.png";
import generativeAi from "../../assets/generative-ai.png";
import deepLearning from "../../assets/NVIDIA.png";
import bestProject from "../../assets/bestproject.png";
import techLead from "../../assets/tech-lead.jpg";

const activities = [
  {
    title: "AI/ML Lead, Technical Club",
    type: "Leadership",
    image: techLead,
    description:
      "Led technical club initiatives, mentored students, and organised sessions on LLMs, RAG systems, and vector databases.",
    icon: UsersRound,
  },
  {
    title: "Best Project Award",
    type: "Recognition",
    image: bestProject,
    description:
      "Awarded Best Project at Sanskriti University's Tech Fest 2025 for innovation and technical excellence.",
    icon: Award,
  },
  {
    title: "Programming, Data Structures and Algorithms using Python",
    type: "Certificate",
    image: pythonCertificate,
    description:
      "Completed comprehensive training in Python programming, data structures, algorithms, and problem-solving.",
    icon: BadgeCheck,
  },
  {
    title: "Generative AI",
    type: "Certificate",
    image: generativeAi,
    description:
      "Completed training covering Generative AI concepts, LLMs, prompt engineering, and practical AI applications.",
    icon: BadgeCheck,
  },
  {
    title: "Fundamentals of Deep Learning",
    type: "Certificate",
    image: deepLearning,
    description:
      "Completed foundational training in deep learning concepts, neural networks, and modern AI systems.",
    icon: BadgeCheck,
  },
];

const Activities = () => {
  return (
    <section id="achievements" className="mt-12 mb-8">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-[22px]">Achievements</h2>
      </div>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <article
              key={activity.title}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-black"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden border-b border-black/10 bg-gray-50 dark:border-white/10 dark:bg-gray-900">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Type + Icon */}
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                    {activity.type}
                  </span>

                  <Icon
                    className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium leading-6">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm font-light leading-6 text-gray-600 dark:text-gray-300">
                  {activity.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;
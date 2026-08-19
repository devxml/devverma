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
    title: "Programming, Data Structures and Algorithms using Python",
    type: "Certificate",
    image: pythonCertificate,
    description:
      "Completed comprehensive training in Python programming, data structures, algorithms, and problem-solving techniques.",
    icon: BadgeCheck,
  },
  {
    title: "Generative AI",
    type: "Certificate",
    image: generativeAi,
    description:
      "Completed training in Generative AI concepts, LLMs, prompt engineering, and practical AI application development.",
    icon: BadgeCheck,
  },
  {
    title: "Fundamentals of Deep Learning",
    type: "Certificate",
    image: deepLearning,
    description:
      "Developed a stronger foundation in machine learning, LLM applications, and modern AI systems.",
    icon: BadgeCheck,
  },
  {
    title: "Best Project Award",
    type: "Recognition",
    image: bestProject,
    description:
      "Awarded “Best Project” at Sanskriti University’s tech fest 2025 for innovation and technical excellence.",
    icon: Award,
  },
];

const Activities = () => {
  return (
    <section id="activities" className="mt-12 mb-8">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[22px]">Activities</h2>
        </div>
        <span className="hidden text-sm font-light text-gray-500 sm:block dark:text-gray-400">
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.title}
                className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-gray-700"
              >
                <div className="relative aspect-[4/3] border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400">
                      {activity.type}
                    </span>
                    <Icon className="h-5 w-5 shrink-0 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium">{activity.title}</h3>
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

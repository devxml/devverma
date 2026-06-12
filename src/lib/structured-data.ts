import { siteConfig } from "@/data/portfolio";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "Software Engineer",
    sameAs: [
      "https://github.com/devxml",
      "https://www.linkedin.com/in/devxml/",
      "https://x.com/devcodebyte",
      "https://leetcode.com/u/devxml/",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Microservices",
      "System Design",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

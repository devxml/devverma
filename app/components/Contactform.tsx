"use client";
import axios from "axios";
import React, { FormEvent } from "react";
import { IconType } from "react-icons";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward, MdEmail } from "react-icons/md";

type Icon = {
  icon: IconType;
  link: string;
};

const icons: Icon[] = [
  {
    icon: FaGithubSquare,
    link: "https://github.com/devxml",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/devxml",
  }, 
  {
    icon: FaXTwitter,
    link: "https://x.com/devcodebyte",
  },
];

const Contactform = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "9aa8f1cb-2f05-4434-a484-51337db7257f");

    try {
      // Send the formData directly to the API
      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error("Error submitting form:", error);
    }
  };

  interface Getin {
    title: string;
    name: string;
    type: string;
  }

  const getintouch: Getin[] = [
    { name: "name", title: "NAME", type: "text" },
    { name: "email", title: "EMAIL ADDRESS", type: "email" },
    { name: "message", title: "MESSAGE", type: "text" },
  ];

  return (
    <section id="contact" className="w-full border-t border-gray-200 py-16 dark:border-gray-800">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
            Contact
          </p>
          <h2 className="text-3xl font-light sm:text-5xl">Get in touch.</h2>
          <p className="mt-5 max-w-sm text-lg font-extralight leading-8 text-gray-600 dark:text-gray-300">
            Have a project, opportunity, or idea in mind? Send a message and
            I&apos;ll get back to you soon.
          </p>

          <a
            href="mailto:devverma2031@gmail.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          >
            <MdEmail size={19} aria-hidden="true" />
            devverma2031@gmail.com
            <MdArrowOutward size={18} aria-hidden="true" />
          </a>

          <div className="mt-8 flex items-center gap-4">
            {icons.map((e, i) => (
              <a
                href={e.link}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${i === 0 ? "GitHub" : i === 1 ? "LinkedIn" : "X"} profile`}
                className="transition-opacity hover:opacity-60"
              >
                <e.icon size={25} />
              </a>
            ))}
          </div>
        </div>

      <form
        onSubmit={onSubmit}
        className="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-950/60"
      >
        {getintouch.map((e, i) => (
          <div className="flex flex-col gap-2" key={i}>
            <label htmlFor={e.name} className="text-sm font-medium">
              {e.title}
            </label>

            <div className="text-black dark:text-white">
              {e.name !== "message" ? (
                <input
                  id={e.name}
                  className="w-full rounded-lg border border-gray-300 bg-transparent px-3 py-3 text-base transition-colors focus:border-black dark:border-gray-600 dark:focus:border-white"
                  name={e.name}
                  type={e.type}
                  required
                />
              ) : (
                <textarea
                  id={e.name}
                  name={e.name}
                  className="w-full resize-y rounded-lg border border-gray-300 bg-transparent px-3 py-3 text-base transition-colors focus:border-black dark:border-gray-600 dark:focus:border-white"
                  rows={5}
                  required
                />
              )}
            </div>
          </div>
        ))}

        <button
          className="inline-flex w-full items-center justify-center gap-2 bg-black px-4 py-3 text-base text-white transition-opacity hover:opacity-80 dark:border dark:border-white dark:bg-white dark:text-black sm:w-fit sm:self-end"
          type="submit"
        >
          Send message
          <MdArrowOutward aria-hidden="true" />
        </button>
      </form>
      </div>
      {result && (
        <p className="mt-5 text-center text-sm font-light" role="status">
          {result}
        </p>
      )}
    </section>
  );
};

export default Contactform;

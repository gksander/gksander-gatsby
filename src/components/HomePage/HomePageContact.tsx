import * as React from "react";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SocialIcons";

type ContactRecord = {
  title: string;
  linkTitle: string;
  href: string;
  icon: typeof EmailIcon;
};

const records: ContactRecord[] = [
  {
    title: "On Gmail",
    linkTitle: "As gksander93",
    href: "mailto:gksander93@gmail.com",
    icon: EmailIcon,
  },
  {
    title: "On GitHub",
    linkTitle: "As gksander",
    href: "https://github.com/gksander",
    icon: GithubIcon,
  },
  {
    title: "On LinkedIn",
    linkTitle: "As gksander",
    href: "https://linkedin.com/in/gksander",
    icon: LinkedinIcon,
  },
  {
    title: "On Twitter",
    linkTitle: "As gksander93",
    href: "https://twitter.com/gksander93",
    icon: TwitterIcon,
  },
];

export const HomePageContact: React.FC = () => {
  return (
    <div className="bg-gray-300" id="getintouch">
      <div className="container max-w-5xl pt-10 pb-16">
        <div className="text-5xl font-thin font-fancy">Get in Touch!</div>
        <div className="text-gray-700">Want to share ideas? Hit me up!</div>
        <div className="mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4">
          {records.map((rec) => (
            <a
              key={rec.title}
              className="flex items-center text-gray-800 hover:text-primary-800 transition-color duration-300 cursor-pointer"
              href={rec.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="w-10 mr-3">
                <rec.icon />
              </div>
              <div>
                <div className="text-gray-700 ">{rec.title}</div>
                <div className="text-lg font-bold leading-3">
                  {rec.linkTitle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

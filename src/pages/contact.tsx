import * as React from "react";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../components/HomePage/SocialIcons";
import { motion, Variants } from "framer-motion";
import { SEO } from "../components/Seo";

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

const iconVariants: Variants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
};

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <SEO title="Get in touch!" description="Hit Grant up!" />
      <div className="w-full h-full overflow-auto">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="font-fancy text-6xl font-thin text-primary-700">
              Get in touch!
            </div>
            <div>Want to share ideas? Hit me up!</div>
          </div>
          <div className="mb-12" />
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-lg gap-3 w-full">
              {records.map((rec) => (
                <motion.a
                  key={rec.title}
                  className="flex items-center text-gray-800 hover:text-primary-800 transition-color duration-300 cursor-pointer rounded p-3 bg-white border md:border-transparent"
                  href={rec.href}
                  target="_blank"
                  rel="noreferrer"
                  initial="rest"
                  whileHover="hover"
                >
                  <motion.div
                    className="w-10 mr-3"
                    variants={iconVariants}
                    initial="rest"
                  >
                    <rec.icon />
                  </motion.div>
                  <div>
                    <div className="text-gray-700 ">{rec.title}</div>
                    <div className="text-lg font-bold leading-3">
                      {rec.linkTitle}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;

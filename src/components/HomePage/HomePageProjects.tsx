import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Project = {
  title: string;
  description: string;
  link?: {
    href: string;
    title: string;
  };
};

const projects: Project[] = [
  {
    title: "ArtisanHD Configurator",
    description: `This is a production app I built for Artisan Colour using full-stack JavaScript (Vue.js on the front, Node.js on the back). Custom product configurator and checkout flow with 2D and 3D product previews.`,
    link: {
      href: "https://secure.artisanhd.com",
      title: "View the live site",
    },
  },
  {
    title: "Personal PokeDex",
    description: `A couch-project I put together while exploring the Gridsome.js framework (similar to Gatsby). Parsed CSVs of Pokemon data to statically-generate a site with hundreds of highly-optimized pages. Used Node tooling to extract vibrant colors to spice up the app's design.`,
    link: {
      href: "https://github.com/gksander/gks-pokedex-gridsome",
      title: "View the source and live site",
    },
  },
  {
    title: "React Native Animation Samples",
    description: `An ongoing playground for creating snippets of cool animations in React Native using React Native's built-in Animated API. A fun place for me to explore mobile animation techniques.`,
    link: {
      href: "https://github.com/gksander/react-native-animation-samples",
      title: "View the source",
    },
  },
  {
    title: "COSma Learning",
    description: `My first production application (that is no longer in commission). Contained a full-fledge online Precalculus course (with interactive lessons, exercises, and assessments) and built with PHP, MySQL, and a lot of JavaScript. Large portions of that code are still in use at ASU today.`,
  },
  {
    title: `LearnJS Playground`,
    description: `A pet project I started and never finished. Uses Gatsby and MDX to create static pages with JS-based learning exercises. Contains fun little interactive editors for tinkering with JS ideas.`,
    link: {
      href: "https://learnjs.gksander.com/",
      title: "View the live site",
    },
  },
];

export const HomePageProjects: React.FC = () => {
  return (
    <div>
      <div className="container max-w-5xl py-10">
        <div className="text-5xl font-thin font-fancy">Projects</div>
        <div className="text-gray-700">
          Here are some projects I've worked on either professionally or
          casually.
        </div>
        <div className="mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <div key={proj.title}>
              <div className="font-bold text-lg">{proj.title}</div>
              <div className="text-gray-700">{proj.description}</div>
              {proj.link && (
                <div className="flex">
                  <a
                    href={proj.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block flex text-gray-700 items-center hover:text-primary-700 transition-color duration-200 mt-1"
                  >
                    <span className="mr-2">{proj.link.title}</span>
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

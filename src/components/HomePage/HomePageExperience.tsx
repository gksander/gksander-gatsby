import * as React from "react";
import classNames from "classnames";

// Experience shape
type IExperience = {
  title: string;
  company: string;
  description: string;
  time: string;
};

const experiences: IExperience[] = [
  {
    title: "Sr. Software Engineer",
    company: "Synapse Studios",
    description: `Full-stack web and mobile. TypeScript, React, React Native, and Node.js.`,
    time: `Jan. 2020 &ndash; Current`,
  },
  {
    title: "Sr. Software Engineer",
    company: "Henri Home",
    description: `Full-stack web and mobile development. React Native, Vue.JS, and Ruby on Rails.`,
    time: `Sept. 2019 &ndash; Jan. 2020`,
  },
  {
    title: `Software Engineer`,
    company: "Artisan Colour",
    description: `Full-stack web development of eCommerce sites and internal tools. Vue.js, NodeJS, and MongoDB.`,
    time: `Aug. 2018 &ndash; Sept. 2019`,
  },
  {
    title: `Software Engineer`,
    company: "COSma Learning",
    description: `Development of custom online math courseware. JavaScript, PHP, and MySQL.`,
    time: `Jan. 2016 &ndash; Aug. 2018`,
  },
  // {
  //   title: `Math Instructor @ Arizona State University`,
  //   description: `Taught precalculus and courses for future math teachers, lead many professional development workshops for university instructors. Research and development of math curriculum.`,
  //   time: `May 2014 &ndash; Jan. 2016`,
  // },
];

/**
 * Component
 * @constructor
 */
export const HomePageExperience: React.FC = () => {
  return (
    <div className="bg-gray-300">
      <div className="container max-w-5xl py-10">
        <div className="text-5xl font-thin font-fancy">Experience</div>
        <div className="mb-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {experiences.map((exp, i) => (
            <div key={exp.company}>
              <div
                className="text-gray-700 leading-8"
                dangerouslySetInnerHTML={{ __html: exp.time }}
              />
              <div className="font-bold text-lg leading-4">{exp.title}</div>
              <div
                className={classNames(
                  "font-bold mb-2",
                  i === 0 ? "text-primary-800" : "text-gray-700",
                )}
              >
                {exp.company}
              </div>
              <div className="text-gray-700 leading-snug">
                {exp.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

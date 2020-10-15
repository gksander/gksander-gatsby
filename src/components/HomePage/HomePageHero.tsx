import * as React from "react";
import styles from "./HomePageHero.module.scss";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GatsbyImage from "gatsby-image/index";

export const HomePageHero: React.FC = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "headshot-transparent.png" }) {
          childImageSharp {
            fluid(quality: 100, cropFocus: WEST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `,
  );

  return (
    <div
      className={classNames(
        "container max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-2 pt-4 items-end",
        styles.hero,
      )}
    >
      <div className="col-span-1 sm:col-span-2 pb-10">
        <div className="text-3xl leading-8 font-fancy">
          I like using computers and problem solving to build things that make
          lives better.
        </div>
        <div className="mb-4" />
        <div className="text-gray-700 leading-5">
          <p className="mb-3">
            My formal background is in mathematics, but I quickly fell in love
            with the utility of software engineering. Being able to turn an idea
            into reality is a great feeling, and I'm infatuated with using
            computers to create useful things. I'm also a sucker for nice
            design.
          </p>
          <p>
            My forte is in full-stack web development (and mobile development
            using React Native), but I'm not afraid of learning new things. My
            focus is on using JavaScript tooling to create data-driven
            applications.
          </p>
        </div>
      </div>
      <div className="grid-cols-1 flex justify-center">
        <div className="w-1/2 sm:w-full">
          <div
            style={{
              paddingTop: "100%",
            }}
            className={classNames(
              "relative transition-all duration-300",
              styles.headshot,
            )}
          >
            <div className="absolute inset-0">
              <GatsbyImage
                className="w-full h-full"
                fluid={file.childImageSharp.fluid}
                alt="Truck background"
                imgStyle={{ objectPosition: "left center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

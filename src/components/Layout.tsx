/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  faEnvelopeOpen,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackgroundImage from "gatsby-background-image";
import GatsbyImage from "gatsby-image/index";
import { FixedAspectRatio } from "./FixedAspectRatio";

const duration = 0.3;

const variants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: duration },
  },
};

const Links: { title: string; to: string }[] = [
  {
    title: "Resume",
    to: "/resume",
  },
  {
    title: "Projects",
    to: "/projects",
  },
  {
    title: "Samples",
    to: "/samples",
  },
  {
    title: "Contact",
    to: "/contact",
  },
];

const SocialLinks: { href: string; icon: typeof faEnvelopeOpen }[] = [
  {
    href: "mailto:gksander93@gmail.com",
    icon: faEnvelopeOpen,
  },
  {
    href: "https://github.com/gksander",
    icon: faGithubSquare,
  },
  {
    href: "https://linkedin.com/in/gksander",
    icon: faLinkedin,
  },
  {
    href: "https://twitter.com/gksander93",
    icon: faTwitterSquare,
  },
];

const headshotVariants: Variants = {
  large: {
    width: `min(600px, 100%)`,
  },
  small: {
    width: 200,
  },
};

/**
 * The layout
 */
const Layout: React.FC<{ location?: any }> = ({ children, location }) => {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const pathname = location?.pathname;

  // Headshot image
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

  React.useEffect(() => {
    if (isFirstMount) setIsFirstMount(false);
  }, [pathname]);

  return (
    <div className="flex flex-col md:flex-row md:flex-shrink-0 w-screen h-screen overflow-hidden bg-gray-200">
      <div className="w-full md:w-64 p-2 md:p-4 flex flex-col text-gray-800">
        <div className="md:pb-3">
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl leading-tight text-gray-900"
          >
            Grant Sander
          </Link>
        </div>
        <div className="flex-1 flex md:flex-col">
          <div className="flex-1 flex flex-row md:flex-col md:gap-y-2 gap-x-2">
            {Links.map((link) => (
              <Link to={link.to} key={link.to} activeClassName="font-bold">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex justify-center">
            {SocialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 hover:bg-gray-800 hover:text-white transition-colors duration-200 rounded-full flex justify-center items-center"
              >
                <FontAwesomeIcon icon={link.icon} className="text-lg" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <main className="flex-1 overflow-auto relative">
        <motion.div
          className="absolute right-0 bottom-0"
          variants={headshotVariants}
          initial={false}
          animate={pathname === "/" ? "large" : "small"}
          style={{ filter: `grayscale(1)` }}
          transition={{ duration: 2 * duration }}
        >
          <FixedAspectRatio ratio={1}>
            <GatsbyImage
              className="w-full h-full"
              fluid={file.childImageSharp.fluid}
              alt="Truck background"
              imgStyle={{ objectPosition: "left center" }}
            />
          </FixedAspectRatio>
        </motion.div>
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial={isFirstMount ? false : "initial"}
            animate="enter"
            exit="exit"
            key={location?.pathname || "nothing"}
            className="absolute inset-0 overflow-auto"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;

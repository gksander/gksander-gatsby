/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  AnimateSharedLayout,
} from "framer-motion";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  faAt,
  faEnvelopeOpen,
  faExternalLinkSquareAlt,
  faFileAlt,
  faHammer,
  faStar,
  faVial,
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
const MotionLink = motion.custom(Link);

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

const Links: { title: string; to: string; icon: typeof faVial }[] = [
  {
    title: "Resume",
    to: "/resume",
    icon: faFileAlt,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: faHammer,
  },
  {
    title: "Samples",
    to: "/samples",
    icon: faVial,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: faAt,
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
    width: 300,
  },
};

/**
 * The layout
 */
const Layout: React.FC<{ location?: any }> = ({ children, location }) => {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const pathname = location?.pathname || "";

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
    <div className="flex flex-col md:flex-row md:flex-shrink-0 w-screen h-screen overflow-hidden bg-white">
      <AnimateSharedLayout>
        <div className="w-full border-b md:border-b-0 md:shadow-none md:w-64 p-2 md:p-4 flex flex-col bg-primary-700 text-white">
          <div className="mb-1 md:mb-3">
            <Link
              to="/"
              className="font-bold text-xl md:text-3xl leading-tight"
            >
              Grant Sander
            </Link>
          </div>
          <div className="flex-1 flex md:flex-col">
            <div className="md:flex-grow">
              <div className="grid grid-cols-4 md:grid-cols-1 gap-2 overflow-x-auto">
                {Links.map((link) => (
                  <Link
                    to={link.to}
                    key={link.to}
                    className="flex items-center p-1 rounded hover:bg-primary-800 transition-all duration-200"
                    activeClassName="bg-primary-800"
                    partiallyActive
                  >
                    <div className="flex flex-1">
                      <span className="w-8 px-1 tex-center hidden md:inline">
                        <FontAwesomeIcon icon={link.icon} />
                      </span>
                      <span className="flex-1">{link.title}</span>
                    </div>
                    <AnimatePresence>
                      {pathname.startsWith(link.to) && (
                        <motion.span
                          layoutId="active-star"
                          initial={{ scale: 0, opacity: 0, rotate: -90 }}
                          animate={{ scale: 1, opacity: 1, rotate: 0 }}
                          exit={{ scale: 0, opacity: 0, rotate: 90 }}
                          className="hidden md:inline text-white"
                        >
                          <FontAwesomeIcon icon={faStar} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              {SocialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-primary-800 hover:text-white transition-colors duration-200 rounded-full flex justify-center items-center"
                >
                  <FontAwesomeIcon icon={link.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimateSharedLayout>
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
        <div className="absolute inset-0 overflow-hidden bg-white bg-opacity-75">
          <AnimatePresence>
            <motion.div
              variants={variants}
              initial={isFirstMount ? false : "initial"}
              animate="enter"
              exit="exit"
              key={location?.pathname || "nothing"}
              className="absolute inset-0"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Layout;

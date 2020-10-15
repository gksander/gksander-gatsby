/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Header } from "./Header";

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

const Layout = ({ children, location }) => {
  const [isFirstMount, setIsFirstMount] = React.useState(true);
  const pathname = location?.pathname;

  React.useEffect(() => {
    if (isFirstMount) setIsFirstMount(false);
  }, [pathname]);

  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <AnimatePresence>
        <motion.main
          variants={variants}
          initial={isFirstMount ? false : "initial"}
          animate="enter"
          exit="exit"
          key={location?.pathname || "nothing"}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;

import * as React from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const items: { title: string; body: string }[] = [
  {
    title: "Winter",
    body: "The season to be jolly.",
  },
  {
    title: "Spring",
    body: "April showers, maybe flowers.",
  },
  {
    title: "Summer",
    body: "Warm days, fun nights.",
  },
  {
    title: "Fall",
    body: "Sweater weather, baby.",
  },
];

/**
 * Sample accordion component
 */
export const Accordion: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<null | number>(null);

  return (
    <div className="px-3">
      {items.map(({ title, body }, i) => (
        <React.Fragment key={title}>
          <div
            className={classNames(
              "flex justify-between items-center cursor-pointer text-gray-800 hover:text-primary-700 rounded transition-colors duration-150 p-2",
              i === selectedIndex && "text-primary-700",
            )}
            onClick={() => setSelectedIndex(i === selectedIndex ? null : i)}
          >
            <div className="font-bold">{title}</div>
            <motion.span
              animate={{ rotateZ: i === selectedIndex ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </motion.span>
          </div>
          <AnimatePresence initial={false}>
            {i === selectedIndex && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  collapsed: {
                    opacity: 0,
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                  open: {
                    opacity: 1,
                    height: "auto",
                    paddingTop: "inherit",
                    paddingBottom: "inherit",
                  },
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-700 text-sm px-2 py-1"
              >
                {body}
              </motion.div>
            )}
          </AnimatePresence>
        </React.Fragment>
      ))}
    </div>
  );
};

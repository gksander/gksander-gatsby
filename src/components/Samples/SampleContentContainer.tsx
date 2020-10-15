import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

export const SampleContentContainer: React.FC<{
  sourceUrl: string;
  name?: string;
}> = ({ sourceUrl, children, name }) => {
  return (
    <div
      className="bg-gray-300 rounded relative overflow-hidden"
      style={{ paddingBottom: "100%" }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        {children}
      </div>
      <div className="source-link absolute top-0 inset-x-0 text-white flex items-center cursor-pointer">
        {Boolean(name) && (
          <Link
            className="flex-1 p-2 bg-black bg-opacity-25 hover:bg-opacity-75 transition-all duration-200"
            to={`#${name}`}
          >
            <FontAwesomeIcon icon={faExpand} className="text-sm" />
            <span className="ml-2">Expand</span>
          </Link>
        )}
        <a
          className="flex-1 p-2 bg-black bg-opacity-25 hover:bg-opacity-75 transition-all duration-200 flex justify-end items-center"
          href={sourceUrl}
          target="_blank"
          rel="noreferrer"
        >
          <span className="mr-2">See source</span>
          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-sm" />
        </a>
      </div>
    </div>
  );
};

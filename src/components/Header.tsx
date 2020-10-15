import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVial } from "@fortawesome/free-solid-svg-icons";

export const Header: React.FC = () => (
  <header className="container max-w-5xl py-2 flex justify-between items-center">
    <Link
      className="text-2xl font-bold hover:text-primary-800 transition-colors duration-200"
      to="/"
    >
      Grant Sander
    </Link>
    <Link
      className="block flex text-gray-700 rounded p-2 cursor-pointer hover:bg-gray-300 hover:text-primary-800 transition-colors duration-200 items-center"
      activeClassName="text-primary-800"
      to="/samples"
    >
      <FontAwesomeIcon icon={faVial} />
      <span className="ml-2">Samples</span>
    </Link>
  </header>
);

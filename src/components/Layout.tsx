/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

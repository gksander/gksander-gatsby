import * as React from "react";
import { Link } from "gatsby";

import "../assets/main.css";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import { HomePageHero } from "../components/HomePage/HomePageHero";
import { HomePageExperience } from "../components/HomePage/HomePageExperience";
import { HomePageTools } from "../components/HomePage/HomePageTools";
import { HomePageProjects } from "../components/HomePage/HomePageProjects";
import { HomePageContact } from "../components/HomePage/HomePageContact";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Grant Sander" />
    <HomePageHero />
    <HomePageExperience />
    <HomePageTools />
    <HomePageProjects />
    <HomePageContact />
  </Layout>
);

export default IndexPage;

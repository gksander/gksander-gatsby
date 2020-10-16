import * as React from "react";
import { SEO } from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const IndexPage: React.FC = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "headshot-transparent.png" }) {
          childImageSharp {
            fluid(quality: 100, cropFocus: WEST) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  const fluid = data?.file?.childImageSharp?.fluid;

  return (
    <React.Fragment>
      <SEO title="Home" />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-2xl md:text-3xl leading-tight">Hi, I'm</div>
        <div className="font-fancy font-thin text-5xl md:text-6xl text-center leading-snug">
          Grant Sander
        </div>
        <div className="text-2xl font-bold">Software Engineer</div>
        <div className="text-xl">Team Leader</div>
        <div className="text-base">Sort-of Designer</div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

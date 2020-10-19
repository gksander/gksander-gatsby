import * as React from "react";
import { SEO } from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";

const Sections: { title: string; description: string }[] = [
  {
    title: "I build software",
    description: `I build full-stack web and mobile apps using primarily JavaScript tooling. I have experience building web front-ends using React and Vue.js, mobile apps using React Native, and API backends using both Node.js and Ruby on Rails.`,
  },
  {
    title: "I lead teams",
    description: `Building large-scale software is a team sport, and I love leading by example. I'm a strong communicator who fully embraces the non-technical side of software development.`,
  },
  {
    title: "I design things",
    description: `Though I'm not trained as a designer, I enjoy thinking about design and user experience. I'm particularly fascinated with graphiccs/modeling and animation.`,
  },
];

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
      <SEO title="Home" description="Learn a little bit about Grant Sander." />
      <div className="w-full h-full overflow-auto">
        <div className="container max-w-2xl py-4">
          <div className="grid gap-6">
            {Sections.map((section) => (
              <div key={section.title}>
                <div className="text-3xl md:text-4xl font-fancy text-primary-700">
                  {section.title}.
                </div>
                <div className="text-gray-800 max-w-xl">
                  {section.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

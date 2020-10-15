import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";

const Samples: React.FC = () => {
  return (
    <Layout>
      <SEO title="Samples" />
      <div className="container max-w-5xl">
        <h1 className="font-fancy text-4xl">Samples coming soon</h1>
      </div>
    </Layout>
  );
};

export default Samples;

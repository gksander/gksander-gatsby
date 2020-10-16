import * as React from "react";

export const SamplesHero: React.FC = () => (
  <div className="py-6 flex justify-center">
    <div className="max-w-xl">
      <div className="text-center">
        <div className="font-fancy text-6xl font-thin text-primary-700">
          Code Samples
        </div>
        <div className="text-gray-700 max-w-2xl">
          Outside of building full applications, I like tinkering. This page is
          a collection of samples (mostly around SVG and animations) I've been
          playing around with lately.
        </div>{" "}
      </div>
    </div>
  </div>
);

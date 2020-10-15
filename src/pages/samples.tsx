import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/Seo";
import { SamplesHero } from "../components/Samples/SamplesHero";
import { SampleContentContainer } from "../components/Samples/SampleContentContainer";
import { LoadingSpeedometer } from "../components/Samples/LoadingSpeedometer";
import { LoadingBlocks } from "../components/Samples/LoadingBlocks";
import { LoadingClock } from "../components/Samples/LoadingClock";
import { LoadingSpinner } from "../components/Samples/LoadingSpinner";
import classNames from "classnames";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type WebSample = {
  sourceUrl: string;
  wrappingClass?: string;
  component: React.FC;
  name?: string;
};

const webSamples: WebSample[] = [
  {
    sourceUrl:
      "https://github.com/gksander/gksander-preact/blob/master/src/routes/samples/components/LoadingSpeedometer.tsx",
    component: LoadingSpeedometer,
    wrappingClass: "w-40",
    name: "loading-speedometer",
  },
  {
    sourceUrl:
      "https://github.com/gksander/gksander-preact/blob/master/src/routes/samples/components/LoadingBlocks.tsx",
    component: LoadingBlocks,
    wrappingClass: "w-32",
    name: "loading-blocks",
  },
  {
    sourceUrl:
      "https://github.com/gksander/gksander-preact/blob/master/src/routes/samples/components/LoadingClock.tsx",
    component: LoadingClock,
    wrappingClass: "w-32",
    name: "loading-clock",
  },
  {
    sourceUrl:
      "https://github.com/gksander/gksander-preact/blob/master/src/routes/samples/components/LoadingSpinner.tsx",
    component: LoadingSpinner,
    wrappingClass: "w-24",
    name: "loading-spinner",
  },
];

type VideoSample = {
  sourceUrl: string;
  src: string;
};

const videoSamples: VideoSample[] = [
  {
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/TiltCarousel/TiltCarousel.view.tsx",
    src: require("../video/tilt-carousel.mp4"),
  },
  {
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/tree/master/views/Pokedex",
    src: require("../video/pokedex.mp4"),
  },
  {
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/PokemonSlider/PokemonSlider.view.tsx",
    src: require("../video/pokeslider-1.mp4"),
  },
  {
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/ImageLoad/ItemCard.tsx",
    src: require("../video/image-loading.mp4"),
  },
];

const defaultColor = "#A06B9A";

const Samples: React.FC<{ location?: any }> = ({ location }) => {
  const activeName = location?.hash?.replace("#", "");
  const activeItem = webSamples.find(
    (sample) => sample.name && sample.name === activeName,
  );

  return (
    <Layout>
      <SEO title="Samples" />
      <div
        className={classNames(
          "fixed inset-0 bg-black bg-opacity-75 flex flex-col transition-all duration-200",
          activeItem ? "z-10 opacity-1" : "z-0 opacity-0 pointer-events-none",
        )}
        onClick={() => {}}
      >
        <div className="p-6 flex justify-end">
          <Link
            to="/samples"
            className="flex items-center text-white font-bold hover:bg-black rounded p-2 transition-colors duration-200 cursor-pointer border border-white hover:border-transparent"
          >
            <span className="mr-2">Close</span>
            <FontAwesomeIcon icon={faTimes} />
          </Link>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div
            className="w-64 h-64 bg-gray-300 p-6 rounded shadow-lg cursor-auto flex justify-center items-center"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* @ts-ignore */}
            {activeItem && <activeItem.component color={defaultColor} />}
          </div>
        </div>
      </div>
      <SamplesHero />
      {/* Web animations */}
      <div className="container max-w-5xl py-10">
        <div className="font-fancy text-4xl font-thin">
          Web Animations (JS and CSS)
        </div>
        <div className="text-gray-700">
          Here are some samples using raw CSS animations, as well as GSAP + Vue.
        </div>
        <div className="mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {webSamples.map((sample) => (
            <SampleContentContainer
              sourceUrl={sample.sourceUrl}
              key={sample.sourceUrl}
              name={sample.name}
            >
              <div className={sample.wrappingClass}>
                {/* @ts-ignore*/}
                <sample.component color={defaultColor} />
              </div>
            </SampleContentContainer>
          ))}
        </div>
      </div>
      {/* Vidoes */}
      <div className="container max-w-5xl">
        <div className="font-fancy text-4xl font-thin">
          React Native Animations
        </div>
        <div className="text-gray-700">
          Here are some mobile samples using React Native's Animated API.
        </div>
        <div className="mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-10">
          {videoSamples.map((sample) => (
            <SampleContentContainer
              sourceUrl={sample.sourceUrl}
              key={sample.sourceUrl}
            >
              <video src={sample.src} controls loop className="w-full h-full" />
            </SampleContentContainer>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Samples;

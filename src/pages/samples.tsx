import * as React from "react";
import { SEO } from "../components/Seo";
import { SamplesHero } from "../components/Samples/SamplesHero";
import { SampleContentContainer } from "../components/Samples/SampleContentContainer";
import { LoadingSpeedometer } from "../components/Samples/LoadingSpeedometer";
import { LoadingBlocks } from "../components/Samples/LoadingBlocks";
import { LoadingClock } from "../components/Samples/LoadingClock";
import { LoadingSpinner } from "../components/Samples/LoadingSpinner";
import { LoadingRainbox } from "../components/Samples/LoadingRainbox";
import { PokemonCardSelector } from "../components/Samples/PokemonCardSelector";

type WebSample = {
  title: string;
  subtitle: string;
  sourceUrl: string;
  wrappingClass?: string;
  expandedWrappingClass?: string;
  component: React.FC;
};

const webSamples: WebSample[] = [
  {
    title: "Pokemon Cards",
    subtitle: "Click one!",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/PokemonCardSelector.tsx",
    component: PokemonCardSelector,
    wrappingClass: "w-full",
    expandedWrappingClass: "w-5/6 sm:w-1/2",
  },
  {
    title: "Loading Speedometer",
    subtitle: "Using Framer Motion",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/LoadingSpeedometer.tsx",
    component: LoadingSpeedometer,
    wrappingClass: "w-40",
  },
  {
    title: "Loading Blocks",
    subtitle: "Using SCSS",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/LoadingBlocks.tsx",
    component: LoadingBlocks,
    wrappingClass: "w-32",
  },
  {
    title: "Loading Clock",
    subtitle: "Using Framer Motion",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/LoadingClock.tsx",
    component: LoadingClock,
    wrappingClass: "w-32",
  },
  {
    title: "Loading Rainbow",
    subtitle: "Using Framer Motion",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/LoadingRainbow.tsx",
    component: LoadingRainbox,
    wrappingClass: "w-40",
  },
  {
    title: "Loading Spinner",
    subtitle: "Using SCSS",
    sourceUrl:
      "https://github.com/gksander/gksander-gatsby/blob/master/src/components/Samples/LoadingSpinner.tsx",
    component: LoadingSpinner,
    wrappingClass: "w-24",
  },
];

type VideoSample = {
  title: string;
  subtitle: string;
  sourceUrl: string;
  src: string;
};

const videoSamples: VideoSample[] = [
  {
    title: "Tilt Carousel",
    subtitle: "RN Animated API",
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/TiltCarousel/TiltCarousel.view.tsx",
    src: require("../video/tilt-carousel.mp4"),
  },
  {
    title: "Pokedex",
    subtitle: "RN Animated API",
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/tree/master/views/Pokedex",
    src: require("../video/pokedex.mp4"),
  },
  {
    title: "Pokemon Slider",
    subtitle: "RN Animated API",
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/PokemonSlider/PokemonSlider.view.tsx",
    src: require("../video/pokeslider-1.mp4"),
  },
  {
    title: "Image Loading Animation",
    subtitle: "RN Animated API",
    sourceUrl:
      "https://github.com/gksander/react-native-animation-samples/blob/master/views/ImageLoad/ItemCard.tsx",
    src: require("../video/image-loading.mp4"),
  },
];

const defaultColor = "#A06B9A";

const Samples: React.FC<{ location?: any }> = ({ location }) => {
  return (
    <>
      <SEO title="Samples" />
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
              title={sample.title}
              subtitle={sample.subtitle}
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
              title={sample.title}
              subtitle={sample.subtitle}
              sourceUrl={sample.sourceUrl}
              key={sample.sourceUrl}
            >
              <video src={sample.src} controls loop className="w-full h-full" />
            </SampleContentContainer>
          ))}
        </div>
      </div>
    </>
  );
};

export default Samples;

import * as React from "react";
import classNames from "classnames";

const steps = ["Cart", "Shipping", "Billing", "Done!"];

/**
 * Interactive progress tracker
 */
export const ProgressTracker: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  return (
    <div>
      <div className="px-4">
        <div className="flex justify-between relative">
          <div className="absolute inset-0 mx-6 mb-6 flex flex-col justify-center">
            <div className="h-2 bg-gray-300" />
          </div>
          <div className="absolute inset-0 mx-6 mb-6 flex flex-col justify-center">
            <div
              className="h-2 bg-primary-700 rounded-full transition-all duration-500"
              style={{
                originX: 0,
                transformOrigin: "left",
                transform: `scaleX(${currentStepIndex / (steps.length - 1)})`,
              }}
            />
          </div>
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center z-0">
              <div
                className={classNames(
                  "w-12 h-12 rounded-full border-4 border-transparent flex justify-center items-center transition-all duration-300 cursor-pointer font-bold",
                  currentStepIndex > i && "bg-primary-700 text-white",
                  currentStepIndex === i &&
                    "border-primary-700 bg-white text-primary-700",
                  currentStepIndex < i && "bg-gray-300",
                )}
                onClick={() => setCurrentStepIndex(i)}
              >
                {i + 1}
              </div>
              <div
                className={classNames(
                  "h-6 text-xs flex items-end transition-all duration-300",
                  currentStepIndex === i && "text-primary-700 font-bold",
                )}
              >
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

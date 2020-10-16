import * as React from "react";

const Resume: React.FC = () => {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="container max-w-4xl p-2">
        <div className="text-center">
          <div className="font-fancy text-6xl font-thin text-primary-700">
            Resume
          </div>
          <div>
            A little bit about my professional past, present, and future.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

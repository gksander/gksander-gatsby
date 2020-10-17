import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const SampleContentContainer: React.FC<{
  sourceUrl: string;
  title: string;
  subtitle: string;
}> = ({ sourceUrl, children, title = "Title", subtitle = "Subtitle" }) => {
  return (
    <div className="bg-white border rounded overflow-hidden">
      <div className="p-3 flex justify-between items-center">
        <div className="text-gray-800 leading-tight">
          <div className="font-bold">{title}</div>
          <div className="text-sm">{subtitle}</div>
        </div>
        <div>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-gray-400 transition-colors duration-150"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </div>
      </div>
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: "100%" }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

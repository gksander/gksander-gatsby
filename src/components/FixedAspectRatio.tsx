import * as React from "react";
import classNames from "classnames";

export const FixedAspectRatio: React.FC<
  { ratio: number } & React.HTMLAttributes<HTMLDivElement>
> = ({ ratio, children, className, ...rest }) => (
  <div
    className={classNames("w-full relative", className)}
    style={{ paddingBottom: `${ratio * 100}%` }}
    {...rest}
  >
    <div className="absolute inset-0">{children}</div>
  </div>
);

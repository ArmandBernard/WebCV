import { FunctionComponent, ReactNode } from "react";

interface TimeLineProps {
  children: ReactNode;
}

export const Timeline: FunctionComponent<TimeLineProps> = (props) => (
  <div
    className={`grid grid-cols-[auto_auto_1fr] py-2 gap-3
                border-primary border-l-4 ml-2`}
  >
    {props.children}
  </div>
);

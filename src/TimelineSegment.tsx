import { FunctionComponent, ReactNode } from "react";

interface TimelineSegmentProps {
  timelineText: ReactNode;
  children?: ReactNode;
}

export const TimelineSegment: FunctionComponent<TimelineSegmentProps> = (
  props
) => {
  return (
    <div>
      <div className="grid grid-cols-[auto_auto_1fr] gap-4 items-baseline border-sky-400 border-l-4 ml-2">
        <span className="inline-block h-4 w-4 ml-[calc(-0.5rem-2px)] mt-2 rounded-full bg-sky-400 align-middle" />
        <div>{props.timelineText}</div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

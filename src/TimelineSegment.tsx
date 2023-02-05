import { FunctionComponent, ReactNode } from "react";

interface TimelineSegmentProps {
  timelineText: ReactNode;
  children?: ReactNode;
}

export const TimelineSegment: FunctionComponent<TimelineSegmentProps> = (
  props
) => {
  return (
    <>
      <span className="inline-block h-4 w-4 ml-[calc(-0.5rem-2px)] mt-1 rounded-full bg-primary align-middle" />
      <div>{props.timelineText}</div>
      <div>{props.children}</div>
    </>
  );
};

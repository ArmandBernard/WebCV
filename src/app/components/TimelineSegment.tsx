import { FunctionComponent, ReactNode } from "react";

interface TimelineSegmentProps {
  timelineText: ReactNode;
  children?: ReactNode;
}

export const TimelineSegment: FunctionComponent<TimelineSegmentProps> = (
  props
) => (
  <>
    <span
      className={`inline-block h-4 w-4 ml-[calc(-0.5rem-2px)] mt-1 rounded-full 
                  bg-primary print-exact`}
    />
    <div>
      {/* On large screens, timeline text shows next to content */}
      <div className="font-bold max-sm:hidden">{props.timelineText}</div>
    </div>
    <div>
      {/* On small screens, timeline text shows above content */}
      <div className="font-bold sm:hidden mb-2">{props.timelineText}</div>
      {props.children}
    </div>
  </>
);

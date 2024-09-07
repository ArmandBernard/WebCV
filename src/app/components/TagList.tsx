/* eslint-disable  */
import { FunctionComponent, ReactNode } from "react";

const Tag: FunctionComponent<{
  children: ReactNode;
}> = (props) => (
  <li className="bg-tag-background px-2 rounded-full text-sm max-sm:text-xs print-exact list-none">
    {props.children}
  </li>
);

export const TagList: FunctionComponent<{
  "aria-label": string;
  className?: string;
  children: ReactNode;
}> & { Item: typeof Tag } = (props) => {
  return (
    <ol
      aria-label={props["aria-label"]}
      className={["list-none flex flex-wrap gap-2", props.className]
        .filter(Boolean)
        .join(" ")}
    >
      {props.children}
    </ol>
  );
};
TagList.displayName = "TagList";
TagList.Item = Tag;

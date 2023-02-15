import { FunctionComponent, ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export const Tag: FunctionComponent<TagProps> = (props) => (
  <span className="bg-tag-background px-2 rounded-full text-sm max-sm:text-xs print-exact">
    {props.children}
  </span>
);

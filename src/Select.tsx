import { createRef, FunctionComponent, useMemo, useRef, useState } from "react";
import { useOutsideClickHandler } from "./useOutsideClickHandler";

interface SelectProps {
  options: string[];
}

export const Select: FunctionComponent<SelectProps> = (props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const dropdown = useRef<HTMLDivElement>(null);

  useOutsideClickHandler(dropdown, () => setOpen(false));

  const refs = useMemo(
    () =>
      Array.from({ length: props.options.length }).map(() =>
        createRef<HTMLButtonElement>()
      ),
    [props.options]
  );

  const focusItem = (index: number) => {
    refs[index].current?.focus();
  };

  const onClickExpand = () => {
    if (!open) {
      setOpen(true);

      setTimeout(() => focusItem(0), 0);
    }
  };

  const onClickItem = (option: string) => {
    setSelected(option);
    setOpen(false);
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="flex flex-col w-40">
      <button
        className="p-2 border rounded text-left flex justify-between"
        onClick={onClickExpand}
      >
        {selected ?? "Select an option"}
        <span>v</span>
      </button>
      <div ref={dropdown} className={`relative ${!open && "invisible"}`}>
        <ul
          className="flex flex-col absolute border rounded w-full"
          onKeyDown={onMenuKeyDown}
        >
          {props.options.map((option, index) => (
            <li key={option}>
              <button
                ref={refs[index]}
                className="p-2 w-full text-left"
                onClick={() => onClickItem(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

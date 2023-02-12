import { createRef, FunctionComponent, useMemo, useRef, useState } from "react";
import { useOutsideClickHandler } from "./useOutsideClickHandler";

interface SelectProps {
  options: string[];
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
}

export const Select: FunctionComponent<SelectProps> = (props) => {
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
    props.setSelectedOption(option);
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
        className="p-2 border rounded text-left flex justify-between gap-2"
        onClick={onClickExpand}
      >
        {props.selectedOption ?? "Select an option"}
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
                className="p-2 w-full text-left whitespace-nowrap"
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

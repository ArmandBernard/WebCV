import { createRef, FunctionComponent, useMemo, useRef, useState } from "react";
import { useOutsideClickHandler } from "./useOutsideClickHandler";

interface SelectProps {
  className?: string;
  options: string[];
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
}

export const Select: FunctionComponent<SelectProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClose = () => {
    setOpen(false);

    buttonRef.current?.focus();
  };

  useOutsideClickHandler(dropdownRef, onClose);

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
    onClose();
  };

  const onMenuKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();

        onClose();
        break;
      case "ArrowDown":
      case "ArrowRight":
        {
          e.preventDefault();

          const focusedIndex = refs.findIndex(
            (bRef) => bRef.current === document.activeElement
          );
          focusItem((focusedIndex + 1) % props.options.length);
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        {
          e.preventDefault();

          const focusedIndex = refs.findIndex(
            (bRef) => bRef.current === document.activeElement
          );
          focusItem((focusedIndex - 1) % props.options.length);
        }
        break;
    }
  };

  return (
    <div className={`flex flex-col ${props.className}`}>
      <button
        ref={buttonRef}
        className="p-2 border rounded text-left flex justify-between gap-2"
        onClick={onClickExpand}
      >
        {props.selectedOption ?? "Select an option"}
        <span>v</span>
      </button>
      <div ref={dropdownRef} className={`relative ${!open && "invisible"}`}>
        <ul
          className="flex flex-col absolute border rounded w-full"
          onKeyDown={onMenuKeyDown}
        >
          {props.options.map((option, index) => (
            <li key={option}>
              <button
                tabIndex={-1}
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

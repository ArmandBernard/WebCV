import {
  createRef,
  FunctionComponent,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { useOutsideClickHandler } from "./useOutsideClickHandler";

interface SelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  className?: string;
  options: string[];
  selectedOption: string | undefined;
  setSelectedOption: (option: string) => void;
}

export const Select: FunctionComponent<SelectProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const listBoxId = useId();

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

  const onBlur = (e: React.FocusEvent) => {
    // onBlur can trigger even if the focus has switched to another child
    if (dropdownRef.current?.contains(e.relatedTarget)) {
      return;
    }

    setOpen(false);
  };

  const onClickExpand = () => {
    if (!open) {
      setOpen(true);

      const selectedIndex = props.options.findIndex(
        (option) => option === props.selectedOption
      );

      setTimeout(() => focusItem(selectedIndex !== -1 ? selectedIndex : 0), 0);
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
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-controls={listBoxId}
        aria-expanded={open}
        role="combobox"
        ref={buttonRef}
        className="p-2 border border-neutral-400 dark:border-white rounded text-left flex justify-between gap-2"
        onClick={onClickExpand}
        value={props.selectedOption}
      >
        {props.selectedOption ?? "Select an option"}
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </button>
      <div ref={dropdownRef} className={`relative ${!open && "invisible"}`}>
        <div
          id={listBoxId}
          aria-label={props["aria-label"]}
          aria-labelledby={props["aria-labelledby"]}
          className="flex flex-col absolute border border-neutral-400 dark:border-white rounded w-full"
          onKeyDown={onMenuKeyDown}
          role="listbox"
          onBlur={onBlur}
        >
          {props.options.map((option, index) => (
            <button
              key={option}
              role="option"
              tabIndex={-1}
              ref={refs[index]}
              className="p-2 w-full text-left whitespace-nowrap"
              onClick={() => onClickItem(option)}
              aria-selected={option === props.selectedOption}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

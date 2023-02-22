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
  position?: "top" | "bottom";
  className?: string;
  options: string[];
  selectedOption: string | undefined;
  setSelectedOption: (option: string) => void;
}

export const SelectMobile: FunctionComponent<SelectProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const listBoxId = useId();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // close menu and restore focus to the open button
  const onClose = () => {
    setOpen(false);

    buttonRef.current?.focus();
  };

  // close the menu when someone clicks outside of it
  useOutsideClickHandler(dropdownRef, () => setOpen(false));

  // create refs for each item
  const refs = useMemo(
    () =>
      Array.from({ length: props.options.length }).map(() =>
        createRef<HTMLButtonElement>()
      ),
    [props.options]
  );

  // focus an option by its index
  const focusOption = (index: number) => {
    refs[index].current?.focus();
  };

  // close the dropdown on focus loss
  const onBlur = (e: React.FocusEvent) => {
    // onBlur can trigger even if the focus has switched to another child
    if (dropdownRef.current?.contains(e.relatedTarget)) {
      return;
    }

    setOpen(false);
  };

  // open the menu when the dropdown button is click
  const onClickExpand = () => {
    if (!open) {
      setOpen(true);

      const selectedIndex = props.options.findIndex(
        (option) => option === props.selectedOption
      );

      setTimeout(
        () => focusOption(selectedIndex !== -1 ? selectedIndex : 0),
        0
      );
    }
  };

  // select an option on clicking its button
  const onClickItem = (option: string) => {
    props.setSelectedOption(option);
    onClose();
  };

  // handle dropdown menu-wide keypresses
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
          focusOption((focusedIndex + 1) % props.options.length);
        }
        break;
      case "ArrowUp":
      case "ArrowLeft":
        {
          e.preventDefault();

          const focusedIndex = refs.findIndex(
            (bRef) => bRef.current === document.activeElement
          );
          focusOption((focusedIndex - 1) % props.options.length);
        }
        break;
    }
  };

  return (
    <div
      className={`flex ${
        props.position === "top" ? "flex-col-reverse" : "flex-col"
      } ${props.className}`}
    >
      <button
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-controls={listBoxId}
        aria-expanded={open}
        role="combobox"
        ref={buttonRef}
        className={`p-2 border items-center bg-background border-neutral-400 dark:border-white 
            rounded text-left flex justify-between gap-2`}
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
          className={`flex flex-col absolute border ${
            props.position === "top" && "translate-y-[-100%]"
          } bg-background border-neutral-400 
              dark:border-white rounded w-full`}
          role="listbox"
          onBlur={onBlur}
          onKeyDown={onMenuKeyDown}
        >
          {props.options.map((option, index) => {
            const selected = option === props.selectedOption;

            return (
              <button
                key={option}
                aria-selected={selected}
                role="option"
                tabIndex={-1}
                ref={refs[index]}
                className={
                  "p-2 flex items-baseline justify-between w-full text-left whitespace-nowrap"
                }
                onClick={() => onClickItem(option)}
              >
                {option}
                {selected && (
                  <span
                    aria-hidden
                    className="material-symbols-outlined self-center"
                  >
                    done
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

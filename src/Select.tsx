import { FunctionComponent, useId, useState } from "react";
import { useOutsideClickHandler } from "./useOutsideClickHandler";
import { useSelect } from "./useSelect";

interface SelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  position?: "top" | "bottom";
  className?: string;
  options: string[];
  selectedOption: string | undefined;
  setSelectedOption: (option: string) => void;
}

export const Select: FunctionComponent<SelectProps> = (props) => {
  const { selectedOption, setSelectedOption } = props;

  const [open, setOpen] = useState<boolean>(false);

  const listBoxId = useId();

  const {
    buttonRef,
    dropdownRef,
    optionRefs,
    onBlur,
    onClickExpand,
    onClickItem,
    onMenuKeyDown,
  } = useSelect({
    open,
    options: props.options,
    setOpen,
    selectedOption,
    setSelectedOption,
  });

  // close the menu when someone clicks outside of it
  useOutsideClickHandler(dropdownRef, () => setOpen(false));

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
                ref={optionRefs[index]}
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

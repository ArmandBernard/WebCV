import { FunctionComponent, RefObject, useId, useState } from "react";
import { Dialog } from "../Dialog";
import { useOutsideClickHandler } from "../../hooks/useOutsideClickHandler";
import { useSelect } from "./useSelect";

interface SelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  className?: string;
  options: string[];
  selectedOption: string | undefined;
  setSelectedOption: (option: string) => void;
}

export const SelectMobile: FunctionComponent<SelectProps> = (props) => {
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
    <div className={`flex ${props.className}`}>
      <button
        id={props.id}
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        aria-controls={listBoxId}
        aria-expanded={open}
        role="combobox"
        ref={buttonRef}
        className={`p-4 border items-center bg-background border-neutral-400 dark:border-white 
            rounded text-left flex justify-between gap-4 text-base`}
        onClick={onClickExpand}
        value={props.selectedOption}
      >
        {props.selectedOption ?? "Select an option"}
        <span aria-hidden className="material-symbols-outlined">
          arrow_drop_down
        </span>
      </button>
      <Dialog
        aria-label={props["aria-label"]}
        aria-labelledby={props["aria-labelledby"]}
        show={open}
        className={`p-0 w-full fixed bottom-4 top-auto bg-background text-text-color text-base
          border border-neutral-400 dark:border-white rounded`}
        ref={dropdownRef as RefObject<HTMLDialogElement>}
      >
        {/* Implementation of focus handling is different to spec, so listbox does not need focusing.
          Compared to https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
          and behaves the same to a screen reader and keyboard user.
          */}
        <div
          id={listBoxId}
          aria-label={props["aria-label"]}
          aria-labelledby={props["aria-labelledby"]}
          className="flex flex-col"
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
                  "p-4 flex items-baseline justify-between w-full text-left whitespace-nowrap"
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
      </Dialog>
    </div>
  );
};

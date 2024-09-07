import { createRef, useMemo, useRef } from "react";

export const useSelect = (props: {
  options: string[];
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedOption: string | undefined;
  setSelectedOption: (option: string) => void;
}) => {
  const dropdownRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // create refs for each item
  const optionRefs = useMemo(
    () =>
      Array.from({ length: props.options.length }).map(() =>
        createRef<HTMLButtonElement>()
      ),
    [props.options]
  );

  // close the dropdown on focus loss
  const onBlur = (e: React.FocusEvent) => {
    // onBlur can trigger even if the focus has switched to another child
    if (dropdownRef.current?.contains(e.relatedTarget)) {
      return;
    }

    props.setOpen(false);
  };

  // close menu and restore focus to the open button
  const onClose = () => {
    props.setOpen(false);

    buttonRef.current?.focus();
  };

  // open the menu when the dropdown button is click
  const onClickExpand = () => {
    if (!props.open) {
      props.setOpen(true);

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
        {
          e.preventDefault();

          const focusedIndex = optionRefs.findIndex(
            (bRef) => bRef.current === document.activeElement
          );
          focusOption((focusedIndex + 1) % props.options.length);
        }
        break;
      case "ArrowUp":
        {
          e.preventDefault();

          const focusedIndex = optionRefs.findIndex(
            (bRef) => bRef.current === document.activeElement
          );
          focusOption((focusedIndex - 1) % props.options.length);
        }
        break;
    }
  };

  // focus an option by its index
  const focusOption = (index: number) => {
    optionRefs[index].current?.focus();
  };

  return {
    buttonRef,
    dropdownRef,
    optionRefs,
    onBlur,
    onClickExpand,
    onClickItem,
    onMenuKeyDown,
  };
};

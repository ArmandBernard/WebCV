import {
  ReactNode,
  useEffect,
  useRef,
  HTMLAttributes,
  forwardRef,
  useImperativeHandle,
} from "react";

// HTMLElement is used here to prevent users from using "open" by accident
type DialogProps = HTMLAttributes<HTMLElement> & {
  /**
   * Show the dialog as a modal
   */
  show: boolean;
  /**
   * Any children to house inside the dialog
   */
  children?: ReactNode;
};

/**
 * An accessible modal component based on the HTML dialog element.
 * @param props All the standard HTMLElement props plus `show` to show the dialog
 */
export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  (props, ref) => {
    const { show, children, ...rest } = props;

    const innerRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => innerRef.current as HTMLDialogElement);

    useEffect(() => {
      if (show) {
        innerRef.current?.showModal();
      } else {
        innerRef.current?.close();
      }
    }, [show]);

    return (
      <dialog {...rest} ref={innerRef}>
        {children}
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

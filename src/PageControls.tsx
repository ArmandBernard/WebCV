import { FunctionComponent, useDeferredValue, useId, useMemo } from "react";
import { Select } from "./Select/Select";
import { SelectMobile } from "./Select/SelectMobile";
import { useWindowWidth } from "./useWindowWidth";

export const PageControls: FunctionComponent<{
  themePreference: string | null;
  setThemePreference: (preference: string) => void;
}> = ({ themePreference, setThemePreference }) => {
  const themePickerLabel = useId();

  const isAndroid = useMemo(
    () => navigator.userAgent.toLowerCase().includes("android"),
    []
  );

  const windowWidth = useDeferredValue(useWindowWidth());

  return (
    <div
      className={`flex items-center gap-4 fixed m-4 p-2 rounded 
          print:invisible sm:shadow-lg sm:bg-background sm:top-0 right-0 max-sm:bottom-0`}
    >
      <div className="flex items-baseline gap-2 relative">
        <label
          className={`max-sm:text-sm max-sm:absolute py-1 px-2 max-sm:left-2 rounded
              max-sm:top-[-0.75rem] bg-background`}
          id={themePickerLabel}
        >
          Theme
        </label>
        {windowWidth < 640 ? (
          <SelectMobile
            className="shadow-lg"
            aria-labelledby={themePickerLabel}
            options={["auto", "dark", "light"]}
            selectedOption={themePreference ?? "auto"}
            setSelectedOption={setThemePreference}
          />
        ) : (
          <Select
            position={"bottom"}
            aria-labelledby={themePickerLabel}
            options={["auto", "dark", "light"]}
            selectedOption={themePreference ?? "auto"}
            setSelectedOption={setThemePreference}
          />
        )}
      </div>
      {!isAndroid && (
        <button
          className={`material-symbols-outlined text-4xl bg-background rounded-full max-sm:p-2 
              border border-neutral-400 dark:border-white max-sm:shadow-lg`}
          onClick={() => window.print()}
        >
          print
        </button>
      )}
    </div>
  );
};

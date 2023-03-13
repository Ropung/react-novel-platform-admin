import InitProps from "@/utils/common-props";
import { FunctionComponent } from "react";

export interface RadioBoxGroupProps extends InitProps {
  contentList: React.ReactNode[];
  name: string;
  cellClassName?: string;
  defaultCheckedIndex?: number;
  checkedIndex?: number;
  setCheckedIndex?: (idx: number) => void;
}

const RadioCellGroup: FunctionComponent<RadioBoxGroupProps> = (props) => {
  const {
    contentList = [],
    name = "",
    className,
    cellClassName,
    defaultCheckedIndex = 0,
    checkedIndex,
    setCheckedIndex,
  } = props;

  const baseStyleClasses =
    "flex items-stretch border border-main rounded-lg overflow-hidden min-w-fit h-fit divide-x";

  const cellBaseStyleClasses =
    "relative flex w-full justify-center p-1 border-main";

  return (
    <div className={`${baseStyleClasses} ${className}`}>
      {contentList.map((content, index, array) => {
        return (
          <label className={`${cellBaseStyleClasses} ${cellClassName}`}>
            <input
              type="radio"
              className="hidden peer"
              name={name}
              defaultChecked={defaultCheckedIndex === index}
              checked={checkedIndex === index}
              onChange={() => setCheckedIndex && setCheckedIndex(index)}
            />
            <span className="absolute z-0 left-0 right-0 top-0 bottom-0 peer-checked:bg-main" />
            <span className="h-full z-10 flex items-center text-gray-600 peer-checked:text-main-contra peer-checked:font-bold">
              {content}
            </span>
          </label>
        );
      })}
    </div>
  );
};

// FIXME mk interface later
export const DarkRadioCellGroup: FunctionComponent<RadioBoxGroupProps> = (
  props
) => {
  const {
    contentList = [],
    name = "",
    className,
    cellClassName,
    defaultCheckedIndex = 0,
    checkedIndex,
    setCheckedIndex,
  } = props;

  const baseStyleClasses =
    "flex items-stretch border border-dark rounded-lg overflow-hidden min-w-fit h-fit divide-x";

  const cellBaseStyleClasses =
    "relative flex w-full justify-center p-1 border-dark";

  return (
    <div className={`${baseStyleClasses} ${className}`}>
      {contentList.map((content, index, array) => {
        return (
          <label className={`${cellBaseStyleClasses} ${cellClassName}`}>
            <input
              type="radio"
              className="hidden peer"
              name={name}
              defaultChecked={defaultCheckedIndex === index}
              checked={checkedIndex === index}
              onChange={() => setCheckedIndex && setCheckedIndex(index)}
            />
            <span className="absolute z-0 left-0 right-0 top-0 bottom-0 peer-checked:bg-dark" />
            <span className="h-full z-10 flex items-center text-gray-600 peer-checked:text-main-contra peer-checked:font-bold">
              {content}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default RadioCellGroup;

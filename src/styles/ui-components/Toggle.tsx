import { FunctionComponent } from "react";
import { CommonInputProps } from "@/utils/common-props";

export interface ToggleProps extends CommonInputProps {}

const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { id, className, checked, onChange, ...outerDivRestProps } = props;
  const stableStyleClasses = "w-14 h-8 relative";
  const checkedStyleClasses =
    "checked-dot:translate-x-[114%] checked-bg:bg-blue-600";

  return (
    <div
      {...outerDivRestProps}
      className={`${stableStyleClasses} ${checkedStyleClasses} ${
        className ?? ""
      }`}
    >
      <label>
        <input
          type="checkbox"
          className="hidden"
          id={id}
          checked={checked}
          onChange={onChange}
        />
        <div className="block bg-gray-600 w-full h-full rounded-full transition " />
        <div className="absolute -translate-y-[115%] translate-x-0.5 bg-white w-[43%] h-[75%] rounded-full transition " />
      </label>
    </div>
  );
};

export default Toggle;

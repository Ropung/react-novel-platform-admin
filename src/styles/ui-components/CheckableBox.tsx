// FIXME Move this file to ../usual-open-hours/widgets/ : 브룻 님이 Temp 쪽 작업하시고 나면.
import { CommonLabelProps } from "@/utils/common-props";
import { FunctionComponent, ReactEventHandler } from "react";

export interface CheckableBoxProps
  extends Omit<CommonLabelProps, "onChange" | "checked"> {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CheckableBox: FunctionComponent<CheckableBoxProps> = (props) => {
  const { id, className, children, checked, onChange, ...outerDivRestProps } =
    props;

  const baseStyleClasses =
    "relative min-w-[10vw] checked-bg:bg-main checked-bg:text-dark border border-gray-400 text-gray-500 rounded-lg overflow-hidden font-bold";

  return (
    <label
      {...outerDivRestProps}
      className={`${baseStyleClasses} ${className ?? ""}`}
    >
      <input
        type="checkbox"
        className="hidden "
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <div className="w-full h-full transition flex items-center justify-center p-2">
        {children ?? ""}
      </div>
    </label>
  );
};

export default CheckableBox;

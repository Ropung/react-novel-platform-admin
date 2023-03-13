import { CommonDivProps } from "@/utils/common-props";
import { FunctionComponent } from "react";

export interface StepperProps extends CommonDivProps {
  onClick?: never;
  onPlusClick?: React.MouseEventHandler<Element>;
  onMinusClick?: React.MouseEventHandler<Element>;
}

const Stepper: FunctionComponent<StepperProps> = (props) => {
  const { children, onMinusClick, onPlusClick, className } = props;
  const baseStyleClasses =
    "flex justify-between px-10 border-2 border-solid border-gray-300 rounded-full gap-4 leading-10 text-lg items-center";

  return (
    <div className={`${baseStyleClasses} ${className}`}>
      <input type="button" value="-" onClick={onMinusClick} />
      <span className="break-normal">{children}</span>
      <input type="button" value="+" onClick={onPlusClick} />
    </div>
  );
};

export default Stepper;

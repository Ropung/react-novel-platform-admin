import { CommonDivProps } from "@utils/common-props";
import { FunctionComponent } from "react";

const Tag: FunctionComponent<CommonDivProps> = (props) => {
  const { className, children, ...restProps } = props;
  const baseStyleClasses = "border-2 border-solid border-gray-100 rounded-full p-1.5 text-xs";

  return (
    <span {...restProps}
      className={`${baseStyleClasses} ${className??""}`}
    >
      {children}
    </span>
  );
};
export default Tag;
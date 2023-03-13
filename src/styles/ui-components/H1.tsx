import { FunctionComponent } from "react";
import { CommonDivProps } from "@/utils/common-props";

export interface H1Props extends CommonDivProps {}

const H1: FunctionComponent<H1Props> = (props) => {
  const { children, className, ...restProps } = props;
  const baseStyleClasses = "text-2xl font-bold my-6";

  return (
    <h1 {...restProps} className={`${baseStyleClasses} ${className}`}>
      {children}
    </h1>
  );
};

export default H1;

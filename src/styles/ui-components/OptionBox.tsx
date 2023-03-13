import InitProps from "@utils/common-props";
import { FunctionComponent } from "react";
import OptionLine, { OptionValueItem } from "./OptionLine";

export interface OptionBoxProps extends InitProps {
  title?: string;
  contentList?: Array<OptionValueItem>;
  minSelect?: number;
  maxSelect?: number;
  eachLineClassName?: string;
}

const OptionBox: FunctionComponent<OptionBoxProps> = (props) => {
  const {
    title,
    contentList,
    className,
    eachLineClassName,
    minSelect,
    maxSelect,
    ...restProps
  } = props;
  const baseStyleClasses = "";
  const isRadio = minSelect === 1 && maxSelect === 1;

  return (
    <section {...restProps} className={`${baseStyleClasses} ${className}`}>
      <>
        <h1>{title}</h1>
        {contentList?.map((optionValue, index, array) => {
          <OptionLine
            key={optionValue.id}
            isRadio={isRadio}
            optValItem={optionValue}
            className={eachLineClassName}
          />;
        })}
      </>
    </section>
  );
};

export default OptionBox;

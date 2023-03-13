import InitProps, { CommonLabelProps } from "@utils/common-props";
import { FunctionComponent } from "react";

export interface OptionValueItem {
  id?: string;
  contentName?: string;
  groupName?: string;
  contentValue?: string;
}

export interface OptionLineProps extends CommonLabelProps {
  isRadio?: boolean;
  optValItem?: OptionValueItem;
}

const OptionLine: FunctionComponent<OptionLineProps> = (props) => {
  const { isRadio, className, optValItem, ...restProps } = props;
  const { id: optValId, contentValue, contentName, groupName } = optValItem!;

  return (
    <label
      {...restProps}
      className={`flex justify-between pb-6 ${className ?? ""}`}
    >
      {/* 체크박스 영역 */}
      <div>
        <input
          type={isRadio ? "radio" : "checkbox"}
          name={groupName}
          value={optValId}
        />
        <span className="pl-3 w-full">{contentName}</span>
      </div>
      {/* 가격 영역 */}
      <div>{contentValue}원</div>
    </label>
  );
};

export default OptionLine;

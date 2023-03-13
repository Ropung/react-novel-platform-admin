import { CommonDivProps, CommonLabelProps } from "@/utils/common-props";
import { OnChangeProps } from "@/utils/event-handler-props";
import { FunctionComponent } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";

export interface ZzimContainerProps extends Omit<CommonLabelProps, "onChange"> {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const ZzimContainer: FunctionComponent<ZzimContainerProps> = (props) => {
  const { checked, className, onChange, children, ...restProps } = props;
  const baseStyleClasses = "flex w-1/3 justify-center items-center gap-2";

  return (
    <label {...restProps} className={`${baseStyleClasses} ${className}`}>
      <input
        id="i-am-a-zzim"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        hidden
      />
      {checked ? (
        <RiHeart3Fill className="text-red-600 min-w-[1rem]" />
      ) : (
        <RiHeart3Line className="min-w-[1rem]" />
      )}
      {children}
    </label>
  );
};

export default ZzimContainer;

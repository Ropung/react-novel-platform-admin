import { CommonInputProps } from "@/utils/common-props";
import { FunctionComponent, useRef } from "react";

export interface TelInputProps extends CommonInputProps {
  telState?: string;
}

const TelInput: FunctionComponent<TelInputProps> = (props) => {
  const TelFormRef = useRef<HTMLInputElement | null>(null);
  const { telState = "", onChange, className, ...restProps } = props;

  return (
    <input
      {...restProps}
      type="tel"
      ref={TelFormRef}
      className={`w-full px-2 py-1 ${className}`}
      onChange={(event) => {
        if (!TelFormRef.current) {
          return;
        }

        const hyphenRef =
          TelFormRef.current.value.length >= 13
            ? /^(\d{0,3})(\d{0,4})(\d{0,4})$/g
            : /^(\d{0,3})(\d{0,3})(\d{0,4})$/g;

        TelFormRef.current.value = TelFormRef.current.value
          .replace(/[^0-9]/g, "")
          .replace(hyphenRef, "$1-$2-$3")
          .replace(/(\-{1,2})$/g, "");

        onChange && onChange(event);
      }}
    />
  );
};

export default TelInput;

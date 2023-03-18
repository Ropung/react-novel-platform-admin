import { FunctionComponent } from "react";
import { CommonButtonProps } from "@utils/common-props";

const ButtonInterface: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  const baseStyleClasses =
    "border border-2 rounded-md p-2 disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-400 disabled:active:scale-105 transition duration-150 active:scale-95";

  return (
    <button {...restProps} className={`${baseStyleClasses} ${className ?? ""}`}>
      {children}
    </button>
  );
};

const MainButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={"bg-main text-main-contra " + className}
    >
      {children}
    </ButtonInterface>
  );
};

export default MainButton;

export const SubButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  return (
    <ButtonInterface
      {...restProps}
      className={"bg-sub text-sub-contra " + className}
    >
      {children}
    </ButtonInterface>
  );
};

export const PrimaryButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-primary text-primary-contra";
  const activeClasses = "active:bg-primary-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const SecondaryButton: FunctionComponent<CommonButtonProps> = (
  props
) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-secondary text-secondary-contra";
  const activeClasses = "active:bg-secondary-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const SuccessButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-success text-success-contra";
  const activeClasses = "active:bg-success-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const DeleteButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-danger text-danger-contra";
  const activeClasses = "active:bg-danger-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const WanringButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-warning text-warning-contra";
  const activeClasses = "active:bg-warning-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const ModifyButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-modify text-modify-contra text-white";
  const activeClasses = "active:bg-modify-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const InfoButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-info text-info-contra";
  const activeClasses = "active:bg-info-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const LinkButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-link text-link-contra underline border-none";
  const activeClasses = "active:bg-link-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const LightButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-light text-light-contra";
  const activeClasses = "active:bg-light-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const DarkButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-dark text-dark-contra";
  const activeClasses = "active:bg-dark-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const BasicButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-basic text-basic-contra";
  const activeClasses = "active:bg-basic-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

export const DefaultButton: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "bg-default text-default-contra";
  const activeClasses = "active:bg-default-active";

  return (
    <ButtonInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </ButtonInterface>
  );
};

// FIXME Outline 버튼 disabled 디자인 수정하려면 수정
const OutlineBtnInterface: FunctionComponent<CommonButtonProps> = (props) => {
  const { children, className, ...restProps } = props;
  const baseStyleClasses =
    "bg-light border border-2 rounded-md p-2 disabled:bg-gray-300 disabled:text-gray-400 disabled:border-gray-400 disabled:active:scale-105 transition duration-150 active:scale-95";

  return (
    <button {...restProps} className={`${baseStyleClasses} ${className ?? ""}`}>
      {children}
    </button>
  );
};

export const MainOutlineButton: FunctionComponent<CommonButtonProps> = (
  props
) => {
  const { children, className, ...restProps } = props;

  const stableClasses = "border-main text-main";
  const activeClasses = "";

  return (
    <OutlineBtnInterface
      {...restProps}
      className={`${stableClasses} ${activeClasses} ${className ?? ""}`}
    >
      {children}
    </OutlineBtnInterface>
  );
};

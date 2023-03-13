import { HTMLProps as Props } from "react";

type InitProps = Props<HTMLElement>;
export default InitProps;

export type CommonInputProps = Props<HTMLInputElement>;

export type CommonDivProps = Omit<Props<HTMLDivElement>, "classID">;

export type CommonLabelProps = Props<HTMLLabelElement>;

export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

// FIXME react icons props 확인
//  export type CommonIconProps = Props<SVGSVGElement>;

// export interface CommonIconProps {
//   onClick?: React.MouseEventHandler<SVGSVGElement>;
//   onChange?: React.ChangeEventHandler<SVGSVGElement>;
// }

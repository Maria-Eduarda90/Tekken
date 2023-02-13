import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value?: string;
  onChange?: (value: string) => void;
};
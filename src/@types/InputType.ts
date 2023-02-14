import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
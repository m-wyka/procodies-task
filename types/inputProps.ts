import type { InputType } from "~/types/inputType";

export type InputProps = {
  modelValue: string;
  name: string;
  type?: InputType;
  placeholder?: string;
  label?: string;
  errors?: string[];
}
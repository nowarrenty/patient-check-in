import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import {
  type FieldValue,
  type FieldValues,
  type FormState,
  type UseFormGetValues,
  type UseFormHandleSubmit,
  type UseFormRegister,
  type UseFormRegisterReturn,
  type UseFormWatch,
} from "react-hook-form";

type Register = UseFormRegister<FieldValues>;
type SetFormStep = Dispatch<SetStateAction<number>>;

export interface FormProps {
  register: Register;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setFormStep: SetFormStep;
  numForms: number;
  tailwind?: string;
  id: string;
  formStep: number;
  formState?: FormState<FieldValues>;
  watch: UseFormWatch<any>;
  getValues?: UseFormGetValues<any>;
}

export interface VisitForFormProps extends FormProps {
  tailwind?: string;
  register: Register;
}

export type TopNavProps = {
  setFormStep: SetFormStep;
  formStep: number;
  numSteps: number;
  tailwind?: string;
};

export type RadioItemProps = {
  label: string;
  name: string;
  registration: UseFormRegisterReturn<string>;
};

export type NextButtonProps = {
  tailwind?: string;
  formStep: number;
  isNextButtonActive: boolean;
};

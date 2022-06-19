import { Dispatch, SetStateAction } from "react";

export type VisitorFormProps = {
  personVisitingOptions?: Set<string>;
  tailwind?: string;
};

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

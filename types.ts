import { Dispatch, SetStateAction } from "react";

export type VisitorFormProps = {
  personVisitingOptions?: Set<string>;
  tailwind?: string;
};

export type TopNavProps = {
  setFormStep: Dispatch<SetStateAction<number>>;
  formStep: number;
  numSteps: number;
  tailwind?: string;
};

export type RadioItemProps = {
  label: string;
  name: string;
};

export type NextButtonProps = {
  tailwind?: string;
};

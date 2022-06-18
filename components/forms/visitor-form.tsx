import { type NextComponentType } from "next";
import { VisitorFormProps } from "../../types";
import { RadioItem } from "../radio";

const VisitorForm: NextComponentType = ({ tailwind }: VisitorFormProps) => {
  const options = new Set<string>()
    .add("Myself")
    .add("My child")
    .add("My Spouse")
    .add("Other");

  const radioItems = Array.from(options).map((option, index) => (
    <RadioItem label={option} key={index} name="personVisiting"/>
  ));

  return (
    <div className="">
      <h1 className="text-3xl mt-6 font-semibold">Who is this visit for?</h1>
      <div className="space-y-2 mt-10">{radioItems}</div>
    </div>
  );
};

export { VisitorForm };

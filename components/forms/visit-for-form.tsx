import { VisitForFormProps } from "../../types";
import { RadioItem } from "../radio";

const VisitForForm = ({ tailwind, register, watch }: VisitForFormProps) => {
  const options = new Set<string>()
    .add("Myself")
    .add("My child")
    .add("My Spouse")
    .add("Other");

  const name = "visitFor";

  const radioItems = Array.from(options).map((option, index) => (
    <RadioItem
      label={option}
      key={index}
      name={name}
      registration={register(name, { required: true })}
    />
  ));

  return (
    <form>
      <h1 className="text-3xl mt-6 font-semibold">Who is this visit for?</h1>
      <div className="space-y-2 mt-10">{radioItems}</div>
    </form>
  );
};

export { VisitForForm };

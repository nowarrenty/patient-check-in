import { useEffect } from "react";
import { VisitForFormProps } from "../../types";
import { RadioItem } from "../radio";

const VisitForForm = ({
  tailwind,
  register,
  id,
  setFormStep,
  handleSubmit,
  numForms,
  watch,
  toggleNextButton,
}: VisitForFormProps) => {
  useEffect(() => {
    const { visitFor } = watch();
    if (visitFor)
      toggleNextButton((isActive) => (isActive ? isActive : !isActive));
  });

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
      registration={register(name)}
    />
  ));

  return (
    <form
      id={id}
      className={`${tailwind || ""}`}
      onSubmit={handleSubmit((e) => {
        setFormStep((step) => (step + 1 >= numForms ? step : step + 1));
      })}
    >
      <h1 className="text-3xl mt-6 font-semibold">Who is this visit for?</h1>
      <div className="space-y-2 mt-10">{radioItems}</div>
    </form>
  );
};

export { VisitForForm };

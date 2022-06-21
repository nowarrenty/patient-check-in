import { ComplaintProps } from "../../types";
import { CheckList } from "../checkList";

const ComplaintForm = ({
  control,
  watch,
  id,
  handleSubmit,
  setFormStep,
  numForms,
}: ComplaintProps) => {
  return (
    <form
      id={id}
      onSubmit={handleSubmit((e) => {
        setFormStep((step) => (step + 1 >= numForms ? step : step + 1));
      })}
      className="flex flex-col"
    >
      <h1 className="text-3xl mt-6 font-semibold">
        {`What's the reason for your visit today?`}
      </h1>
      <p className="text-xs mt-6">Select all that apply.</p>
      <CheckList
        options={[
          "Stomach pain, diarrhea or digestive issues",
          "Back pain",
          "Cut, stab or wound",
          "Headache (including migraine)",
          "Nausea and Vomiting",
          "Skin disorder, rash or allergy",
          "I cant explain",
          "Other",
        ]}
        name="reasons"
        required={true}
        control={control}
        tailwind="mt-10"
      />
    </form>
  );
};

export { ComplaintForm };

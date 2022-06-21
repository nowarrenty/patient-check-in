import { FormProps } from "../../types";

export function IllnessForm({
  register,
  tailwind,
}: FormProps) {
  return (
    <form
      className="flex flex-col"
    >
      <h1 className="text-3xl mt-6 font-semibold">
        {`Do you have any of theses?`}
      </h1>
      <p className="mt-6 text-xs ">Select all that apply.</p>
      <div className={`divide-y mt-10 ${tailwind}`}>
        {[
          "Diabetes",
          "Hypertension",
          "Kidney Disease",
          "Liver Disease",
          "Heart Disease",
          "Cancer",
          "Asthma",
          "Sickle Cell",
          `I don't have any of these`,
        ].map((illness) => {
          return (
            <label
              className={`flex items-center bg-white h-10 indent-2 first:rounded-t-xl last:rounded-b-xl border-gray-100`}
              key={illness}
            >
              <input
                {...register("Illnesses", { required: true })}
                name={"Illnesses"}
                value={illness}
                type={"checkbox"}
                className="w-4 h-4 ml-4 mr-2"
              />
              {illness}
            </label>
          );
        })}
      </div>
    </form>
  );
}

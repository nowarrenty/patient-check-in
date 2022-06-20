import { useEffect } from "react";
import { FormProps } from "../../types";

const PersonalDetailsForm = ({
  register,
  handleSubmit,
  formState,
  id,
  setFormStep,
  numForms,
}: FormProps) => {
  useEffect(() => {
    console.log(JSON.stringify(formState?.isValid));
  }, [formState]);
  const inputCSS =
    "mt-1 text-base bg-white border border-gray-300 rounded-lg h-[50px] indent-4";
  const labelCSS = "grid text-x";
  const radioLabelCSS = `grid grid-cols-2 items-center bg-white border border-gray-300 rounded-lg h-12 indent-4 `;
  const radioCSS = `w-4 h-4 justify-self-end mr-4`;
  return (
    <form
      id={id.toString()}
      className="mb-5"
      onSubmit={handleSubmit((e) => {
        setFormStep((step) => (step + 1 >= numForms ? step : step + 1));
      })}
    >
      <h1 className="text-3xl mt-6 font-semibold">Add your personal details</h1>
      <div className="space-y-5 mt-10">
        <label className={labelCSS}>
          First Name
          <input
            {...register("First Name", { required: true })}
            type={"text"}
            name={"First Name"}
            className={inputCSS}
          ></input>
        </label>
        <label className={labelCSS}>
          Last Name
          <input
            {...register("Last Name", { required: true })}
            type={"text"}
            name={"Last Name"}
            className={inputCSS}
          ></input>
        </label>
        <label className={labelCSS}>
          Date of Birth
          <input
            {...register("Date of Birth", { required: true })}
            type={"text"}
            name={"Date of Birth"}
            className={inputCSS}
          ></input>
        </label>
        <label className={labelCSS}>
          Phone Number
          <input
            {...register("Phone Number", { required: true })}
            type={"tel"}
            name={"Phone Number"}
            className={inputCSS}
          ></input>
        </label>
        <div className="flex flex-col space-y-2">
          <label>Sex</label>
          <label>
            <label className={radioLabelCSS}>
              Female
              <input
                {...register("Sex", { required: true })}
                name={"Sex"}
                value={"Female"}
                className={radioCSS}
                type="radio"
              />
            </label>
          </label>
          <label>
            <label className={radioLabelCSS}>
              Male
              <input
                {...register("Sex")}
                name={"Sex"}
                value={"Male"}
                className={radioCSS}
                type="radio"
              />
            </label>
          </label>
          <label>
            <label className={radioLabelCSS}>
              Other
              <input
                {...register("Sex")}
                name={"Sex"}
                value={"Other"}
                className={radioCSS}
                type="radio"
              />
            </label>
          </label>
        </div>
      </div>
    </form>
  );
};

export { PersonalDetailsForm };

import { FormProps } from "../../types";

const PersonalDetailsForm = ({
  register,
  formState: { errors },
}: FormProps) => {
  const inputCSS =
    "mt-1 text-base bg-white border border-gray-300 rounded-lg h-[50px] indent-4";
  const labelCSS = "grid text-xs";
  const radioLabelCSS = `grid grid-cols-2 items-center bg-white border border-gray-300 rounded-lg h-12 indent-4 `;
  const radioCSS = `w-4 h-4 justify-self-end mr-4`;
  const pErrorCSS = `text-sm text-red-600`;
  return (
    <form
      className="mb-5"
    >
      <h1 className="text-3xl mt-6 font-semibold">Add your personal details</h1>
      <div className="space-y-5 mt-10">
        <label className={labelCSS}>
          First Name
          <input
            {...register("First Name", { required: "First name is required." })}
            type={"text"}
            name={"First Name"}
            className={`${inputCSS} ${
              errors["First Name"] ? " border-red-600" : ""
            }`}
          ></input>
          {errors["First Name"] && (
            <p className={pErrorCSS}>{errors["First Name"].message}</p>
          )}
        </label>
        <label className={labelCSS}>
          Last Name
          <input
            {...register("Last Name", { required: "Last name is required." })}
            type={"text"}
            name={"Last Name"}
            className={`${inputCSS} ${
              errors["Last Name"] ? " border-red-600" : ""
            }`}
          ></input>
          {errors["Last Name"] && (
            <p className={pErrorCSS}>{errors["Last Name"].message}</p>
          )}
        </label>
        <label className={labelCSS}>
          Date of Birth
          <input
            {...register("Date of Birth", {
              required: "Date of birth is required.",
            })}
            type={"text"}
            name={"Date of Birth"}
            placeholder={`dd/mm/yyyy`}
            className={`${inputCSS} ${
              errors["Date of Birth"] ? " border-red-600" : ""
            }`}
          ></input>
          {errors["Date of Birth"] && (
            <p className={pErrorCSS}>{errors["Date of Birth"].message}</p>
          )}
        </label>
        <label className={labelCSS}>
          Phone Number
          <input
            {...register("Phone Number", {
              required: "Phone number is required.",
            })}
            type={"tel"}
            name={"Phone Number"}
            placeholder={`876123456`}
            className={`${inputCSS} ${
              errors["Phone Number"] ? " border-red-600" : ""
            }`}
          ></input>
          {errors["Phone Number"] && (
            <p className={pErrorCSS}>{errors["Phone Number"].message}</p>
          )}
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

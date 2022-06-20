import { NextPage } from "next";
import { useState } from "react";
import { PersonalDetailsForm } from "../components/forms/personal-details-form";
import TopNav from "../components/top-nav";
import { VisitForForm } from "../components/forms/visit-for-form";
import { NextButton } from "../components/next-button";
import { useForm } from "react-hook-form";

const Form: NextPage = () => {
  const [formStep, setFormStep] = useState(0);

  const {
    register: registerVisitForForm,
    handleSubmit: handleSubmitVisitForForm,
    formState: formStateVisitForForm,
    watch: watchVisitForForm,
    getValues: getValuesVisitForForm,
    getFieldState,
  } = useForm({
    defaultValues: { visitFor: "" },
    mode: "onChange",
  });

  const {
    register: registerPersonalDetailsForm,
    handleSubmit: handleSubmitPersonalDetailsForm,
    formState: formStatePersonalDetailsForm,
    watch: watchPersonalDetailsForm,
    getValues: getValuesPersonalDetailsForm,
  } = useForm({
    defaultValues: {
      "First Name": "",
      "Last Name": "",
      "Date of Birth": "",
      "Phone Number": "",
      Sex: "",
    },
    mode: "onChange",
  });

  const numForms = 2;

  const forms = [
    {
      form: (
        <VisitForForm
          register={registerVisitForForm}
          handleSubmit={handleSubmitVisitForForm}
          setFormStep={setFormStep}
          formStep={formStep}
          numForms={numForms}
          formState={formStateVisitForForm}
          watch={watchVisitForForm}
          id={"0"}
          key={0}
        />
      ),
      isValid: formStateVisitForForm.isValid,
    },
    {
      form: (
        <PersonalDetailsForm
          register={registerPersonalDetailsForm}
          handleSubmit={handleSubmitPersonalDetailsForm}
          setFormStep={setFormStep}
          formStep={formStep}
          numForms={numForms}
          formState={formStatePersonalDetailsForm}
          watch={watchPersonalDetailsForm}
          getValues={getValuesPersonalDetailsForm}
          id={"1"}
          key={1}
        />
      ),
      isValid: formStatePersonalDetailsForm.isValid,
    },
  ];
  return (
    <div className="flex flex-col mx-4 h-full">
      <TopNav
        setFormStep={setFormStep}
        numSteps={forms.length}
        formStep={formStep}
        tailwind="mt-4"
      />
      {forms[formStep].form}
      <div className="flex grow"></div>
      <div>
        <NextButton
          tailwind="mb-7 mt-7"
          formStep={formStep}
          isNextButtonActive={forms[formStep].isValid}
        />
      </div>
    </div>
  );
};

export default Form;

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { PersonalDetailsForm } from "../components/forms/personal-details-form";
import TopNav from "../components/top-nav";
import { VisitForForm } from "../components/forms/visit-for-form";
import { NextButton } from "../components/next-button";
import { useForm } from "react-hook-form";

const Form: NextPage = () => {
  const [isNextButtonActive, toggleNextButton] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const {
    register: registerVisitForForm,
    handleSubmit: handleSubmitVisitForForm,
    formState: formStateVisitForForm,
    watch: watchVisitForForm,
    getValues: getValuesVisitForForm,
    getFieldState,
  } = useForm({
    defaultValues: { visitFor: "Myself" },
    // reValidateMode: "onChange",
    // mode: "onChange",
  });

  const numForms = 1;

  const forms = [
    <VisitForForm
      register={registerVisitForForm}
      handleSubmit={handleSubmitVisitForForm}
      setFormStep={setFormStep}
      formStep={formStep}
      numForms={numForms}
      formState={formStateVisitForForm}
      watch={watchVisitForForm}
      toggleNextButton={toggleNextButton}
      getValues={getValuesVisitForForm}
      id={"0"}
      key={0}
    />,

    // <PersonalDetailsForm key={1} />,
  ];

  return (
    <div className="flex flex-col mx-4 h-full">
      <TopNav
        setFormStep={setFormStep}
        numSteps={forms.length}
        formStep={formStep}
        tailwind="mt-4"
      />
      {forms[formStep]}
      <div className="grow place-self-end"></div>
      <NextButton
        tailwind="mb-10"
        formStep={formStep}
        isNextButtonActive={isNextButtonActive}
      />
    </div>
  );
};

export default Form;

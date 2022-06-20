import { NextPage } from "next";
import { useState } from "react";
import { PersonalDetailsForm } from "../components/forms/personal-details-form";
import TopNav from "../components/top-nav";
import { VisitForForm } from "../components/forms/visit-for-form";
import { NextButton } from "../components/next-button";
import { useForm } from "react-hook-form";
import { ComplaintForm } from "../components/forms/complaint-form";
import { IllnessForm } from "../components/forms/illness-form";

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
    register: registerPersonalDetails,
    handleSubmit: handleSubmitPersonalDetails,
    formState: formStatePersonalDetails,
    watch: watchPersonalDetailsForm,
    getValues: getValuesPersonalDetails,
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

  const {
    register: registerComplaint,
    handleSubmit: handleSubmitComplaint,
    formState: formStateComplaint,
    watch: watchComplaint,
    getValues: getValuesComplaint,
    control: controlComplaint,
  } = useForm({
    defaultValues: { reasons: [] },
    mode: "onChange",
  });

  const {
    register: registerIllness,
    handleSubmit: handleSubmitIllness,
    formState: formStateIllness,
    watch: watchIllness,
    getValues: getValuesIllness,
  } = useForm({ defaultValues: { Illnesses: [] }, mode: "onChange" });

  const numForms = 4;

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
        <ComplaintForm
          register={registerComplaint}
          control={controlComplaint}
          handleSubmit={handleSubmitComplaint}
          setFormStep={setFormStep}
          formStep={formStep}
          numForms={numForms}
          formState={formStateComplaint}
          watch={watchComplaint}
          id={"1"}
          key={1}
        />
      ),
      isValid: formStateComplaint.isValid,
    },
    {
      form: (
        <PersonalDetailsForm
          register={registerPersonalDetails}
          handleSubmit={handleSubmitPersonalDetails}
          setFormStep={setFormStep}
          formStep={formStep}
          numForms={numForms}
          formState={formStatePersonalDetails}
          watch={watchPersonalDetailsForm}
          getValues={getValuesPersonalDetails}
          id={"2"}
          key={2}
        />
      ),
      isValid: formStatePersonalDetails.isValid,
    },
    {
      form: (
        <IllnessForm
          register={registerIllness}
          handleSubmit={handleSubmitIllness}
          setFormStep={setFormStep}
          formStep={formStep}
          numForms={numForms}
          formState={formStateIllness}
          watch={watchIllness}
          getValues={getValuesIllness}
          id={"3"}
          key={3}
        />
      ),
      isValid: formStateIllness.isValid,
    },
  ];
  console.log(formStateComplaint.isValid);
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

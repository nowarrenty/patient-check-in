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
    formState: formStateVisitForForm,
    watch: watchVisitForForm,
    getValues: getValuesVisitForForm,
  } = useForm({
    defaultValues: { visitFor: "" },
    mode: "onChange",
  });

  const {
    register: registerPersonalDetails,
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
    formState: formStateIllness,
    watch: watchIllness,
    getValues: getValuesIllness,
  } = useForm({ defaultValues: { Illnesses: [] }, mode: "onChange" });

  const formData = [
    {
      form: (
        <VisitForForm
          register={registerVisitForForm}
          formState={formStateVisitForForm}
          watch={watchVisitForForm}
          key={0}
        />
      ),
      isValid: formStateVisitForForm.isValid,
      isDirty: formStateVisitForForm.isDirty,
      getValues: getValuesVisitForForm,
    },
    {
      form: (
        <ComplaintForm
          register={registerComplaint}
          control={controlComplaint}
          formState={formStateComplaint}
          watch={watchComplaint}
          key={1}
        />
      ),
      isValid: formStateComplaint.isValid,
      isDirty: formStateComplaint.isDirty,
      getValues: getValuesComplaint,
    },
    {
      form: (
        <PersonalDetailsForm
          register={registerPersonalDetails}
          formState={formStatePersonalDetails}
          watch={watchPersonalDetailsForm}
          getValues={getValuesPersonalDetails}
          key={2}
        />
      ),
      isValid: formStatePersonalDetails.isValid,
      isDirty: formStatePersonalDetails.isDirty,
      getValues: getValuesPersonalDetails,
    },
    {
      form: (
        <IllnessForm
          register={registerIllness}
          formState={formStateIllness}
          watch={watchIllness}
          getValues={getValuesIllness}
          key={3}
        />
      ),
      isValid: formStateIllness.isValid,
      isDirty: formStateIllness.isDirty,
      getValues: getValuesIllness,
    },
  ];

  const getValueFns = formData.map(({ getValues }) => getValues);
  const isValidMarkers = formData.map(({ isValid }) => isValid);

  return (
    <div className="flex flex-col mx-4 h-full">
      <TopNav
        setFormStep={setFormStep}
        numSteps={formData.length}
        formStep={formStep}
        tailwind="mt-4"
      />
      {formData[formStep].form}
      <div className="flex grow"></div>
      <div className="flex flex-col">
        <NextButton
          tailwind="mb-7 mt-7"
          formStep={formStep}
          setFormStep={setFormStep}
          numForms={formData.length}
          isNextButtonActive={formData[formStep].isValid}
          getValueFns={getValueFns}
          isValidMarkers={isValidMarkers}
        />
      </div>
    </div>
  );
};

export default Form;

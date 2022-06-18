import { NextPage } from "next";
import { useState } from "react";
import { PersonalDetailsForm } from "../components/forms/personal-details-form";
import TopNav from "../components/forms/top-nav";
import { VisitorForm } from "../components/forms/visitor-form";
import { NextButton } from "../components/next-button";

const Form: NextPage = () => {
  const [formStep, setFormStep] = useState(0);
  const forms = [<VisitorForm key={0} />, <PersonalDetailsForm key={1} />];
  return (
    <div className="flex flex-col mx-4 h-full">
      <TopNav
        setFormStep={setFormStep}
        numSteps={forms.length}
        formStep={formStep + 1}
        tailwind="mt-4"
      />
      {forms[formStep]}
      <div className="grow place-self-end"></div>
      <NextButton tailwind="mb-10"/>
    </div>
  );
};

export default Form;

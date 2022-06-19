import Image from "next/image";
import doubleArrow from "../public/double_arrow.svg";
import { NextButtonProps } from "../types";

const NextButton = ({
  tailwind,
  formStep,
  isNextButtonActive,
}: NextButtonProps) => {
  const buttonColor = isNextButtonActive ? "bg-blue-700" : "bg-gray-300";
  return (
    <button
      disabled={isNextButtonActive ? false : true}
      form={formStep.toString()}
      className={`flex justify-center items-center ${buttonColor} h-10 
      text-white rounded-full ml-auto px-6
      ${tailwind || ""}`}
    >
      Next
      <div className="ml-3">
        <Image src={doubleArrow} alt="Next double arrow" />
      </div>
    </button>
  );
};

export { NextButton };

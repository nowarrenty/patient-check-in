import Image from "next/image";
import doubleArrow from "../public/double_arrow.svg";
import { NextButtonProps } from "../types";

const NextButton = ({ tailwind }: NextButtonProps) => {
  return (
    <button
      type="button"
      className={`flex justify-center items-center bg-blue-700 h-10 
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

import { TopNavProps } from "../../types";
import Image from "next/image";
import { MouseEventHandler } from "react";
import backImage from "../../public/back.svg";

const TopNav = ({ setFormStep, numSteps, formStep, tailwind }: TopNavProps) => {
  const onClick: MouseEventHandler = (e) => {
    setFormStep((step) => (step === 0 ? step : step - 1));
  };

  const percentage = `${(formStep / numSteps) * 100}%`;
  const style = { width: percentage };

  return (
    <div className={`flex ${tailwind || ""}`}>
      <button type="button" onClick={onClick}>
        <Image src={backImage} alt="back-arrow" />
      </button>
      <div className={`h-3 bg-[#D9D9D9] grow mx-4 mt-[5px] rounded-xl`}>
        <div style={style} className="bg-blue-700 grow rounded-xl h-3"></div>
      </div>
    </div>
  );
};

export default TopNav;

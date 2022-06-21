import { TopNavProps } from "../types";
import Image from "next/image";
import { MouseEventHandler } from "react";
import backImage from "../public/back.svg";
import { useRouter } from "next/router";

const TopNav = ({ setFormStep, numSteps, formStep, tailwind }: TopNavProps) => {
  const router = useRouter();
  // Add one to formStep so that math functions dont use 0 for calculations
  const step = formStep + 1;
  
  const onClick: MouseEventHandler = (e) => {
    setFormStep((step) => (step === 0 ? step : step - 1));
    if (step === 1) router.push("/");
  };

  const percentage = `${(step / numSteps) * 100}%`;
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

/**
 * TODO
 * 1. Expand back button padding so that there is more space to register clicks
 */

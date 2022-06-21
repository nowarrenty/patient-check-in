import Image from "next/image";
import personSVG from "../public/person.svg";
import lineSVG from "../public/line.svg";

export default function Completed() {
  return (
    <div className="flex flex-col h-full mx-4">
      <div className="flex flex-col items-center grow">
        <div className="flex flex-col mt-10">
          <Image src={personSVG} alt={""} priority />
        </div>
        <p className="self-center mt-10 font-medium text-2xl text-center">{`You're checked in to see a doctor.`}</p>
        <div className="flex flex-col mt-7">
          <Image src={lineSVG} alt={``} />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center mt-10 mb-2">{`Here's your position in line:`}</p>
          <div
            className={`bg-blue-700 h-[170px] w-[170px] rounded-full flex flex-col items-center 
          justify-center text-white`}
          >
            <p className="text-sm">Position</p>
            <p className="font-bold text-6xl">{4}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 mb-7 text-center font-semibold mx-8">{`We Will call your number when it's your turn to see the doctor`}</p>
    </div>
  );
}

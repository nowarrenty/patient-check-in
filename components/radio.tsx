import { RadioItemProps } from "../types";

const RadioItem = ({ label,name }: RadioItemProps) => {
  return (
    <label className="grid grid-cols-2 items-center bg-white border border-gray-300 rounded-lg h-12 indent-4">
      {label}
      <input
        // {...registration}
        name={name}
        value={label}
        className="w-4 h-4 justify-self-end mr-4"
        type="radio"
      />
    </label>
  );
};

export { RadioItem };
